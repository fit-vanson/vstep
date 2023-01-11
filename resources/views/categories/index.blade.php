@extends('layouts.app')

@section('page-title', __('Categories'))
@section('page-heading', __('Categories'))

@section('breadcrumbs')
    <li class="breadcrumb-item active">
        @lang('Categories')
    </li>
@stop

@section('content')

    @include('partials.messages')

    <div class="card">
        <div class="card-body">
            <div class="row mb-3 pb-3 border-bottom-light">
                <div class="col-lg-12">
                    <div class="float-right">
                        <a href="{{ route('categories.create') }}" class="btn btn-primary btn-rounded">
                            <i class="fas fa-plus mr-2"></i>
                            @lang('Add Categories')
                        </a>
                    </div>
                </div>
            </div>

            <div class="table-responsive" id="users-table-wrapper">
                <table class="table table-striped table-borderless">
                    <thead>
                    <tr>
                        <th class="min-width-100">@lang('Name')</th>
{{--                        <th class="min-width-150">@lang('Display Name')</th>--}}
{{--                        <th class="min-width-150">@lang('# of users with this role')</th>--}}
                        <th class="text-center">@lang('Action')</th>
                    </tr>
                    </thead>
                    <tbody>

                        @if (($categories))
                            @foreach ($categories as $category)
                                <tr>
                                    <td>{{ $category->cate_name }}</td>
{{--                                    <td>{{ $role->display_name }}</td>--}}
{{--                                    <td>{{ $role->users_count }}</td>--}}
                                    <td class="text-center">
                                        <a href="{{ route('categories.edit', $category) }}" class="btn btn-icon"
                                           title="@lang('Edit Category')" data-toggle="tooltip" data-placement="top">
                                            <i class="fas fa-edit"></i>
                                        </a>
{{--                                        @if ($category->removable)--}}
                                            <a href="{{ route('categories.destroy', $category) }}" class="btn btn-icon"
                                               title="@lang('Delete Category')"
                                               data-toggle="tooltip"
                                               data-placement="top"
                                               data-method="DELETE"
                                               data-confirm-title="@lang('Please Confirm')"
                                               data-confirm-text="@lang('Are you sure that you want to delete this role?')"
                                               data-confirm-delete="@lang('Yes, delete it!')">
                                                <i class="fas fa-trash"></i>
                                            </a>
{{--                                        @endif--}}
                                    </td>
                                </tr>
                            @endforeach
                        @else
                            <tr>
                                <td colspan="4"><em>@lang('No records found.')</em></td>
                            </tr>
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@stop
