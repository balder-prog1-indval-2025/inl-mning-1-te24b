import "./app2";



let x =50
let y = 50

update = () => {
    
    clear()
  
    rectangle (y,x,100,100)
    
    if (keyboard.w) {
        (x -= 1)

    } 
    if (keyboard.s) {
        (x += 1)

    } 
}

let p = 400
let å = 50


update = () => {
    
    clear()
  
    rectangle (y,x,100,100)
    
    if (keyboard.up) {
        (p -= 1)

    } 
    if (keyboard.down) {
        (å += 1)

    } 
}