<?php

namespace Vanguard\Http\Requests\Categories;

use Vanguard\Http\Requests\Request;

class RemoveCategoryRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->route('category')->removable;
    }

    public function rules()
    {
        return [];
    }
}
