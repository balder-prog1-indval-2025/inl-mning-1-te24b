
//oskar början


let x =50  
let y = 50




let å = 50


update = () => {
    
    clear()
  
    rectangle (W-100,å,100,100)
    
    if (keyboard.up) {
        (å -= 1)

    } 
    if (keyboard.down) {
        ( å += 1)

    } 
    rectangle (0,x,100,100)
    
    if (keyboard.w) {
        (x -= 1)

    } 
    if (keyboard.s) {
        (x += 1)

    }
    
} //oskar slut

var audio = new Audio('the-good,-the-bad-and-the-ugly-main-theme-made-with-Voicemod.mp3');
audio.play();
audio.loop = true 
