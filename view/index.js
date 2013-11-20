/**
 * Created with JetBrains RubyMine.
 * User: fei
 * Date: 13-11-19
 * Time: 下午4:00
 * To change this template use File | Settings | File Templates.
 */
function click_compare(){
    var text=Tbx.get_input("tbx_input");
    if(is_empty(text)){
        if(play_count.get_count()<6){
            play_count.ascending();
            var result=compare(text,random_num.get_num());
            if(result=='4A0B'){
                Tbx.set_input('lab_result','恭喜获胜');
                Tbx.set_input('lab_warn','恭喜获胜');
                Tbx.disabled('btn_result');
                return true;
            }

            else{
                Tbx.set_input('lab_warn','您已竞猜'+play_count.get_count()+'次')
                Tbx.set_input('lab_result',result);
            }
        }
        else{
            Tbx.disabled('btn_result');
            Tbx.set_input('lab_result','您已用完次数');
            alert('您已用完次数');
        }
    }
    else{
        alert('请输入4位数字');
    }
}








Tbx.set_input=function(name,input){
    document.getElementById(name).value=input;
}

Tbx.disabled=function(name){
    document.getElementById(name).disabled='disabled'
}



