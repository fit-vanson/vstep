<tr>

    <td class="align-middle">
        {{ $item->baihoc_name ?: __('N/A') }}
    </td>
    <td class="align-middle">{{$item->khoahoc->khoahoc_name}}</td>
    <td class="align-middle">
        {!!  $item->baihoc_link_1 ? '<a target="_blank" href="'.$item->baihoc_link_1.'" >Link</a>' :__('N/A')!!}
    </td>
    <td class="align-middle">
        {!!  $item->baihoc_link_2 ? '<a target="_blank" href="'.$item->baihoc_link_2.'" >Link</a>' :__('N/A')!!}
    </td>
    <td class="align-middle">
        {!!  $item->baihoc_file ? '<a target="_blank" href="/upload/files/'.$item->baihoc_file.'" >Tải xuống</a>' :__('N/A')!!}
    </td>
    {{--    <td class="align-middle">{{$item->baihoc_file ?: __('N/A')}}</td>--}}

    @permission('baihoc.manage')
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
    @endpermission
</tr>
