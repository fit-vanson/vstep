@extends('layouts.app')

@section('page-title', $user->present()->nameOrEmail)
@section('page-heading', $user->present()->nameOrEmail)

@section('breadcrumbs')
    <li class="breadcrumb-item">
        <a href="{{ route('users.index') }}">@lang('Users')</a>
    </li>
    <li class="breadcrumb-item active">
        {{ $user->present()->nameOrEmail }}
    </li>
@stop



@section('content')
    @include('partials.messages')

    <div class="row">
        <div class="col-lg-5 col-xl-4 @if (! isset($activities)) mx-auto @endif">
            <div class="card">
                <h6 class="card-header d-flex align-items-center justify-content-between">
                    @lang('Details')

                    <small>
                        @role('Admin')
                            @canBeImpersonated($user)
                            <a href="{{ route('impersonate', $user) }}"
                               data-toggle="tooltip"
                               data-placement="top"
                               title="@lang('Impersonate User')">
                                @lang('Impersonate')
                            </a>
                            <span class="text-muted">|</span>
                            @endCanBeImpersonated
                        @endrole

                        <a href="{{ route('users.edit', $user) }}"
                           class="edit"
                           data-toggle="tooltip"
                           data-placement="top"
                           title="@lang('Edit User')">
                            @lang('Edit')
                        </a>
                    </small>
                </h6>
                <div class="card-body">
                    <div class="d-flex align-items-center flex-column pt-3">
                        <div>
                            <img class="rounded-circle img-thumbnail img-responsive mb-4"
                                 width="130"
                                 height="130" src="{{ $user->present()->avatar }}">
                        </div>

                        @if ($name = $user->present()->name)
                            <h5>{{ $user->present()->name }}</h5>
                        @endif

                        <a href="mailto:{{ $user->email }}" class="text-muted font-weight-light mb-2">
                            {{ $user->email }}
                        </a>
                    </div>

                    <ul class="list-group list-group-flush mt-3">
                        @if ($user->phone)
                            <li class="list-group-item">
                                <strong>@lang('Phone'):</strong>
                                <a href="telto:{{ $user->phone }}">{{ $user->phone }}</a>
                            </li>
                        @endif
                        <li class="list-group-item">
                            <strong>@lang('Role'):</strong>
                            <span class="badge badge-lg badge-{{ $user->present()->labelRoleClass }}">
                                {{ $user->present()->role->name }}
                            </span>
                        </li>
                            <li class="list-group-item">
                            <strong>@lang('Birthday'):</strong>
                            {{ $user->present()->birthday }}
                        </li>
                        <li class="list-group-item">
                            <strong>@lang('Address'):</strong>
                            {{ $user->present()->fullAddress }}
                        </li>
                        <li class="list-group-item">
                            <strong>@lang('Last Logged In'):</strong>
                            {{ $user->present()->lastLogin }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="col-lg-7 col-xl-8">
            <ul class="nav nav-pills mb-4 mt-2" id="pills-tab" role="tablist">

                <li class="nav-item">
                    <a href="#latest_activity"
                       class="nav-link active"
                       id="pills-home-tab"
                       data-toggle="pill"
                       aria-controls="pills-home"
                       aria-selected="true">
                        <i class="fas fa-chalkboard"></i>
                        @lang('Latest Activity')
                    </a>
                </li>

                @if($user->hasRole('User'))
                    <li class="nav-item">
                        <a href="#bai_hoc"
                           class="nav-link "
                           id="pills-home-tab"
                           data-toggle="pill"
                           aria-controls="pills-home"
                           aria-selected="true">
                            <i class="fas fa-graduation-cap"></i>
                            @lang('Bài học')
                        </a>
                    </li>
                @endif
            </ul>
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane" id="bai_hoc">
                    <div class="card">
                        <div class="card-body">
                            <form action="{{ route('users.update.baihoc', $user) }}" method="POST" id="baihoc-form">
                                @csrf
                                @method('PUT')
                                <div class="table-responsive" id="baihoc-table-wrapper">
                                    <table class="table table-borderless table-striped">
                                        <thead>
                                        <tr>
                                            <th class="min-width-40">@lang('Tên bài học')</th>
                                            <th class="min-width-20">@lang('Khoá học')</th>
                                            <th class="min-width-20">@lang('Link 1')</th>
                                            <th class="min-width-20">@lang('Link 2')</th>
                                            <th class="min-width-20">@lang('File')</th>
                                            <th class="text-center min-width-10">@lang('Action')</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        @foreach ($baihoc as $item)
                                            @include('user.partials.baihoc')
                                        @endforeach

                                        </tbody>
                                    </table>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <button type="submit" class="btn btn-primary"
                                                id="upssssdate-details-btn">@lang('Save')</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div role="tabpanel" class="tab-pane active" id="latest_activity">
                    @include("user-activity::recent-activity", ['activities' => $activities])
                </div>
            </div>
        </div>
    </div>
@stop

@section('scripts')
    {!! HTML::script('assets/js/as/btn.js') !!}
    {!! HTML::script('assets/js/as/profile.js') !!}
    {!! JsValidator::formRequest('Vanguard\Http\Requests\User\UpdateBaihocRequest', '#baihoc-form') !!}

@stop
