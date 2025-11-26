
//oskar början


let x =50  
let y = 50




let å = 50


update = () => {
    
    clear()
  
    rectangle (W-150,å,50,H/5)
    
    if (keyboard.up && å > 0) {
        (å -= H/200)

    } 
    if (keyboard.down && å < H - H/5) {
        ( å += H/200)

    } 
    rectangle (50,x,50,H/5)
    
    if (keyboard.w && x > 0)  {
        (x -= H/200)

    } 
    if (keyboard.s && x < H - H/5) {
        (x += H/200)

    }
    
} //oskar sluts