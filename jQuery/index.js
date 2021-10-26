$(document).keydown( (event) => {
    $("h1").text(event.key);
});

$("h1").on("click", () => {
    if ($("h1").css("color") === "rgb(255, 255, 0)")
        $("h1").css("color","purple");
    else
        $("h1").css("color","yellow");
});