<tr>

    <td class="align-middle">
{{--        <a href="{{ route('categories.show', $category) }}">--}}
            {{ $item->baihoc_name ?: __('N/A') }}
{{--        </a>--}}
    </td>
    <td class="align-middle">{{($item->khoahoc->khoahoc_name)}}</td>
{{--    <td class="align-middle">{{ $item->category->cate_name }}</td>--}}
{{--    <td class="align-middle">{{ $user->created_at->format(config('app.date_format')) }}</td>--}}
{{--    <td class="align-middle">--}}
{{--        <span class="badge badge-lg badge-{{ $user->present()->labelClass }}">--}}
{{--            {{ trans("app.status.{$user->status}") }}--}}
{{--        </span>--}}
{{--    </td>--}}
    <td class="text-center align-middle">

        <a href="{{ route('baihoc.edit', $item) }}"
           class="btn btn-icon edit"
           title="@lang('Chỉnh sửa bài học')"
           data-toggle="tooltip" data-placement="top">
            <i class="fas fa-edit"></i>
        </a>

        <a href="{{ route('baihoc.destroy', $item) }}"
           class="btn btn-icon"
           title="@lang('Xoá bài học')"
           data-toggle="tooltip"
           data-placement="top"
           data-method="DELETE"
           data-confirm-title="@lang('Please Confirm')"
           data-confirm-text="@lang('Are you sure that you want to delete this user?')"
           data-confirm-delete="@lang('Yes, delete him!')">
            <i class="fas fa-trash"></i>
        </a>
    </td>
</tr>
