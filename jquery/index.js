//document comes without "" and body h1 comes with "" 

$(document).keypress(function(event) {
    $("h1").text(event.key);
})
$("h1").on("click",function(){$("h1").css("color","purple")})