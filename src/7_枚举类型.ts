enum HTTP_CODE {
    OK = 200,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED
};

HTTP_CODE.OK 

enum URLS {
    USER_REGISTER = "/user/register",
    USER_LOGIN ="/user/login",
    // 如果前一个枚举值类型为字符串， 则后续枚举项必须手动赋值给i他
    INDEX = 0
}