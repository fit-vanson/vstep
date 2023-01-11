<tr>

    <td class="align-middle">
{{--        <a href="{{ route('categories.show', $category) }}">--}}
            {{ $category->cate_name ?: __('N/A') }}
{{--        </a>--}}
    </td>
    <td class="align-middle">
        <a href="{{ route('khoahoc.index', ['cate_id'=>$category->id]) }}">
             {{ $category->khoahoc ? count($category->khoahoc): __('N/A') }}
        </a>
    </td>

    <td class="text-center align-middle">

        <a href="{{ route('categories.edit', $category) }}"
           class="btn btn-icon edit"
           title="@lang('Edit Category')"
           data-toggle="tooltip" data-placement="top">
            <i class="fas fa-edit"></i>
        </a>

        <a href="{{ route('categories.destroy', $category) }}"
           class="btn btn-icon"
           title="@lang('Delete Category')"
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
