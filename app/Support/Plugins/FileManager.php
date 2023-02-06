<?php

namespace Vanguard\Support\Plugins;

use Vanguard\Plugins\Plugin;
use Vanguard\Support\Sidebar\Item;

class FileManager extends Plugin
{
    public function sidebar()
    {
        return Item::create(__('File Manager'))
            ->route('filemanager.index')
            ->icon('fas fa-folder')
            ->active("filemanager*")
            ->permissions('filemanager.manage');
    }
}
