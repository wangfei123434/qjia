var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const SMSClient = require('@alicloud/sms-sdk')
// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'LTAI4G564D7rjwMzfPALWigo'
const secretAccessKey = 'a0pDz76oCSmOEBKQDKAf7XHJ66yYjkk'
//初始化sms_client
let smsClient = new SMSClient({
    accessKeyId,
    secretAccessKey
})
//引用bodyParser 这个不要忘了写
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded
//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// app.get("/abc",(req,res)=>{
//     console.log(req)
// })
//收到前端post请求
app.post('/sedsms', function (req, res) {
    // console.log(req.stack);
    console.log("美女1",req.body);
    console.log("美女2",req.body.phone);
    console.log("美女3",JSON.stringify({ "code": req.body.code }));   
    // console.log(req.url);
    // console.log(req.query);
    //发送短信
    smsClient.sendSMS({
        PhoneNumbers: req.body.phone, //必填:待发送手机号,支持以逗号分隔的形式进行批量调用，目前从前端获取手机号码
        SignName: '阳光超市', //必填:短信签名-可在短信控制台中找到
        TemplateCode: 'SMS_193240375', //必填:短信模板-可在短信控制台中找到
        TemplateParam: JSON.stringify({ "code": req.body.code })  //可选:模板中的变量替换JSON串,目前不用
    }).then(function (res) {
        console.log(1)
        let {
            Code
        } = res
        if (Code === 'OK') {
            //处理返回参数
            console.log(2)
            console.log("code",Code)
        }
    }, function (err) {
        console.log(err)
    })
    res.json(req.body)
})



var server = app.listen(3001, () => {
    var host = server.address().address;

    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
    console.log('Example app listening on port 3001!')

})