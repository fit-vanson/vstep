<?php

namespace Vanguard\Http\Requests\Categories;

use Vanguard\Http\Requests\Request;

class RemoveKhoahocRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->route('baihoc')->removable;
    }

    public function rules()
    {
        return [];
    }
}
