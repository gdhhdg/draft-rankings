$(document).ready(function () {
    $("#show-all-button").click(function () {
        $(".te-full").show();
        $(".qb-full").show();
        $(".rb-full").show();
        $(".wr-full").show();
    });
    $("#show-te-button").click(function () {
        $(".te-full").show();
        $(".qb-full").hide();
        $(".rb-full").hide();
        $(".wr-full").hide();
    });
    $("#show-qb-button").click(function () {
        $(".qb-full").show();
        $(".te-full").hide();
        $(".rb-full").hide();
        $(".wr-full").hide();
    });
    $("#show-wr-button").click(function () {
        $(".wr-full").show();
        $(".te-full").hide();
        $(".rb-full").hide();
        $(".qb-full").hide();
    });
    $("#show-rb-button").click(function () {
        $(".rb-full").show();
        $(".te-full").hide();
        $(".qb-full").hide();
        $(".wr-full").hide();
    });
    $("#show-qb-button").click(function () {
        $(".qb-full").show();
        $(".te-full").hide();
        $(".rb-full").hide();
        $(".wr-full").hide();
    });
});