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
{{--        {!! Form::open(['method' => 'PUT', 'id' => 'baihoc-form','enctype'=>'multipart/form-data']) !!}--}}
    @else
        {!! Form::open(['route' => 'baihoc.store', 'id' => 'baihoc-form','enctype'=>'multipart/form-data']) !!}
{{--        {!! Form::open(['id' => 'baihoc-form','enctype'=>'multipart/form-data']) !!}--}}
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
                        <input type="hidden" id="baihoc_file" name="baihoc_file" value="{{ old('baihoc_file') }}">
                        <input type="file"
                               class="form-control input-solid"
                               id="upload_file"
                               name="upload_file"
                               accept=".zip"
                        />
                        <div class="alert alert-success" id="upload_success" style="display: none">
                            <i class="fa fa-check"></i>
                            Upload file thành công.
                        </div>

                        <div style="display: none;height: 15px" class="progress mt-3" >
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%; height: 100%">75%</div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="name">@lang('Pass Zip')</label>
                        <input type="text"
                               class="form-control input-solid"
                               id="baihoc_pass_zip"
                               name="baihoc_pass_zip"
                               placeholder="@lang('Pass Zip')"
                               value="{{ $edit ? $baihoc->baihoc_pass_zip : old('baihoc_pass_zip') }}">
                    </div>
                </div>
            </div>
        </div>
    </div>

    @if (count($khoahoc))
        <button type="submit" id="start-upload-btn" class="btn btn-primary">
            {{ __($edit ? 'Chỉnh sửa' : 'Thêm mới') }}
        </button>
    @endif

@stop

@section('scripts')
    <script src="https://cdn.jsdelivr.net/npm/resumablejs@1.1.0/resumable.min.js"></script>
    @if ($edit)
        {!! JsValidator::formRequest('Vanguard\Http\Requests\Baihoc\UpdateBaihocRequest', '#baihoc-form') !!}
    @else
        {!! JsValidator::formRequest('Vanguard\Http\Requests\Baihoc\CreateBaihocRequest', '#baihoc-form') !!}
    @endif



    <script type="text/javascript">
        let browseFile = $('#upload_file');
        let resumable = new Resumable({
            target: '{{ route('baihoc.uploadfile') }}',
            query:{
                _token:'{{ csrf_token() }}',
            } ,// CSRF token
            fileType: ['zip'],
            chunkSize: 10*1024*1024, // default is 1*1024*1024, this should be less than your maximum limit in php.ini
            headers: {
                'Accept' : 'application/json'
            },
            testChunks: false,
            throttleProgressCallbacks: 1,
        });

        resumable.assignBrowse(browseFile[0]);

        resumable.on('fileAdded', function (file) { // trigger when file picked
            showProgress();
            resumable.upload() // to actually start uploading.
        });

        resumable.on('fileProgress', function (file) { // trigger when file progress update
            $('#start-upload-btn').prop('disabled', true);
            updateProgress(Math.floor(file.progress() * 100));
        });

        resumable.on('fileSuccess', function (file, response) { // trigger when file upload complete
            response = JSON.parse(response)
            hideProgress()
            $('#upload_success').show();
            $('#baihoc_file').val(response.filename);
            $('#start-upload-btn').prop('disabled', false);
            $('#baihoc_pass_zip').prop('required', true);
        });

        resumable.on('fileError', function (file, response) { // trigger when there is any error
            alert('file uploading error.')
        });



        let progress = $('.progress');
        function showProgress() {
            progress.find('.progress-bar').css('width', '0%');
            progress.find('.progress-bar').html('0%');
            progress.find('.progress-bar').removeClass('bg-success');
            progress.show();
        }

        function updateProgress(value) {
            progress.find('.progress-bar').css('width', `${value}%`)
            progress.find('.progress-bar').html(`${value}%`)
        }

        function hideProgress() {
            progress.hide();
        }

    </script>

@stop
