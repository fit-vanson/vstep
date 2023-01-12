<?php

namespace Vanguard\Support\Plugins;

use Vanguard\Plugins\Plugin;
use Vanguard\Support\Sidebar\Item;

class Baihoc extends Plugin
{
    public function sidebar()
    {
        return Item::create(__('Bài học'))
            ->route('baihoc.index')
            ->icon('fas fa-book')
            ->active("baihoc*")
            ->permissions('baihoc.manage');
    }
}
