
//oskar början
let bäst = await fetchImage("krona.jpg")
let ogge = await fetchImage("ogge.png")
let marre = await fetchImage("marre.png")
let vinst1 = await fetchImage("bich2.png")
let upnerwasd =H/2 - H/10
let score1 = 0  
let score2 = 0
var vinst2 = new Audio('victory_sJDDywi.mp3');
var oskasprängend = new Audio('routainen-maa-my-summer-car-soundtrack/routainen-maa-my-summer-car-soundtrack.mp3');
if ((score1 || score2) > 9){
  audio1.loop = false
  audio1.pause()
 }
//oskar slut
//marre start
var audio1 = new Audio('The Good the Bad and the Ugly.mp3');
audio1.play();
if ((score1 || score2) < 11){
    audio1.loop = true
    audio1.play();
}
let bakrund = await fetchImage("isak fisak.png")
let upnerpil = H/2 - H/10
//marre slut
//isak start
let boom = new Audio('vine-boom.mp3')
let explotion = await fetchImage("explosion-explode.gif")
var explo = new Audio('explosion-meme_dTCfAHs.mp3')
let x_pos = W/2-37.5
let y_pos = H/2-50
let hbippe = new Hitbox(x_pos, y_pos, W/20, H/10)
let ippe = await fetchImage("ipse.png")
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
let pinn = new Hitbox (W-75,upnerpil,1,H/5)
let pinn2 = new Hitbox (0+W/18.8,upnerwasd,1,H/5)
function hastighet(w_hastighet_x, w_hastighet_y) {
    let x=w_hastighet_x
    let y=w_hastighet_y
    let v1 = Math.sqrt(x**2 + y**2)
    nuvarande_x_movement = x/v1 * v2
    nuvarande_y_movement = y/v1 * v2
}
function rörelse_hitbox() {
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
}  
let Powerup = false
let Super = false
let sant = true
let sant2 = true
let wait_time = 0
let wait_time2 = 0
let wait_time3 = 0    
let timeout = 0
let i=10 
let o=10
let circles = [600,640,680,720,760,800,840,880,920,960,1000]
let circles2 =[600,640,680,720,760,800,840,880,920,960,1000]
//isak slut
update = async () => {
    //oskar början
    if(sant) {
    clear()
    ctx.drawImage(bakrund, 0, 0, W, H)
    rectangle (W-75,upnerpil,W/50,H/5,"yellow")
    pinn.x = W-75
    pinn.y = upnerpil
        if (keyboard.up && upnerpil > 0) {
        (upnerpil -= H/150)
 
        }
        else if (keyboard.down && upnerpil < H - H/5) {
            ( upnerpil += H/150)
 
        }
        rectangle (0+W/30,upnerwasd,W/50,H/5,"yellow")
        pinn2.x = 0+W/18.8
        pinn2.y = upnerwasd
        if (keyboard.w && upnerwasd > 0)  {
            (upnerwasd -= H/150)
 
        }
        else if (keyboard.s && upnerwasd < H - H/5) {
            (upnerwasd += H/150)
 
        }
        //oskar slut
        //isak start
        x_pos += nuvarande_x_movement
        y_pos += nuvarande_y_movement
        hbippe.x = x_pos
        hbippe.y = y_pos
        rörelse_hitbox()
        //isak slut
//marvin start

   timeout += deltaTime
   if (timeout > 1000 && i>=0)  {
    circles.pop()
       
     
       timeout = 0
       i-=1
   }
   for(let j=0; j<circles.length; j++ ) {
       circle(   circles[j],  75 , 20)

   }
   //marvin slut
        //Oskar Start
        if (hbippe.intersects(hitbox2) ){
            score1 += 1
            }
            if (hbippe.intersects(hitbox4) ){
            score2 += 1
            }
            text(score1, W - W / 2 + 100, 50, 48, 'black')
            text(score2, W - W / 2 - 100, 50, 48, 'svart')
            text('score', W / 2 -55, 50, 50, 'svart')
        if (score1 < score2 ){
            ctx.drawImage(bäst,W - W / 2 - 200 , 28, W/40, H/20)
     
        }
     
        if (score1 > score2 ){
            ctx.drawImage(bäst, W - W / 2 + 200, 28, W/40, H/20)
     
        }
     
     
        if ((score1 || score2) > 9){
           vinst2.play();
           ctx.drawImage(vinst1, 0, 0, W, H)
           
           sant = false
       
       
        }
        //Oskar stop
        //Isak Start
        if(sant2) {
            if(keyboard.d || keyboard.a || keyboard.left || keyboard.right) {
                Super = true
                Powerup = true
            } else {
                Super = false
            }
        } else {
            Super = false
        }
        if(Powerup) {
            wait_time2 += deltaTime
        }
        if(Super == false) {
            v2 = W/130
            //oskar start
            ctx.drawImage(ippe, x_pos, y_pos, W/20, H/10)
            //oskar slut
            if(hbippe.intersects(hitbox2) || hbippe.intersects(hitbox4)) {
                x_pos = W/2-37.5
                y_pos = H/2-50
                hastighet(randomItem(W/-150, W/-200), randomItem(W/150, W/200))
            }
        }
        if(sant2) {
            if(keyboard.a || keyboard.left) {
                x=x*2
                y=y*2
                v2 = W/80
                //oskar start
                ctx.drawImage(marre, x_pos, y_pos, W/20, H/10)
                //oskar slut
                if(hbippe.intersects(hitbox2) || hbippe.intersects(hitbox4)) {
                    x_pos = W/2-37.5
                    y_pos = H/2-50
                    hastighet(randomItem(W/-150, W/-200), randomItem(W/150, W/200))
                }
            }
            else if(keyboard.d || keyboard.right) {
                x=x/2
                y/y/2
                v2 = W/200
                //oskar start
                ctx.drawImage(ogge, x_pos, y_pos, W/20, H/10)
                //oskar slut
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
                else if(hbippe.intersects(pinn2)) {
                    sant = false
                    explo.play();
                    ctx.drawImage(explotion, 0, 0, W, H)
                }
                else if(hbippe.intersects(pinn)) {
                    sant = false
                    explo.play();
                    ctx.drawImage(explotion, 0, 0, W, H)
                }
            }  
        }
        if(wait_time2 > 5000) {
            sant2 = false
            wait_time3 += deltaTime
        }
        if(wait_time3 > 10000) {
            sant2 = true
            Powerup = false
            wait_time3 = 0
            wait_time2 = 0
        }
    } else if (wait_time < 1000) {
            wait_time += deltaTime
        } else {
            sant = true
            wait_time = 0
        }
 
 
   //Isak Stop
}
 
 
export { }