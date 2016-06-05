/**
 * Created by Илья Яновой on 20.05.2016.
 */
var method = require('../script-compiled.js');

describe('Тест', function () {
    it('Проверка результата', function () {
        console.log(method);
        toBe(method.degree(2, 2)).toBe(4);
    })
});