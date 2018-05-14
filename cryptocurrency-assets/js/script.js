// Crypto Currency Slider
var swiper = new Swiper('.crypto_slider_main', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

});

// Crypto Currency Price Fetching

if ($("body").hasClass("crypto_currency_version")){

    $.get("https://api.coinmarketcap.com/v1/ticker/", function(data, status) {
        for (var i = 0; i < data.length - 1; i++) {
            if (data[i].id == "litecoin") {
                $("#lprice").html(data[i].price_usd);
            }
            if (data[i].id == "bitcoin") {
                $("#bprice").html(data[i].price_usd);
            }
            if (data[i].id == "ethereum") {
                $("#eprice").html(data[i].price_usd);
            }
            if (data[i].id == "ethereum") {
                $("#e_price").html(data[i].price_usd);
            }
            if (data[i].id == "bitcoin") {
                $("#b_price").html(data[i].price_usd);
            }
            if (data[i].id == "litecoin") {
                $("#l_price").html(data[i].price_usd);
            }
            if (data[i].id == "ripple") {
                $("#r_price").html(data[i].price_usd);
            }
            if (data[i].id == "dash") {
                $("#dash_price").html(data[i].price_usd);
            }

            if (data[i].id == "iota") {
                $("#iota_price").html(data[i].price_usd);
            }
            if (data[i].id == "neo") {
                $("#neo_price").html(data[i].price_usd);
            }
            if (data[i].id == "monero") {
                $("#monero_price").html(data[i].price_usd);
            }
            if (data[i].id == "qtum") {
                $("#qtum_price").html(data[i].price_usd);
            }

        }
    });


}
