<?php

namespace Vanguard\Http\Requests\Baihoc;

use Vanguard\Http\Requests\Request;

class RemoveBaihocRequest extends Request
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
