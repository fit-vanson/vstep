@extends('layouts.app')

@section('page-title', __('Files Manager'))
@section('page-heading', __('Files Manager'))

@section('styles')
{{--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">--}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="{{ asset('vendor/file-manager/css/file-manager.css') }}">
@endsection

@section('breadcrumbs')
    <li class="breadcrumb-item active">
        @lang('Files Manager')
    </li>
@stop

@section('content')

    @include('partials.messages')

    <div class="card">
        <div class="card-body">
            <div id="fm" style="height: 900px;"></div>
        </div>
    </div>
@stop

@section('scripts')
    <script src="{{ asset('vendor/file-manager/js/file-manager.js') }}"></script>
@stop
