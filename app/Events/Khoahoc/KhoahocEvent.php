<?php

namespace Vanguard\Events\Khoahoc;

use Vanguard\KhoaHoc;


abstract class KhoahocEvent
{
    /**
     * @var KhoaHoc
     */
    protected $category;

    public function __construct(KhoaHoc $khoahoc)
    {
        $this->khoahoc= $khoahoc;
    }

//    /**
//     * @return KhoaHoc
//     */
//    public function getCategory()
//    {
//        return $this->category;
//    }
}
