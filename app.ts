//oskar början
let ogge = await fetchImage("cards/ogge.png")
let marre = await fetchImage("cards/marre.png")

let z =H/2 - H/10

var audio = new Audio('The Good the Bad and the Ugly.mp3'); 

audio.play(); 

audio.loop = true  
let bakrund = await fetchImage("cards/isak fisak.png")

let å = H/2 - H/10
//oskar slut
//isak start
let x_pos = W/2-37.5
let y_pos = H/2-50
let ippe = await fetchImage("cards/ipse.png")
let hitbox1 = new Hitbox(0, -50, W, 50)
let hitbox2 = new Hitbox(-50, 0, 50, H)
let hitbox3 = new Hitbox(0, H, W, 50)
let hitbox4 = new Hitbox(W, 0, 50, H)
let v2 = W/130
let x = randomItem(W/-150, W/150, W/-80, W/80)
let y = randomItem(W/-150, W/150, W/-80, W/80)
let v1 = Math.sqrt(x**2 + y**2)
let nuvarande_y_movement = y/v1 * v2
let nuvarande_x_movement = x/v1 * v2
function hastighet(w_hastighet_x, w_hastighet_y) {
    let x=w_hastighet_x
    let y=w_hastighet_y
    let v1 = Math.sqrt(x**2 + y**2)
    nuvarande_x_movement = x/v1 * v2
    nuvarande_y_movement = y/v1 * v2
}
//isak slut
update = async () => {
    //oskar början
    clear()
    
    ctx.drawImage(bakrund, 0, 0, W, H)
    rectangle (W-75,å,W/50,H/5,"yellow")
    let pinn = new Hitbox (W-75,å,W/50,H/5)
    if (keyboard.up && å > 0) {
        (å -= H/150)

    } 
    else if (keyboard.down && å < H - H/5) {
        ( å += H/150)

    } 
    rectangle (50,z,W/50,H/5,"yellow")
    let pinn2 = new Hitbox (50,z,W/50,H/5)
    if (keyboard.w && z > 0)  {
        (z-= H/150)

    } 
    else if (keyboard.s && z < H - H/5) {
        (z += H/150)

    }
    //oskar slut
    //isak start
    x_pos += nuvarande_x_movement
    y_pos += nuvarande_y_movement
    let hbippe = new Hitbox(x_pos, y_pos, W/20, H/10)
    if(hbippe.intersects(hitbox1) && (nuvarande_x_movement > 0)) {
        hastighet(randomItem(W/150, W/200), randomItem(W/150, W/200))
    }
    else if(hbippe.intersects(hitbox1) && (nuvarande_x_movement < 0)) {
        hastighet(randomItem(W/-150, W/-200), randomItem(W/150, W/200))
    }
    else if(hbippe.intersects(hitbox3) && (nuvarande_x_movement > 0)) {
        hastighet(randomItem(W/150, W/200), randomItem(W/-150, W/-200))
    }
    else if(hbippe.intersects(hitbox3) && (nuvarande_x_movement < 0)) {
        hastighet(randomItem(W/-150, W/-200), randomItem(W/-150, W/-200))
    }
    else if(hbippe.intersects(pinn) && (nuvarande_y_movement > 0)) {
        hastighet(randomItem(W/-150, W/-200), randomItem(W/150, W/200))
    }
    else if(hbippe.intersects(pinn) && (nuvarande_y_movement < 0)) {
        hastighet(randomItem(W/-150, W/-200), randomItem(W/-150, W/-200))
    }
    else if(hbippe.intersects(pinn2) && (nuvarande_y_movement > 0)) {
        hastighet(randomItem(W/150, W/200), randomItem(W/150, W/200))
    }
    else if(hbippe.intersects(pinn2) && (nuvarande_y_movement < 0)) {
        hastighet(randomItem(W/150, W/200), randomItem(W/-150, W/-200))
    }
    //isak slut
    //Oskar Start
    if (keyboard.a) {
     ctx.drawImage(marre, x_pos, y_pos, W/20, H/10)
    }
    else if (keyboard.d) {
     ctx.drawImage(ogge, x_pos, y_pos, W/20, H/10)
    }
    else {
     ctx.drawImage(ippe, x_pos, y_pos, W/20, H/10)
    }
    //Oskar stop
    //Isak Start
    if(keyboard.a) {
        x=x*2
        y=y*2
        v2 = W/80
        if(hbippe.intersects(hitbox2)) {
            x_pos = W/2-37.5
            y_pos = H/2-50
            let x=randomItem(W/-150, W/150)
            let y=randomItem(W/-150, W/150)
            let v1 = Math.sqrt(x**2 + y**2)
            nuvarande_x_movement = x/v1 * v2
            nuvarande_y_movement = y/v1 * v2
        }
        else if(hbippe.intersects(hitbox4)) {
            x_pos = W/2-37.5
            y_pos = H/2-50
            let x=randomItem(W/-150, W/150)
            let y=randomItem(W/-150, W/150)
            let v1 = Math.sqrt(x**2 + y**2)
            nuvarande_x_movement = x/v1 * v2
            nuvarande_y_movement = y/v1 * v2
        }
    }
    else if(keyboard.d) {
        x=x/2
        y/y/2
        v2 = W/200
        if(hbippe.intersects(hitbox2) && (nuvarande_y_movement > 0)) {
            hastighet(randomItem(W/150, W/200), randomItem(W/150, W/200))
        }
        else if(hbippe.intersects(hitbox2) && (nuvarande_y_movement < 0)) {
            hastighet(randomItem(W/150, W/200), randomItem(W/-150, W/-200))
        }
        else if(hbippe.intersects(hitbox4) && (nuvarande_y_movement > 0)) {
            hastighet(randomItem(W/-150, W/-200), randomItem(W/150, W/200))
        }
        else if(hbippe.intersects(hitbox4) && (nuvarande_y_movement < 0)) {
            hastighet(randomItem(W/-150, W/-200), randomItem(W/-150, W/-200))
        }
    }
    else {
        v2 = W/130
        if(hbippe.intersects(hitbox2)) {
            x_pos = W/2-37.5
            y_pos = H/2-50
            let x=randomItem(W/-150, W/150)
            let y=randomItem(W/-150, W/150)
            let v1 = Math.sqrt(x**2 + y**2)
            nuvarande_x_movement = x/v1 * v2
            nuvarande_y_movement = y/v1 * v2
        }
        else if(hbippe.intersects(hitbox4)) {
            x_pos = W/2-37.5
            y_pos = H/2-50
            let x=randomItem(W/-150, W/150)
            let y=randomItem(W/-150, W/150)
            let v1 = Math.sqrt(x**2 + y**2)
            nuvarande_x_movement = x/v1 * v2
            nuvarande_y_movement = y/v1 * v2
        }
    }
}

export { };