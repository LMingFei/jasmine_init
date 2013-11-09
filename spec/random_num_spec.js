/**
 * Created with JetBrains RubyMine.
 * User: fei
 * Date: 13-11-9
 * Time: 下午3:04
 * To change this template use File | Settings | File Templates.
 */
describe("random number", function() {


    it("should create a four figures ", function() {


        var num=Random_Number().toString();
        var exp= /^\d{4}$/
        expect(exp.test(num)).toBe(true);


        var num_array=[];
        _.times(10,function(){
            num_array.push(Random_Number().toString());
        })
        var grouped_array=_.groupBy(num_array)
        var result=true
        _.each(grouped_array,function(num_array){
            if(num_array.length>3){
                result=false;
            }
        })
        expect(result).toBe(true);
    });
    it("should be  different figures",function(){


        var num=Random_Number().toString();
        var result=Judge_figures_repeat(num);
        expect(result).toBe(false);
    })
});

