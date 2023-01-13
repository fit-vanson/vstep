<?php

namespace Vanguard\Support\Plugins\Dashboard\Widgets;

use Vanguard\Plugins\Widget;
use Vanguard\User;

class BaihocUser extends Widget
{
    /**
     * UserActions constructor.
     */
//    public $width = '8';
    public function __construct()
    {
        $this->permissions(function (User $user) {
            return $user->hasRole('User');
        });
    }

    /**
     * {@inheritdoc}
     */
    public function render()
    {
        return view('plugins.dashboard.widgets.baihoc-user');
    }
}
