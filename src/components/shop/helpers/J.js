import React from "react";


class J extends React.Component{
    render(){
        return(
        <div>

<div> <span>
                <button>Жми</button>
            </span></div>



        </div>
        )
    }
}

export default J;


$(document)
    .ajaxStart(function() {
        console.log('Начало запроса');
    })
    .ajaxSend(function(event, jqxhr, settings) {
        console.log(`Запрос отправлен по адресу: ${settings.url}`);
    })
    .ajaxStop(function() {
        console.log('Все запросы завершены');
    })
    .ajaxError(function(event, jqxhr, settings) {
        console.log('Ошибка при выполнении запроса');
    })
    .ajaxComplete(function(event, jqxhr, settings) {
        console.log('Запрос завершен');
    })
    .ajaxSuccess(function(event, jqxhr, settings) {
        console.log(`С сервера получены данные: ${jqxhr.responseText}`);
    });




