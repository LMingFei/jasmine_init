/**
 * Created with JetBrains RubyMine.
 * User: fei
 * Date: 13-11-9
 * Time: 下午4:09
 * To change this template use File | Settings | File Templates.
 */
describe("compare number", function() {


    it("should compare two num", function() {


        var num1="1234";
        var num2="5678";
        expect(compare(num1,num2)).toBe('0A0B');


        num1="1234";
        num2="5671";
        expect(compare(num1,num2)).toBe('0A1B');

        num1="1234";
        num2="1678";
        expect(compare(num1,num2)).toBe('1A0B');

        num1="1234";
        num2="1234";
        expect(compare(num1,num2)).toBe('4A0B');

        num1="1234";
        num2="4321";
        expect(compare(num1,num2)).toBe('0A4B')

        num1="1234";
        num2="1324";
        expect(compare(num1,num2)).toBe('2A2B')

        num1="1234";
        num2="4132";
        expect(compare(num1,num2)).toBe('1A3B')
    });

});

