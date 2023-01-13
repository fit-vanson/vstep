<div class="col-md-12">
    <div class="card">
        <div class="card-body">
            <form action="" method="GET" id="baihoc-form" class="pb-2 mb-3 border-bottom-light">
                <div class="row my-3 flex-md-row flex-column-reverse">
                    <div class="col-md-4 mt-md-0 mt-2">
                        <div class="input-group custom-search-form">
                            <input type="text"
                                   class="form-control input-solid"
                                   name="search"
                                   value="{{ Request::get('search') }}"
                                   placeholder="@lang('Tìm kiếm bài học...')">

                            <span class="input-group-append">
                                @if (Request::has('search') && Request::get('search') != '')
                                    <a href="{{ route('baihoc.index') }}"
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
                        @if(isset($khoahocs))
                            {!!
                                Form::select(
                                    'khoahoc_id',
                                    $khoahocs,
                                    Request::get('khoahoc_id'),
                                    ['id' => 'khoahoc_id', 'class' => 'form-control input-solid']
                                )
                            !!}
                        @endif
                    </div>
                    <div class="col-md-6">
                        <a href="{{ route('baihoc.create') }}" class="btn btn-primary btn-rounded float-right">
                            <i class="fas fa-plus mr-2"></i>
                            @lang('Thêm bài học')
                        </a>
                    </div>
                </div>
            </form>

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
{{--                    @if (count($baihoc))--}}
{{--                        @foreach ($baihoc as $item)--}}
{{--                            @include('baihoc.partials.row')--}}
{{--                        @endforeach--}}
{{--                    @else--}}
{{--                        <tr>--}}
{{--                            <td colspan="7"><em>@lang('No records found.')</em></td>--}}
{{--                        </tr>--}}
{{--                    @endif--}}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    {!! $baihoc->render() !!}
</div>

