/**
 * Created with JetBrains RubyMine.
 * User: fei
 * Date: 13-11-19
 * Time: 下午4:00
 * To change this template use File | Settings | File Templates.
 */


Input.set_input=function(name,input){
    document.getElementById(name).value=input;
}

Input.disabled=function(name){
    document.getElementById(name).disabled='disabled'
}



