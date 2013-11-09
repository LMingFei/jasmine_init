/**
 * Created with JetBrains RubyMine.
 * User: fei
 * Date: 13-11-9
 * Time: 下午4:08
 * To change this template use File | Settings | File Templates.
 */
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