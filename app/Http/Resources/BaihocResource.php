<?php

namespace Vanguard\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BaihocResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'Id' => $this->id,
            'TenBaiHoc' => $this->baihoc_name,
            'IdKhoaHoc' => $this->khoahoc_id,
            'STT' => $this->baihoc_stt,
            'Link1' => $this->baihoc_link_1,
            'Link2' => $this->baihoc_link_2,
            'file' => $this->baihoc_file,
        ];
    }
}
