<?php

namespace Vanguard\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class KhoahocResource extends JsonResource
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
            'TenKhoaHoc' => $this->khoahoc_name,
            'STT' => $this->stt,
            'Count' => count($this->baihoc),
            'TrangThai' => $this->status,

        ];
    }

    public static function allowedIncludes()
    {
        return ['baihoc', 'category'];
    }
}
