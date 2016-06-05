'use strict';

/**
 * Created by Илья Яновой on 18.03.2016.
 */
var Tests = {
    init: function init() {
        localStorage.clear();
        localStorage.setItem('questions', this.questions);
        localStorage.setItem('answers', this.answer);
        var ans = [];
        for (var _i = 0; _i < 3; _i++) {
            ans = localStorage.getItem('answers').split(',');
        }
        this.createTreeText(localStorage.getItem('questions').split(','), ans);
    },

    questions: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],

    answer: [['Вариант ответа №11', 'Вариант ответа №21', 'Вариант ответа №31'], ['Вариант ответа №12', 'Вариант ответа №22', 'Вариант ответа №32'], ['Вариант ответа №13', 'Вариант ответа №23', 'Вариант ответа №33']],

    createForm: function createForm() {
        var container = document.getElementsByClassName('container');
        container[0].innerHTML = '<form>' + '</form>';
    },

    createTreeText: function createTreeText(question, answer) {
        this.createForm();

        var form = document.querySelector('form');

        form.innerHTML += '<h2>' + 'Тест по программированию' + '</h2>' + '\n';

        for (var _i2 = 0; _i2 < question.length; _i2++) {
            form.innerHTML += '<ul>' + question[_i2] + '</ul>';
            var ul = document.querySelectorAll('ul');
            for (var j = 0; j < 3; j++) {
                ul[_i2].innerHTML += '<li>' + '<label>' + '<input type="radio" name="answer' + _i2 + '" value="' + answer[j] + '">' + answer[j] + '</label>' + '</li>';
            }
            answer.splice(0, 3);
        }
        form.innerHTML += '<button type="button">' + 'Проверить мои результаты' + '</button>' + '\n';
        var input = document.querySelectorAll('input');

        var button = document.querySelector('button');
        button.className = 'btn btn-info';
        var li = document.querySelectorAll('li');
        for (var i = 0; i < li.length; i++) {
            li[i].className = 'list';
        }
    },

    checkedAnswer: function checkedAnswer(answer) {
        var $result = $('form').serializeArray();
        var $resultOfTest = $('.result_of_test');

        for (var _i3 = 0; _i3 < $result.length; _i3++) {
            if ($result[_i3].value == answer[_i3]) {
                // console.log('эта хуйня работает');
                $resultOfTest.append('<p>Ответ ' + $result[_i3].value + ' правильный!</p>');
            } else {
                $resultOfTest.append('<p>Ответ ' + $result[_i3].value + ' неправильный(</p>');
            }
        }
    }
};

Tests.init();

module.export.degree = function degree(num, degreeOfNum) {
    'use strict';
    // var num = prompt("Введите число: ");
    // var degreeOfNum = prompt("Введите степень: ");

    if (degreeOfNum == 0) {
        console.log('result = 1');
    } else {
        var numFirst = num;

        if (degreeOfNum < 0) {
            degreeOfNum *= -1;
            for (var i = 0; i < degreeOfNum - 1; i++) {
                num *= numFirst;
            }
            console.log('result = ', 1 / num);
        } else {
            for (i = 0; i < degreeOfNum - 1; i++) {
                num *= numFirst;
            }
            console.log('result = ', num);
        }
    }
    return num;
};

degree();

function searchName() {
    'use strict';

    var arrOfName = [],
        userName;
    for (var i = 0; i < 5; i++) {
        arrOfName[i] = prompt("Введите имя: ");
    }

    userName = prompt("Введите имя пользователя: ");
    for (i = 0; i < arrOfName.length; i++) {
        console.log(arrOfName);
        if (arrOfName[i] == userName) {
            alert(userName + ', вы успешно вошли!');
            return 0; // успешно пройдена проверка безопасности
        }
    }
    alert("Error 404, name not found!");
}

searchName();

(function () {
    var a = ['Вариант ответа №11', 'Вариант ответа №22', 'Вариант ответа №33'];
    var $btn = document.getElementsByClassName('btn-info')[0];
    var $modalW = $('.modal_window');
    var $modal = $('.modal');

    $btn.addEventListener('click', function () {
        Tests.checkedAnswer(a);
        $modalW.fadeIn(100);
        $modal.fadeIn(100);
    });

    $('.close_modal_window').on('click', function () {
        $modalW.fadeOut(100).children('.result_of_test').html('');
        $modal.fadeOut(100);
        $('input').removeAttr('checked');
    });
})();
