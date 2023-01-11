@extends('layouts.app')

@section('page-title', __('Khoa hoc'))
@section('page-heading', __('Khoa hoc'))

@section('breadcrumbs')
    <li class="breadcrumb-item active">
        @lang('Khoá học')
    </li>
@stop

@section('content')

    @include('partials.messages')


    <div class="card">
        <div class="card-body">
            <form action="" method="GET" id="khoahoc-form" class="pb-2 mb-3 border-bottom-light">
                <div class="row my-3 flex-md-row flex-column-reverse">
                    <div class="col-md-4 mt-md-0 mt-2">
                        <div class="input-group custom-search-form">
                            <input type="text"
                                   class="form-control input-solid"
                                   name="search"
                                   value="{{ Request::get('search') }}"
                                   placeholder="@lang('Tìm kiếm khoá học...')">

                            <span class="input-group-append">
                                @if (Request::has('search') && Request::get('search') != '')
                                    <a href="{{ route('khoahoc.index') }}"
                                       class="btn btn-light d-flex align-items-center text-muted"
                                       role="button">
                                        <i class="fas fa-times"></i>
                                    </a>
                                @endif
                                <button class="btn btn-light" type="submit" id="search-categories-btn">
                                    <i class="fas fa-search text-muted"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <div class="col-md-2 mt-2 mt-md-0">
                        {!!
                            Form::select(
                                'cate_id',
                                $categories,
                                Request::get('cate_id'),
                                ['id' => 'cate_id', 'class' => 'form-control input-solid']
                            )
                        !!}
                    </div>
                    <div class="col-md-6">
                        <a href="{{ route('khoahoc.create') }}" class="btn btn-primary btn-rounded float-right">
                            <i class="fas fa-plus mr-2"></i>
                            @lang('Thêm khoá học')
                        </a>
                    </div>
                </div>
            </form>

            <div class="table-responsive" id="users-table-wrapper">
                <table class="table table-borderless table-striped">
                    <thead>
                    <tr>
{{--                        <th></th>--}}
                        <th class="min-width-80">@lang('Tên khoá học')</th>
                        <th class="min-width-20">@lang('Số bài học')</th>
                        <th class="min-width-80">@lang('Thể loại')</th>
                        <th class="text-center min-width-150">@lang('Action')</th>
                    </tr>
                    </thead>
                    <tbody>
                    @if (count($khoahoc))
                        @foreach ($khoahoc as $item)
                            @include('khoahoc.partials.row')
                        @endforeach
                    @else
                        <tr>
                            <td colspan="7"><em>@lang('No records found.')</em></td>
                        </tr>
                    @endif
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    {!! $khoahoc->render() !!}
@stop
@section('scripts')
    <script>
        $("#cate_id").change(function () {
            $("#khoahoc-form").submit();
        });
    </script>
@stop
