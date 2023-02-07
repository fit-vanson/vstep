<?php


function str_encrypt($plaintext): string
{
    $password = Config::get('app.PASSWORD_ENCRYPT');
    $method = Config::get('app.cipher');
//    $iv = chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0);
    $iv = str_repeat(chr(0), 16);
    return base64_encode(openssl_encrypt($plaintext, $method, $password, OPENSSL_RAW_DATA, $iv));
}

function str_decrypt($encrypted): string
{
    $password = Config::get('app.PASSWORD_ENCRYPT');
    $method = Config::get('app.cipher');
    $iv = str_repeat(chr(0), 16);
    return openssl_decrypt(base64_decode($encrypted), $method, $password, OPENSSL_RAW_DATA, $iv);
}
