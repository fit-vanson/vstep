<?php

namespace Vanguard\Support\Plugins;

use Vanguard\Plugins\Plugin;
use Vanguard\Support\Sidebar\Item;

class Baihoc extends Plugin
{
    public function sidebar()
    {
        return Item::create(__('Bai học'))
            ->route('baihoc.index')
            ->icon('fas fa-folder')
            ->active("baihoc*")
            ->permissions('baihoc.manage');
    }
}
