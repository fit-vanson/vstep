<?php

namespace Vanguard\Http\Requests\Categories;

use Vanguard\Http\Requests\Request;

class UpdateCategoryRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $category = $this->route('category');
        return [
//            'cate_name' => 'required|regex:/^[a-zA-Z0-9\-_\.]+$/|unique:categories,cate_name,' . $category->id
            'cate_name' => 'required|unique:categories,cate_name,' . $category->id
        ];
    }
}
