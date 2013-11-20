/**
 * Created with JetBrains RubyMine.
 * User: fei
 * Date: 13-11-19
 * Time: 下午4:09
 * To change this template use File | Settings | File Templates.
 */



function random_num(){

}

random_num.create=function(){
    localStorage.random_num=Random_Number();

}

random_num.set_num=function(num){
    localStorage.random_num=num;
}

random_num.get_num=function(){
    return localStorage.random_num;
}

function play_count(){

}

play_count.create=function(){
    localStorage.count='0';
}

play_count.set_count=function(count){
    localStorage.count=count;
}

play_count.get_count=function(){
    return localStorage.count;
}

function Tbx(){

}

Tbx.get_input=function(input_name){
    return document.getElementById(input_name).value;
}


