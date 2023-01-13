<?php

namespace Vanguard\Http\Controllers\Web;

use Cache;
use Illuminate\Http\Request;
use Vanguard\Http\Controllers\Controller;
use Vanguard\Http\Requests\Khoahoc\CreateKhoahocRequest;
use Vanguard\Http\Requests\Khoahoc\UpdateKhoahocRequest;
use Vanguard\KhoaHoc;
use Vanguard\Repositories\Categories\CategoriesRepository;
use Vanguard\Repositories\Khoahoc\KhoahocRepository;


class KhoaHocController extends Controller
{

    public function __construct(private KhoahocRepository $khoahoc)
    {
        // Allow access to authenticated users only.
        $this->middleware('auth');

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, CategoriesRepository $categoryRepository)
    {


        $khoahoc = $this->khoahoc->paginate($perPage = 20, $request->search, $request->cate_id);
        $categories = ['' => __('All')] + $categoryRepository->lists()->toArray();
        return view('khoahoc.index', compact('khoahoc', 'categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(CategoriesRepository $categoryRepository)
    {
        return view('khoahoc.add-edit', [
            'categories' => $categoryRepository->lists(),
            'statuses' => ['Hoạt động', 'Dừng'],
            'edit' => false

        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateKhoahocRequest $request)
    {
        $this->khoahoc->create($request->all());
        return redirect()->route('khoahoc.index')
            ->withSuccess(__('Thêm mới thành công.'));
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(KhoaHoc $khoahoc, CategoriesRepository $categoryRepository)
    {
        return view('khoahoc.add-edit', [
            'khoahoc' => $khoahoc,
            'categories' => $categoryRepository->lists(),
            'statuses' => ['Hoạt động', 'Dừng'],
            'edit' => true
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(KhoaHoc $khoahoc, UpdateKhoahocRequest $request)
    {
        $this->khoahoc->update($khoahoc->id, $request->all());
        return redirect()->route('khoahoc.index')
            ->withSuccess(__('Updated successfully.'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(KhoaHoc $khoahoc)
    {
        if ($khoahoc->baihoc()->count() != 0) {
            return redirect()->route('khoahoc.index')
                ->withErrors(__('Không thể xoá khoá học.'));
        } else {
            $this->khoahoc->delete($khoahoc->id);
            Cache::flush();
            return redirect()->route('khoahoc.index')
                ->withSuccess(__('Xoá thành công.'));
        }
    }
}
