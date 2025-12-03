//Isak
let x_pos = W/2-37.5
let y_pos = H/2-50
let ippe = await fetchImage("cards/ipse.png")
let hitbox1 = new Hitbox(0, -50, W, 50)
let hitbox2 = new Hitbox(-50, 0, 50, H)
let hitbox3 = new Hitbox(0, H, W, 50)
let hitbox4 = new Hitbox(W, 0, 50, H)
let v2 = 10
let x = random(20, -20)
let y = random(20, -20)
let v1 = Math.sqrt(x**2 + y**2)
let nuvarande_y_movement = y/v1 * v2
let nuvarande_x_movement = x/v1 * v2
update = () => {
    clear()
    x_pos += nuvarande_x_movement
    y_pos += nuvarande_y_movement
    ctx.drawImage(ippe, x_pos, y_pos, 75, 100)
    let hbippe = new Hitbox(x_pos, y_pos, 75, 100)
    if(hbippe.intersects(hitbox1) && (nuvarande_x_movement == 0)) {
        let x=random(20, -20)
        let y=random(5, 20)   
        let v1 = Math.sqrt(x**2 + y**2)
        nuvarande_x_movement = x/v1 * v2
        nuvarande_y_movement = y/v1 * v2
    }
    else if(hbippe.intersects(hitbox1) && (nuvarande_x_movement > 0)) {
        let x=random(5, 20)
        let y=random(5, 20)   
        let v1 = Math.sqrt(x**2 + y**2)
        nuvarande_x_movement = x/v1 * v2
        nuvarande_y_movement = y/v1 * v2
    }
    else if(hbippe.intersects(hitbox1) && (nuvarande_x_movement < 0)) {
        let x=random(-5, -20)
        let y=random(5, 20)
        let v1 = Math.sqrt(x**2 + y**2)
        nuvarande_x_movement = x/v1 * v2
        nuvarande_y_movement = y/v1 * v2
    }
    else if(hbippe.intersects(hitbox2)) {
        x_pos = W/2-37.5
        y_pos = H/2-50
        let x=random(20, -20)
        let y=random(20, -20)
        let v1 = Math.sqrt(x**2 + y**2)
        nuvarande_x_movement = x/v1 * v2
        nuvarande_y_movement = y/v1 * v2
    }
    else if(hbippe.intersects(hitbox3) && (nuvarande_x_movement > 0)) {
        let x=random(5, 20)
        let y=random(-5, -20)
        let v1 = Math.sqrt(x**2 + y**2)
        nuvarande_x_movement = x/v1 * v2
        nuvarande_y_movement = y/v1 * v2
    }
    else if(hbippe.intersects(hitbox3) && (nuvarande_x_movement < 0)) {
        let x=random(-5, -20)
        let y=random(-5, -20)
        let v1 = Math.sqrt(x**2 + y**2)
        nuvarande_x_movement = x/v1 * v2
        nuvarande_y_movement = y/v1 * v2
    }
    else if(hbippe.intersects(hitbox4)) {
        x_pos = W/2-37.5
        y_pos = H/2-50
        let x=random(20, -20)
        let y=random(20, -20)
        let v1 = Math.sqrt(x**2 + y**2)
        nuvarande_x_movement = x/v1 * v2
        nuvarande_y_movement = y/v1 * v2
    }
    else if(hbippe.intersects(hitbox3) && (nuvarande_x_movement == 0)) {
        let x=random(20, -20)
        let y=random(-5, -20)   
        let v1 = Math.sqrt(x**2 + y**2)
        nuvarande_x_movement = x/v1 * v2
        nuvarande_y_movement = y/v1 * v2
    }
}
export{}1