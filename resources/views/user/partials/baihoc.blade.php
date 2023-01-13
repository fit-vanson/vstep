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
    <td class="text-center align-middle">
        <div class="custom-control custom-checkbox">
            <div class="custom-control custom-checkbox">
                <input class="custom-control-input" id="{{$item->id}}"
                       {!! $user->baihoc()->get()->contains($item) ? 'checked' : '' !!} name="baihoc[]"
                       type="checkbox" value="{{$item->id}}">
                <label class="custom-control-label d-inline" for="{{$item->id}}"></label>
            </div>
        </div>
    </td>

</tr>
