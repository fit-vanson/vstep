<?php

namespace Vanguard\Http\Controllers\Web;

use Illuminate\Http\Request;
use Vanguard\Http\Controllers\Controller;

class FileManagerController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('permission:filemanager.manage');
    }
    public function index(){
        return view('filemanager.index');
    }
}
