<?php

namespace Vanguard\Events\Baihoc;

use Vanguard\Baihoc;


abstract class BaihocEvent
{
    /**
     * @var Baihoc
     */
    protected $baihoc;

    public function __construct(Baihoc $baihoc)
    {
        $this->baihoc= $baihoc;
    }

//    /**
//     * @return KhoaHoc
//     */
//    public function getCategory()
//    {
//        return $this->category;
//    }
}
