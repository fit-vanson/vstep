<?php

namespace Vanguard\Support\Plugins;

use Vanguard\Plugins\Plugin;
use Vanguard\Support\Sidebar\Item;

class Khoahoc extends Plugin
{
    public function sidebar()
    {
        return Item::create(__('Khoá học'))
            ->route('khoahoc.index')
            ->icon('fas fa-folder')
            ->active("khoahoc*")
            ->permissions('khoahoc.manage');
    }
}
