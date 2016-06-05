/**
 * Created by Илья Яновой on 18.03.2016.
 */
let Tests = {
    init: function () {
        localStorage.clear();
        localStorage.setItem('questions', this.questions);
        localStorage.setItem('answers', this.answer);
        let ans = [];
        for (let i = 0; i < 3; i++) {
            ans = localStorage.getItem('answers').split(',');
        }
        this.createTreeText(localStorage.getItem('questions').split(','), ans);
    },

    questions: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],

    answer: [
        ['Вариант ответа №11', 'Вариант ответа №21', 'Вариант ответа №31'],
        ['Вариант ответа №12', 'Вариант ответа №22', 'Вариант ответа №32'],
        ['Вариант ответа №13', 'Вариант ответа №23', 'Вариант ответа №33']
    ],

    createForm: function () {
        let container = document.getElementsByClassName('container');
        container[0].innerHTML = '<form>' + '</form>';
    },

    createTreeText: function (question, answer) {
        this.createForm();

        let form = document.querySelector('form');

        form.innerHTML += '<h2>' + 'Тест по программированию' + '</h2>' + '\n';

        for (let i = 0; i < question.length; i++) {
            form.innerHTML += '<ul>' + question[i] + '</ul>';
            let ul = document.querySelectorAll('ul');
            for (let j = 0; j < 3; j++) {
                ul[i].innerHTML += '<li>' + '<label>' + '<input type="radio" name="answer' + i + '" value="' + answer[j] + '">' + answer[j] + '</label>' + '</li>';
            }
            answer.splice(0, 3);
        }
        form.innerHTML += '<button type="button">' + 'Проверить мои результаты' + '</button>' + '\n';
        let input = document.querySelectorAll('input');

        let button = document.querySelector('button');
        button.className = 'btn btn-info';
        let li = document.querySelectorAll('li');
        for (i = 0; i < li.length; i++) {
            li[i].className = 'list';
        }
    },

    checkedAnswer: function (answer) {
        let $result = $('form').serializeArray();
        let $resultOfTest = $('.result_of_test');

        for (let i = 0; i < $result.length; i++) {
            if ($result[i].value == answer[i]) {
                // console.log('эта хуйня работает');
                $resultOfTest.append('<p>Ответ ' + $result[i].value + ' правильный!</p>');
            } else {
                $resultOfTest.append('<p>Ответ ' + $result[i].value + ' неправильный(</p>');
            }
        }
    }
};

Tests.init();

module.export = function degree(num, degreeOfNum)
{
    'use strict';
    // var num = prompt("Введите число: ");
    // var degreeOfNum = prompt("Введите степень: ");
    if(degreeOfNum == 0) {
        console.log('result = 1');
    }
    else {
        var numFirst = num;

        if (degreeOfNum < 0) {
            degreeOfNum *= -1;
            for (var i = 0; i < degreeOfNum - 1; i++) {
                num *= numFirst;
            }
            console.log('result = ', 1 / num);
        }
        else {
            for (i = 0; i < degreeOfNum - 1; i++) {
                num *= numFirst;
            }
            console.log('result = ', num);
        }
    }
    return num;
};

degree();

function searchName()
{
    'use strict';
    var arrOfName = [],
        userName;
    for(var i = 0; i < 5; i++) {
        arrOfName[i] = prompt("Введите имя: ");
    }

    userName = prompt("Введите имя пользователя: ");
    for(i = 0; i < arrOfName.length; i++) {
        console.log(arrOfName);
        if(arrOfName[i] == userName) {
            alert(userName + ', вы успешно вошли!');
            return 0;// успешно пройдена проверка безопасности
        }
    }
    alert("Error 404, name not found!");
}

searchName();

(function () {
    let a = ['Вариант ответа №11', 'Вариант ответа №22', 'Вариант ответа №33'];
    let $btn = document.getElementsByClassName('btn-info')[0];
    let $modalW = $('.modal_window');
    let $modal = $('.modal');

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

