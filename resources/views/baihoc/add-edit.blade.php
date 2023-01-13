@extends('layouts.app')

@section('page-title', __('Bài học'))
@section('page-heading', $edit ? $baihoc->baihoc_name : __('Thêm mới Bài học'))

@section('breadcrumbs')
    <li class="breadcrumb-item">
        <a href="{{ route('baihoc.index') }}">@lang('Bài học')</a>
    </li>
    <li class="breadcrumb-item active">
        {{ __($edit ? 'Edit' : 'Create') }}
    </li>
@stop

@section('content')

    @include('partials.messages')

    @if ($edit)
        {!! Form::open(['route' => ['baihoc.update', $baihoc], 'method' => 'PUT', 'id' => 'baihoc-form','enctype'=>'multipart/form-data']) !!}
    @else
        {!! Form::open(['route' => 'baihoc.store', 'id' => 'baihoc-form','enctype'=>'multipart/form-data']) !!}
    @endif

    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-3">
                    <h5 class="card-title">
                        @lang('Chi tiết Bài học')
                    </h5>
                    <p class="text-muted">
                        @lang('Thông tin chung')
                    </p>
                </div>
                <div class="col-md-9">

                    <div class="form-group">
                        <label for="phone">@lang('Số thứ tự')</label>
                        <input type="number" class="form-control input-solid" id="baihoc_stt"
                               name="baihoc_stt" placeholder="@lang('Số thứ tự')"
                               value="{{ $edit ? $baihoc->baihoc_stt : '' }}">
                    </div>

                    <div class="form-group">
                        <label for="name">@lang('Tên Bài học')</label>
                        <input type="text"
                               class="form-control input-solid"
                               id="baihoc_name"
                               name="baihoc_name"
                               placeholder="@lang('Tên bài học')"
                               value="{{ $edit ? $baihoc->baihoc_name : old('baihoc_name') }}">
                    </div>

                    <div class="form-group">

                        <label for="first_name">@lang('Tên khoá học')</label>
                        @if (count($khoahoc))
                            {!! Form::select('khoahoc_id', $khoahoc, $edit ? $baihoc->khoahoc->id : '',
                                ['class' => 'form-control input-solid', 'id' => 'khoahoc_id']) !!}
                        @else
                            <code> Vui lòng tạo khoá học. <a href="{{route('khoahoc.create')}}">Click</a> </code>
                        @endif
                    </div>

                    <div class="form-group">
                        <label for="name">@lang('Link dự phòng 1')</label>
                        <input type="text"
                               class="form-control input-solid"
                               id="baihoc_link_1"
                               name="baihoc_link_1"
                               placeholder="@lang('Link dự phòng 1')"
                               value="{{ $edit ? $baihoc->baihoc_link_1 : old('baihoc_link_1') }}">
                    </div>

                    <div class="form-group">
                        <label for="name">@lang('Link dự phòng 2')</label>
                        <input type="text"
                               class="form-control input-solid"
                               id="baihoc_link_2"
                               name="baihoc_link_2"
                               placeholder="@lang('Link dự phòng 2')"
                               value="{{ $edit ? $baihoc->baihoc_link_2 : old('baihoc_link_2') }}">
                    </div>

                    <div class="form-group">
                        <label for="name">@lang('Tải tập tin bài học định dạng .zip')</label>
                        <input type="file"
                               class="form-control input-solid"
                               id="baihoc_file"
                               name="baihoc_file"
                               accept=".zip"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>

    @if (count($khoahoc))
        <button type="submit" class="btn btn-primary">
            {{ __($edit ? 'Chỉnh sửa' : 'Thêm mới') }}
        </button>
    @endif

@stop

@section('scripts')
    @if ($edit)
        {!! JsValidator::formRequest('Vanguard\Http\Requests\Baihoc\UpdateBaihocRequest', '#baihoc-form') !!}
    @else
        {!! JsValidator::formRequest('Vanguard\Http\Requests\Baihoc\CreateBaihocRequest', '#baihoc-form') !!}
    @endif
@stop
