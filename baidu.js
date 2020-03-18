//实现点击发送验证码的JS效果，即点击后倒计时效果，且按钮变为不可用
$('#getCode').click(function(){
    var t, a = $('#getCode'), e = 60;
    alert("验证码为123456"),
    a.attr("disabled", "disabled"),
    a.val("请等待 (" + e + " s)"),
    t = window.setInterval(function() {
        a.val("请等待 (" + e-- + " s)"),
        -1 === e && (window.clearInterval(t),
        a.val("获取验证码"),
        a.removeAttr("disabled"))
    }, 1e3)
})

//表单级别验证
$('#reg').click(function(){
    console.log('a');
    if(!checkUser('#user') || !checkTel('#tel') || !checkPaw('#password') || !checkCode('#code')) 
        return;
    else{
        alert('注册成功');
    }
})
//字段级别验证
$('#user').focusout(function(){
    if(!checkUser('#user')) $('#user').select();
});

$('#tel').focusout(function(){
    if(!checkTel('#tel')) $('#tel').select();
});

$('#password').focusout(function(){
    if(!checkPaw('#password')) $('#password').select();
});
$('#code').focusout(function(){
    if(!checkCode('#code')) $('#code').select();
});

//验证码的验证
function checkCode(folid) {
    var $data =$(folid);
    var $msg = $(folid + '-message');

    if($data.val() != 123456){
        $msg.html('验证码错误');
        $data.select();
        $data.css("outline-color","red");
        $data.css("border","1px solid red");
        return false;
    }
    $data.css("border","rgb(218, 216, 216) 1px solid");
    $data.css("outline-color","blue");
    $msg.html('');
    return true;
  }

//用户名的验证
function checkUser(folid){
    var $data =$(folid);
    var $msg = $(folid + '-message');
    
    if(!/^[a-zA-Z0-9_\u4e00-\u9fa5]{1,16}$/.test($data.val())){
        $msg.html('用户名仅支持中英文、数字和下划线，且不能为纯数字');
        $data.select();
        $data.css("outline-color","red");
        $data.css("border","1px solid red");
        return false;
    }
    
    if(/^[0-9]{1,16}$/.test($data.val())){
        $msg.html('用户名仅支持中英文、数字和下划线，且不能为纯数字');
        $data.select();
        $data.css("outline-color","red");
        $data.css("border","1px solid red");
        return false;
    }
    
    $data.css("border","rgb(218, 216, 216) 1px solid");
    $data.css("outline-color","blue");
    $msg.html('');
    return true;
}

//手机号码要求使用正则表达式完成验证
function checkTel(folid){
    var $data =$(folid);
    var $msg = $(folid + '-message');

    if(!/^((1[3-9]))\d{9}$/.test($data.val())){
        $msg.html('手机号码格式不正确');
        $data.select();
        $data.css("outline-color","red");
        $data.css("border","1px solid red");
        return false;
    }

    $data.css("border","rgb(218, 216, 216) 1px solid");
    $data.css("outline-color","blue");
    $msg.html('');
    return true;
}

//密码的验证，可包含数字和字母,不可全是数字
function checkPaw(folid){
    var $data =$(folid);
    var $msg = $(folid + '-message');

    if(!/^[a-zA-Z0-9_-]{6,16}$/.test($data.val())){
        $msg.html('密码可包含数字和字母,不可全是数字');
        $data.select();
        $data.css("outline-color","red");
        $data.css("border","1px solid red");
        return false;
    }
    if(/^[0-9]{6,30}$/.test($data.val())){
        $msg.html('密码可包含数字和字母,不可全是数字');
        $data.select();
        $data.css("outline-color","red");
        $data.css("border","1px solid red");
        return false;
    }
    
    $data.css("border","rgb(218, 216, 216) 1px solid");
    $data.css("outline-color","blue");
    $msg.html('');
    return true;
}

$("#checkbox").click(function() { 
    if($('#checkbox').prop('checked') == true){
        $('#reg').css('opacity', '1');
        $('#reg').attr("disabled",false);
    }
    else{
        $('#reg').css('opacity', '0.3');
        $('#reg').attr("disabled",true);
    }
});
