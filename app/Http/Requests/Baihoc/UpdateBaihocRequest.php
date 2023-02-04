<?php

namespace Vanguard\Http\Requests\Baihoc;

use Vanguard\Http\Requests\Request;

class UpdateBaihocRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $baihoc = $this->route('baihoc');
        if (\request()->baihoc_file){
            return [
                'baihoc_name' => 'required|unique:baihocs,baihoc_name,' . $baihoc->id,
                'baihoc_pass_zip' =>'required',
            ];
        }
        return [
            'baihoc_name' => 'required|unique:baihocs,baihoc_name,' . $baihoc->id
        ];
    }
}
