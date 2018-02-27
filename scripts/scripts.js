/*
$(document).ready(function () {
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://api-ropsten.etherscan.io/api?module=account&action=txlistinternal&address=0xE8ABF2f63c88cA71506DB5d099513C16990ce207&startblock=0&endblock=2702578&sort=asc&apikey=YourApiKeyTokenH37ZC3XHSE7FTRTQCVARKZWC4PFUHVKCB9",
        "method": "GET"
    };
    $.ajax(settings).done(function (response) {
       /!* populateData(response,1);
        populateData(response,0.5);
        populateData(response,0.05);*!/
    });

    function populateData(response,gameValue) {
        let game;
        if (gameValue === 1){
            game = 'one';
        }if(gameValue ===0.5){
            game = '05';
        }if (gameValue === 0.05) {
            game = '005'
        }
        for (let i = 0; i < 10; i++) {
            let obj = response.result[i];
            let toAddress = obj['to'];
            let value = obj['value'];
            if (value.substring(0, 3) / 100 !== 0.01) {
                $(`.${game}Eth-Players`).append(`<li class="address"><a href="https://ropsten.etherscan.io/address/${toAddress}">${toAddress} ->
 <span class="text-success">${value.substring(0, 3) / 100}</a></span></li>`)
            }
        }
    }

});
*/
