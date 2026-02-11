
//oskar början
var audio1 = new Audio('The Good the Bad and the Ugly.mp3'); // bakrunds ljudet
audio1.muted = false
let bäst = await fetchImage("krona.jpg")// kronan som visar att man leder
let ogge = await fetchImage("ogge.png")// bilden på oskar 
let marre = await fetchImage("marre.png")//bilden på marvin
let vinst1 = await fetchImage("bich2.png")// bilden på isak
let upnerwasd =H/2 - H/10// kontrollerna för att röra sig upp och ner med wasd
let upnerpil = H/2 - H/10// kontrollerna för att röra sig upp och ner med pil tangenterna 
let score1 = 0  // poäng tavlan till vänster
let score2 = 0  // poäng tavlan till höger 
var vinstljudet = new Audio('victory_sJDDywi.mp3'); // happywhels ljudet när nån fått tio poäng 
if ((score1 || score2) > 9){
  audio1.loop = false
 
 }
 //oskar slut
 //isak start
const video = document.createElement("video") as HTMLVideoElement;
video.src = "jordenslut (1).mp4";
video.autoplay=false;
video.controls=false;
video.loop=false;
video.muted=false;
video.volume=1;
video.style.position = "fixed"; 
video.style.top = "0";
video.style.left = "0";
video.style.width = "100vw";
video.style.height = "100vh";
video.style.objectFit = "cover";
video.style.zIndex = "9999";
video.style.pointerEvents = "none";
video.style.opacity = "0";
video.style.transition = "opacity 1s ease-in-out";
document.body.appendChild(video);
//isak slut
//marre start
audio1.play();
if ((score1 || score2) < 11){
    audio1.loop = true 
    audio1.play();
}
let bakrund = await fetchImage("isak fisak.png")

//marre slut
//isak start
let boom = new Audio('vine-boom.mp3')
var explo = new Audio('explosion-meme_dTCfAHs.mp3')
let x_pos = W/2-37.5  //x_pos är positionen för gu
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
let pressed = false
let pressed2 = false
let Super = false
let sant = true
let sant2 = true
let timeout = 0
let timeout2 = 0
let i=10
let q=10
//marre start
let circles = [W/2.8,W/2.555,W/2.35,W/2.175,W/2.025,W/1.895,W/1.78,W/1.678,W/1.585,W/1.5]
let circles_copy = [W/2.8,W/2.555,W/2.35,W/2.175,W/2.025,W/1.895,W/1.78,W/1.678,W/1.585,W/1.5]
//marre stop
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
   if (timeout > 500 && i>=0) {
    circles.pop()
       timeout = 0
       i-=1
       q-=1
   }
   for(let j=0; j<circles.length; j++ ) {
       circle(   circles[j],  75 , 20)
   }
   if (pressed == false && i!=10) {
    timeout2 += deltaTime
   }
   if (timeout2 > 1000 && q<10)  {
    circles.push(circles_copy[q])

       timeout2 = 0
       q+=1
   }
   if(q==10) {
    i=10
   }
   //marvin slut
        //Oskar Start
            if (hbippe.intersects(hitbox2) && pressed2==false){
                score1 += 1
                }
                if (hbippe.intersects(hitbox4) && pressed2==false){
                score2 += 1
                }
                text(score1, W - W / 2 + 100, 50, 48, 'black')
                text(score2, W - W / 2 - 100, 50, 48, 'svart')
                text('score', W / 2 -55, 50, 50, 'svart')
            if (score1 < score2 ){
                ctx.drawImage(bäst,W - W / 2 - 200 , 2, W/40, H/20)
        
            }
        
            if (score1 > score2 ){
                ctx.drawImage(bäst, W - W / 2 + 200, 2, W/40, H/20)
        
            }
        
        
            if ((score1 || score2) == 10){
            vinstljudet.play();
            ctx.drawImage(vinst1, 0, 0, W, H)
            audio1.muted = true
            sant = false
        
        
            }
        //Oskar stop
        //Isak Start
        if(sant2==false) {
            pressed = false
        }
        if(sant2) {
            if(keyboard.d || keyboard.a || keyboard.left || keyboard.right) {
                pressed = true
                Super = true
            } else {
                pressed = false
                Super = false
            }
            if(keyboard.d || keyboard.right) {
                pressed2=true
            } else {
                pressed2=false
            }
        } else {
            Super = false
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
                timeout += deltaTime
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
                timeout += deltaTime
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
                    video.style.opacity = "1";
                    video.play();
                    audio1.muted = true
                }
                else if(hbippe.intersects(pinn)) {
                    sant = false
                    explo.play();
                    video.style.opacity = "1";
                    video.play();
                    audio1.muted = true
                }
            }  
        }
        if(q < 10 && pressed==false) {
            sant2 = false
        }
        if(q==10) {
            sant2 = true
        }
        if(q==0) {
            sant2 = false
        }
    } 
   //Isak Stop
}
 
 
export { }