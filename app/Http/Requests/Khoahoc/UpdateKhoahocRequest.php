<?php

namespace Vanguard\Http\Requests\Khoahoc;

use Vanguard\Http\Requests\Request;

class UpdateKhoahocRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $category = $this->route('khoahoc');
        return [
//            'cate_name' => 'required|regex:/^[a-zA-Z0-9\-_\.]+$/|unique:categories,cate_name,' . $category->id
            'khoahoc_name' => 'required|unique:khoa_hocs,khoahoc_name,' . $category->id
        ];
    }
}
