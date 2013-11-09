/**
 * Created with JetBrains RubyMine.
 * User: fei
 * Date: 13-11-9
 * Time: 下午2:48
 * To change this template use File | Settings | File Templates.
 */
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