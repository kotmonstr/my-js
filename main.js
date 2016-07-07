var MyWidget = {

    // свойства
    option_1: 1222,
    option_2: "yes",

    //методы
    Start: function (opt_1, opt_2) {
        alert('Start: ' + opt_1 + ' ' + opt_2);
    },

    // Проверка новостей из парсера
    CheckNews: function () {
        console.log('CheckNews');
        setInterval(function () {
            $.ajax({
                url: '/',
                type: 'POST',
                dataType: 'json',
                data: {
                    //_csrf: csrf_token,

                },
                success: function (data) {
                    MyWidget.Show();
                   },
                done: function(){
                    MyWidget.Show();
                },
            });
        }, 10000);
    },

    // Вывод инфо блока
    Show: function (SelfKill) {
        var template = '<div class="system_message">' +
            '<a href="javascript:void(0)" onclick="MyWidget.Close()"><h5 class="close-button-x">X</h5></a>' +
            '<span>Новости обновленны</span>' +
            '</div>';
        jQuery('body').append(template);
        if (SelfKill) {
            setTimeout(function () {
                jQuery('.system_message').hide('slow');
            }, 5000);
        }
    },

    // скрытие инфо блока
    Close: function () {
        jQuery('.system_message').hide('slow');
    }
};

$(document).ready(function () {
    //MyWidget.Show(SelkKill = true);
    MyWidget.CheckNews();
});


