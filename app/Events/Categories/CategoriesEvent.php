<?php

namespace Vanguard\Events\Categories;

use Vanguard\Categories;


abstract class CategoriesEvent
{
    /**
     * @var Categories
     */
    protected $category;

    public function __construct(Categories $category)
    {
        $this->category = $category;
    }

    /**
     * @return Categories
     */
    public function getCategory()
    {
        return $this->category;
    }
}
