@extends('layouts.app')

@section('page-title', __('Khoá học'))
@section('page-heading', $edit ? $khoahoc->khoahoc_name : __('Thêm mới khoá học'))

@section('breadcrumbs')
    <li class="breadcrumb-item">
        <a href="{{ route('khoahoc.index') }}">@lang('Khoá học')</a>
    </li>
    <li class="breadcrumb-item active">
        {{ __($edit ? 'Edit' : 'Create') }}
    </li>
@stop

@section('content')

@include('partials.messages')

@if ($edit)
    {!! Form::open(['route' => ['khoahoc.update', $khoahoc], 'method' => 'PUT', 'id' => 'khoahoc-form']) !!}
@else
    {!! Form::open(['route' => 'khoahoc.store', 'id' => 'khoahoc-form']) !!}
@endif

<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-md-3">
                <h5 class="card-title">
                    @lang('Chi tiết Khoá học')
                </h5>
                <p class="text-muted">
                    @lang('Thông tin chung về khoá học')
                </p>
            </div>
            <div class="col-md-9">
                <div class="form-group">
                    <label for="name">@lang('Tên khoá học')</label>
                    <input type="text"
                           class="form-control input-solid"
                           id="khoahoc_name"
                           name="khoahoc_name"
                           placeholder="@lang('Tên khoá học')"
                           value="{{ $edit ? $khoahoc->khoahoc_name : old('name') }}">
                </div>

                <div class="form-group">

                    <label for="first_name">@lang('Tên thể loại')</label>
                    @if (count($categories))
                    {!! Form::select('cate_id', $categories, $edit ? $khoahoc->category->id : '',
                        ['class' => 'form-control input-solid', 'id' => 'cate_id']) !!}
                    @else
                       <code> Vui lòng tạo thể loại. <a href="{{route('categories.create')}}">Click</a> </code>
                    @endif
                </div>

                <div class="form-group">
                    <label for="status">@lang('Status')</label>
                    {!! Form::select('status', $statuses, $edit ? $khoahoc->status : '',
                        ['class' => 'form-control input-solid', 'id' => 'status']) !!}
                </div>

                <div class="form-group">
                    <label for="phone">@lang('Số thứ tự')</label>
                    <input type="number" class="form-control input-solid" id="stt"
                           name="stt" placeholder="@lang('Số thứ tự')" value="{{ $edit ? $khoahoc->stt : '' }}">
                </div>

            </div>
        </div>
    </div>
</div>
@if (count($categories))
    <button type="submit" class="btn btn-primary">
        {{ __($edit ? 'Chỉnh sửa' : 'Thêm mới') }}
    </button>
@endif

@stop

@section('scripts')
    @if ($edit)
        {!! JsValidator::formRequest('Vanguard\Http\Requests\Khoahoc\UpdateKhoahocRequest', '#category-form') !!}
    @else
        {!! JsValidator::formRequest('Vanguard\Http\Requests\Khoahoc\CreateKhoahocRequest', '#category-form') !!}
    @endif
@stop
