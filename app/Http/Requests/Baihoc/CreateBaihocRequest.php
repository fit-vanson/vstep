<?php

namespace Vanguard\Http\Requests\Baihoc;

use Vanguard\Http\Requests\Request;

class CreateBaihocRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        return [
//            'cate_name' => 'required|regex:/^[a-zA-Z0-9\-_\.]+$/|unique:categories,cate_name'
            'baihoc_name' => 'required|unique:baihocs,baihoc_name',
//            'baihoc_file' => 'mimes:zip'
        ];
    }
}
