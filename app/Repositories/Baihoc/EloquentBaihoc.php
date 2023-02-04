<?php

namespace Vanguard\Repositories\Baihoc;


use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Vanguard\Baihoc;
use Vanguard\Events\Baihoc\Created;
use Vanguard\Events\Baihoc\Deleted;
use Vanguard\Events\Baihoc\Updated;
use Vanguard\Http\Filters\BaihocKeywordSearch;


class EloquentBaihoc implements BaihocRepository
{
    /**
     * {@inheritdoc}
     */
    public function all()
    {
        return Baihoc::all();
    }

    public function paginate($perPage, $search = null, $khoahoc_id = null)
    {
        $query = Baihoc::query();

        if ($khoahoc_id) {
            $query->where('khoahoc_id', $khoahoc_id);
        }

        if ($search) {
            (new BaihocKeywordSearch)($query, $search);
        }

        $result = $query->orderBy('id', 'desc')
            ->paginate($perPage);

        if ($search) {
            $result->appends(['search' => $search]);
        }

        if ($khoahoc_id) {
            $result->appends(['khoahoc_id' => $khoahoc_id]);
        }


        return $result;
    }

    /**
     * {@inheritdoc}
     */
    public function getAllWithUsersCount()
    {

        return Categories::withCount('users')->get();
    }

    /**
     * {@inheritdoc}
     */
    public function find($id)
    {
        return Baihoc::find($id);
    }

    /**
     * {@inheritdoc}
     */
    public function create(array $data)
    {
        if (isset($data['baihoc_file']) || isset($data['baihoc_pass_zip'])) {
            $data['baihoc_pass_zip'] = $this->str_encrypt($data['baihoc_pass_zip']);
        }
        $baihoc = Baihoc::create($data);
        event(new Created($baihoc));
        return $baihoc;
    }

    /**
     * {@inheritdoc}
     */
    public function update($id, array $data)
    {
        $baihoc = $this->find($id);
        if (isset($data['baihoc_file'])|| isset($data['baihoc_pass_zip'])) {
            $path_file = $this->getDestinationDirectory();
            if ($baihoc->baihoc_file) {
                $fileDelete = $path_file . '/' . $baihoc->baihoc_file;
                try {
                    unlink($fileDelete);
                } catch (\Exception $exception) {
                    Log::error('Message: Detele file ' . $exception->getMessage() . '--' . $exception->getLine());
                }
            }
            $data['baihoc_pass_zip'] = $this->str_encrypt($data['baihoc_pass_zip']);
        }

        $baihoc->update($data);
        event(new Updated($baihoc));

        return $baihoc;
    }

    /**
     * {@inheritdoc}
     */
    public function delete($id)
    {
        $baihoc = $this->find($id);

        event(new Deleted($baihoc));

        return $baihoc->delete();
    }

    /**
     * {@inheritdoc}
     */
    public function updatePermissions($roleId, array $permissions)
    {
        $role = $this->find($roleId);

        $role->syncPermissions($permissions);
    }

    /**
     * {@inheritdoc}
     */
    public function lists($column = 'baihoc_name', $key = 'id')
    {
        return Baihoc::pluck($column, $key);
    }

    /**
     * {@inheritdoc}
     */
    public function findByName($name)
    {
        return Baihoc::where('name', $name)->first();
    }

    /**
     * Get destination directory where file should be uploaded.
     *
     * @return string
     */
    private function getDestinationDirectory()
    {
        return public_path('/upload/files');
    }


    private function str_encrypt($plaintext): string
    {
        $password = env('PASSWORD_ENCRYPT');
        $method = env('METHOD_ENCRYPT');
        $iv = chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0);
        return base64_encode(openssl_encrypt($plaintext, $method, $password, OPENSSL_RAW_DATA, $iv));
    }

    public function str_decrypt($encrypted): string
    {
        $password = env('PASSWORD_ENCRYPT');
        $method = env('METHOD_ENCRYPT');
        $iv = chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0);
        return openssl_decrypt(base64_decode($encrypted), $method, $password, OPENSSL_RAW_DATA, $iv);
    }

    private function str_encryptaesgcm($plaintext, $encoding = null) {
        $password = env('PASSWORD_ENCRYPT');
        if ($plaintext != null && $password != null) {
            $keysalt = openssl_random_pseudo_bytes(16);
            $key = hash_pbkdf2("sha512", $password, $keysalt, 20000, 32, true);
            $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length("aes-256-gcm"));
            $tag = "";
            $encryptedstring = openssl_encrypt($plaintext, "aes-256-gcm", $key, OPENSSL_RAW_DATA, $iv, $tag, "", 16);
            return $encoding == "hex" ? bin2hex($keysalt.$iv.$encryptedstring.$tag) : ($encoding == "base64" ? base64_encode($keysalt.$iv.$encryptedstring.$tag) : $keysalt.$iv.$encryptedstring.$tag);
        }
    }

    private function str_decryptaesgcm($encryptedstring, $encoding = null) {
        $password = env('PASSWORD_ENCRYPT');
        if ($encryptedstring != null && $password != null) {
            $encryptedstring = $encoding == "hex" ? hex2bin($encryptedstring) : ($encoding == "base64" ? base64_decode($encryptedstring) : $encryptedstring);
            $keysalt = substr($encryptedstring, 0, 16);
            $key = hash_pbkdf2("sha512", $password, $keysalt, 20000, 32, true);
            $ivlength = openssl_cipher_iv_length("aes-256-gcm");
            $iv = substr($encryptedstring, 16, $ivlength);
            $tag = substr($encryptedstring, -16);
            return openssl_decrypt(substr($encryptedstring, 16 + $ivlength, -16), "aes-256-gcm", $key, OPENSSL_RAW_DATA, $iv, $tag);
        }
    }

}
