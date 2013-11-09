/**
 * Created with JetBrains RubyMine.
 * User: fei
 * Date: 13-11-9
 * Time: 下午2:48
 * To change this template use File | Settings | File Templates.
 */
function Random_Number(){
    var result= _.random(1000,9999);
    while(Judge_figures_repeat(result)){
        result= Random_Number();
    }
    return result;
}

function Judge_figures_repeat(num){
    var num1=num%10;
    var num2=Math.floor(num/10)%10;
    var num3=Math.floor(num/100)%10;
    var num4=Math.floor(num/1000)%10;
    return num1==num2||num1==num3||num1==num4||num2==num3||num2==num4||num3==num4;
}