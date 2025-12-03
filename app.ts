
//oskar början


let x =50  
let y = 50

var audio = new Audio('The Good the Bad and the Ugly.mp3'); 

audio.play(); 

audio.loop = true  
let bakrund = await fetchImage("cards/marre.png")

let å = 50

update = async () => {
    
    clear()
    
    ctx.drawImage(bakrund, 0, 0, W, H)
    rectangle (W-150,å,50,H/5,"yellow")
    let pinn = new Hitbox (W-150,å,50,H/5)
    if (keyboard.up && å > 0) {
        (å -= H/200)

    } 
    if (keyboard.down && å < H - H/5) {
        ( å += H/200)

    } 
    rectangle (50,x,50,H/5,"yellow")
    let pinn2 = new Hitbox (50,x,50,H/5)
    if (keyboard.w && x > 0)  {
        (x -= H/200)

    } 
    if (keyboard.s && x < H - H/5) {
        (x += H/200)

    }
    
} //oskar slut



export { };

