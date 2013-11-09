/**
 * Created with JetBrains RubyMine.
 * User: fei
 * Date: 13-11-9
 * Time: 下午6:22
 * To change this template use File | Settings | File Templates.
 */
function click_compare(){
    var text=document.getElementById('tbx_input').value;
    if(is_empty(text)){
        if(parseInt(localStorage.count)<3){
            localStorage.count=parseInt(localStorage.count)+1;
            var result=compare(text,localStorage.random_num);
            if(result=='4A0B'){
                document.getElementById('lab_result').value='恭喜获胜';
                document.getElementById('lab_warn').value='恭喜获胜';
                document.getElementById('btn_result').disabled='disabled'
                return true;
            }

            else{
                document.getElementById('lab_warn').value='您已竞猜'+localStorage.count+'次';
                document.getElementById('lab_result').value=result;
            }
        }
        else{
            document.getElementById('btn_result').disabled='disabled'
            alert('您已用完次数');
        }
    }
    else{
        alert('请输入4位数字');
    }

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

function is_empty(str){
    var exp= /^\d{4}$/;
    return exp.test(str);
}

function create_a_num(){
    localStorage.random_num=Random_Number();
    localStorage.count='0';
}