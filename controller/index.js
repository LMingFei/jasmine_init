/**
 * Created with JetBrains RubyMine.
 * User: fei
 * Date: 13-11-9
 * Time: 下午6:22
 * To change this template use File | Settings | File Templates.
 */
function click_compare(){
    var text=Input.get_input("tbx_input");
    if(is_empty(text)){
        if(play_count().get_count()<6){
            play_count().ascending();
            var result=compare(text,random_num().get_num());
            if(result=='4A0B'){
                Input.set_input('lab_result','恭喜获胜');
                Input.set_input('lab_warn','恭喜获胜');
                Input.disabled('btn_result');
                return true;
            }

            else{
                Input.set_input('lab_warn','您已竞猜'+play_count().get_count()+'次')
                Input.set_input('lab_result',result);
            }
        }
        else{
            Input.disabled('btn_result');
            Input.set_input('lab_result','您已用完次数');
            alert('您已用完次数');
        }
    }
    else{
        alert('请输入4位数字');
    }
}




function compare(num1,num2){
    var countA=0;
    var countB=0;
    var count=_.intersection(num1,num2).length;
    for(var i=0;i<num1.length;i++){
        if(num1[i]==num2[i]){
            countA++;
        }
    }
    countB=count-countA;
    return countA+"A"+countB+"B";
}





function Random_Number(){
    var result= _.random(1000,9999).toString();
    while(Judge_figures_repeat(result)){
        result= Random_Number().toString();
    }
    return result;
}

function Judge_figures_repeat(num){
    return num[0]==num[1]||num[0]==num[2]||num[0]==num[3]||num[1]==num[2]||num[1]==num[3]||num[2]==num[3];
}



play_count().ascending=function(){
    play_count().set_count(play_count().get_count()+1);
}



function is_empty(str){
    var exp= /^\d{4}$/;
    return exp.test(str);
}

