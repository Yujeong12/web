var myId = '';
function login_page(){
    location.href="login.html";
}
function join_page(){
    location.href="join.html";
}
function login_success(idvalue, pwd){
    if(idvalue == "" || pwd == "") alert("모두 입력해주세요");
    else{
        alert(idvalue + "님 로그인 되셨습니다.");
        location.href="index.html";
        document.getElementById('login_btn').style.display='none';
        document.getElementById('join_li').style.display='none';
    }
}
function join(idvalue, pwd, pwdcheck){
    if(idvalue.length<8) alert('아이디는 8글자 이상 이어야 합니다.');
    else if(pwd.length<8) alert('비밀번호는 8자 이상이어야 합니다.');
    else if(pwdcheck=='') alert('모두 입력해주세요.');
    else{
        var cnt=0;
        for(var i=0; i<pwd.length; i++){
            if(idvalue[i]==pwd[i]) cnt++;
        }
        if(cnt>6) alert('비밀번호와 아이디가 7글자 이상 동일합니다.')
        else {
            for(var i=0; i<pwd.legnth; i++){
                if(pwd[i]!=pwdcheck[i]){
                    alert("비밀번호가 맞지 않습니다.");
                    cnt -= 1000
                }
            }
            if(cnt>0){
                alert(idvalue + '님 회원가입 되셨습니다.');
                location.href="login.html";
            }
        }
    }
}
var bColor = '';
function mainBanner(Color){
    bColor = Color;
    document.getElementById('main_banner').style.background.color=bColor;
}
var banner_n = 1;
function banner_btn(text){
    if(text == 'prev' && banner_n > 0){
        banner_n--;
        document.getElementById('banner_num').innerHTML=<b>anner_n</b> + '/3';
    }
    else if(text=='next' && banner_n < 4){
        banner_n++
        document.getElementById('banner_num').innerHTML = <b>banner_n</b> + '/3';
    }
}