<tr>

    <td class="align-middle">
        {{ $item->khoahoc_name ?: __('N/A') }}
    </td>
    <td class="align-middle">
        <a href="{{ route('baihoc.index',  ['khoahoc_id'=>$item->id]) }}">
            {{count($item->baihoc)}}
        </a>
    </td>
    <td class="align-middle">{{ $item->category->cate_name }}</td>
    <td class="text-center align-middle">
        <a href="{{ route('khoahoc.edit', $item) }}"
           class="btn btn-icon edit"
           title="@lang('Chỉnh sửa khoá học')"
           data-toggle="tooltip" data-placement="top">
            <i class="fas fa-edit"></i>
        </a>

        <a href="{{ route('khoahoc.destroy', $item) }}"
           class="btn btn-icon"
           title="@lang('Xoá khoá học')"
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
