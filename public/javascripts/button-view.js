$(document).ready(function () {
    $("#show-all-button").click(function () {
        $(".te-full").show();
        $(".qb-full").show();
        $(".rb-full").show();
        $(".wr-full").show();
        $(".df-full").hide();

    });
    $("#show-te-button").click(function () {
        $(".te-full").show();
        $(".qb-full").hide();
        $(".rb-full").hide();
        $(".wr-full").hide();
        $(".df-full").hide();
    });
    $("#show-qb-button").click(function () {
        $(".qb-full").show();
        $(".te-full").hide();
        $(".rb-full").hide();
        $(".df-full").hide();
        $(".wr-full").hide();
    });
    $("#show-wr-button").click(function () {
        $(".wr-full").show();
        $(".te-full").hide();
        $(".rb-full").hide();
        $(".qb-full").hide();
        $(".df-full").hide();

    });
    $("#show-rb-button").click(function () {
        $(".rb-full").show();
        $(".te-full").hide();
        $(".qb-full").hide();
        $(".wr-full").hide();
        $(".df-full").hide();

    });
    $("#show-qb-button").click(function () {
        $(".qb-full").show();
        $(".te-full").hide();
        $(".rb-full").hide();
        $(".wr-full").hide();
        $(".df-full").hide();

    });
    $("#show-df-button").click(function () {
        $(".df-full").show();
        $(".te-full").hide();
        $(".rb-full").hide();
        $(".wr-full").hide();
        $(".qb-full").hide();

    });
});