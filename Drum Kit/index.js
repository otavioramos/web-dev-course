var drumButtons = document.querySelectorAll(".drum")

drumButtons.forEach(button => {
    button.addEventListener("click", function () {
        var audio = new Audio("sounds/tom-1.mp3")
        audio.play()
    })
});