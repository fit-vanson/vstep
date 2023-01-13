<?php

namespace Vanguard\Http\Requests\Khoahoc;

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
        return $this->route('category')->removable;
    }

    public function rules()
    {
        return [];
    }
}
