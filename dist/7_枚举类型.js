var HTTP_CODE;
(function (HTTP_CODE) {
    HTTP_CODE[HTTP_CODE["OK"] = 200] = "OK";
    HTTP_CODE[HTTP_CODE["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTP_CODE[HTTP_CODE["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
})(HTTP_CODE || (HTTP_CODE = {}));
;
HTTP_CODE.OK;
var URLS;
(function (URLS) {
    URLS["USER_REGISTER"] = "/user/register";
    URLS["USER_LOGIN"] = "/user/login";
    // 如果前一个枚举值类型为字符串， 则后续枚举项必须手动赋值给i他
    URLS[URLS["INDEX"] = 0] = "INDEX";
})(URLS || (URLS = {}));
