<?php

namespace Vanguard\Http\Controllers\Web;

use Illuminate\Http\Request;
use Vanguard\Http\Controllers\Controller;
use Vanguard\Http\Requests\Baihoc\CreateBaihocRequest;
use Vanguard\Repositories\Baihoc\BaihocRepository;
use Vanguard\Repositories\Khoahoc\KhoahocRepository;

class BaihocController extends Controller
{
    public function __construct(private BaihocRepository $baihoc)
    {
        // Allow access to authenticated users only.
        $this->middleware('auth');

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,KhoahocRepository $khoahocRepository)
    {
        $baihoc = $this->baihoc->paginate($perPage = 20, $request->search,$request->khoahoc_id);
        $khoahocs = ['' => __('All')] + $khoahocRepository->lists()->toArray();
        return view('baihoc.index', compact('baihoc','khoahocs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(KhoahocRepository $khoahocRepository)
    {
        return view('baihoc.add-edit', [
            'khoahoc' => $khoahocRepository->lists(),
            'edit' => false

        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateBaihocRequest $request)
    {
        $this->baihoc->create($request->all());
        return redirect()->route('baihoc.index')
            ->withSuccess(__('Thêm mới thành công.'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
