/**
 * Created with JetBrains RubyMine.
 * User: fei
 * Date: 13-11-9
 * Time: 下午7:18
 * To change this template use File | Settings | File Templates.
 */
describe("index", function() {
    it("should be 恭喜获胜 ", function() {
        localStorage.count='0';
        localStorage.random_num='1234';
        document.getElementById('tbx_input').value='1234';
        document.getElementById('btn_result').onclick();
        expect(document.getElementById('lab_result').value).toBe('恭喜获胜');
    })
//
//    it("should be 0A4B ", function() {
//        localStorage.count='0';
//        localStorage.random_num='1234';
//        document.getElementById('tbx_input').value='4321';
//        document.getElementById('btn_result').onclick();
//        expect(document.getElementById('lab_result').value).toBe('0A4B');
//    })
//
//    it("should be 2A2B ", function() {
//        localStorage.count='0';
//        localStorage.random_num='1234';
//        document.getElementById('tbx_input').value='1432';
//        document.getElementById('btn_result').onclick();
//        expect(document.getElementById('lab_result').value).toBe('2A2B');
//    })
//
//    it("should be alert ", function() {
//        localStorage.count='3';
//        localStorage.random_num='1234';
//        document.getElementById('tbx_input').value='1432';
//        document.getElementById('btn_result').onclick();
//        expect(document.getElementById('lab_result').value).toBe('您已用完次数');
//    })
})