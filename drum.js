var num = document.querySelectorAll(".drum").length
//console.log("num")
for(var i = 0; i<num; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        //alert("clicked")
        var btn = this.innerHTML
        switch (btn) {
            case 'w' : audio = new Audio("sounds/tom-1.mp3")
                audio.play();
                console.log("w")
                break;
            case 'a' : audio = new Audio("sounds/tom-2.mp3")
                audio.play();
                console.log("w")
                break;
            case 's' : audio = new Audio("sounds/tom-3.mp3")
                audio.play();
                console.log("w")
                break;
            case 'd' : audio = new Audio("sounds/tom-4.mp3")
                audio.play();
                console.log("w")
                break;
            case 'j' : audio = new Audio("sounds/snare.mp3")
                audio.play();
                console.log("w")
                break;
            case 'k' : audio = new Audio("sounds/crash.mp3")
                audio.play();
                console.log("w")
                break;
            case 'l' : audio = new Audio("sounds/kick-bass.mp3")
                audio.play();
                console.log("w")
                break;
            default: console.log(e.key)
        }
    })
}
document.addEventListener("keypress", function(e) {
    var key = e.key
    switch (key) {
        case 'w' : audio = new Audio("sounds/tom-1.mp3")
                audio.play();
                console.log("w")
                break;
            case 'a' : audio = new Audio("sounds/tom-2.mp3")
                audio.play();
                console.log("w")
                break;
            case 's' : audio = new Audio("sounds/tom-3.mp3")
                audio.play();
                console.log("w")
                break;
            case 'd' : audio = new Audio("sounds/tom-4.mp3")
                audio.play();
                console.log("w")
                break;
            case 'j' : audio = new Audio("sounds/snare.mp3")
                audio.play();
                console.log("w")
                break;
            case 'k' : audio = new Audio("sounds/crash.mp3")
                audio.play();
                console.log("w")
                break;
            case 'l' : audio = new Audio("sounds/kick-bass.mp3")
                audio.play();
                console.log("w")
                break;
            default:console.log(e.key)
    }
})