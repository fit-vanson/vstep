@extends('layouts.app')

@section('page-title', __('Categories'))
@section('page-heading', $edit ? $category->cate_name : __('Create New Categories'))

@section('breadcrumbs')
    <li class="breadcrumb-item">
        <a href="{{ route('categories.index') }}">@lang('Categories')</a>
    </li>
    <li class="breadcrumb-item active">
        {{ __($edit ? 'Edit' : 'Create') }}
    </li>
@stop

@section('content')

    @include('partials.messages')

    @if ($edit)
        {!! Form::open(['route' => ['categories.update', $category], 'method' => 'PUT', 'id' => 'category-form']) !!}
    @else
        {!! Form::open(['route' => 'categories.store', 'id' => 'category-form']) !!}
    @endif

    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-3">
                    <h5 class="card-title">
                        @lang('Categories Details')
                    </h5>
                    <p class="text-muted">
                        @lang('A general role information.')
                    </p>
                </div>
                <div class="col-md-9">
                    <div class="form-group">
                        <label for="name">@lang('Name')</label>
                        <input type="text"
                               class="form-control input-solid"
                               id="cate_name"
                               name="cate_name"
                               placeholder="@lang('Categories Name')"
                               value="{{ $edit ? $category->cate_name : old('name') }}">
                    </div>


                </div>
            </div>
        </div>
    </div>

    <button type="submit" class="btn btn-primary">
        {{ __($edit ? 'Update Category' : 'Create Category') }}
    </button>

@stop

@section('scripts')
    @if ($edit)
        {!! JsValidator::formRequest('Vanguard\Http\Requests\Categories\UpdateCategoryRequest', '#category-form') !!}
    @else
        {!! JsValidator::formRequest('Vanguard\Http\Requests\Categories\CreateCategoryRequest', '#category-form') !!}
    @endif
@stop
