<?php

namespace Vanguard\Http\Controllers\Api\Profile;

use Illuminate\Support\Facades\Hash;
use Vanguard\Http\Controllers\Api\ApiController;
use Vanguard\Http\Requests\User\UpdateProfileLoginDetailsRequest;
use Vanguard\Http\Resources\UserResource;
use Vanguard\Repositories\User\UserRepository;
use Illuminate\Http\Request;
use Vanguard\User;

/**
 * @package Vanguard\Http\Controllers\Api\Profile
 */
class AuthDetailsController extends ApiController
{
    /**
     * Updates user profile details.
     *
     * @param UpdateProfileLoginDetailsRequest $request
     * @param UserRepository $users
     * @return UserResource
     */
    public function update(UpdateProfileLoginDetailsRequest $request, UserRepository $users)
    {
        $user = $request->user();

        $data = $request->only(['email', 'username', 'password']);

        $user = $users->update($user->id, $data);

        return new UserResource($user);
    }


    public function ChangePassword(Request $request)
    {
        $data = $request->only(['OldPassword', 'NewPassword', 'ConfirmPassword','Username']);
        $user =  User::where('username',$data['Username'])->first();

        if($user){
            if(\Auth::user()->username != $user->username ){
                if(!\Auth::user()->hasPermission('users.manage')){
                    return response()->json([
                        'msg' => $data['Username'].' không có quyền!'
                    ]);
                }else{
                    return $this->extracted($data, $user);
                }
            }else{
                return $this->extracted($data, $user);
            }

        }else{
            return response()->json([
                'msg' => $data['Username'].' không tồn tại!'
            ]);
        }
    }

    /**
     * @param array $data
     * @param $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function extracted(array $data, $user): \Illuminate\Http\JsonResponse
    {
        if (Hash::check($data['OldPassword'], $user->password)) {
            if ($data['NewPassword'] == $data['ConfirmPassword']) {
                $user->update([
                    'password' => $data['NewPassword']
                ]);
                return response()->json([
                    'msg' => 'Đổi mật khẩu thành công!'
                ]);
            } else {
                return response()->json([
                    'msg' => 'Mật khẩu không khớp!'
                ]);
            }
        } else {
            return response()->json([
                'msg' => 'Mật khẩu không khớp với mật khẩu cũ!'
            ]);
        }
    }
}
