const heart = document.querySelector('.heart_btn');
const heart2 = document.querySelector("#main_container > div > div:nth-child(2) > article > div.bottom_icons > div.left_icons > div.heart_btn");
 heart.onclick = () => { 
     
    if((document.querySelector("#main_container > div > div > article > div.bottom_icons > div.left_icons > div.heart_btn > div").className =="sprite_heart_icon_outline on"))
    document.querySelector("#main_container > div > div > article > div.bottom_icons > div.left_icons > div.heart_btn > div").className ="sprite_heart_icon_outline";
    else
    document.querySelector("#main_container > div > div > article > div.bottom_icons > div.left_icons > div.heart_btn > div").className ="sprite_heart_icon_outline on";


   } 
   heart2.onclick= () => {
           
   if((document.querySelector("#main_container > div > div:nth-child(2) > article > div.bottom_icons > div.left_icons > div.heart_btn > div").className == "sprite_heart_icon_outline on"))
   document.querySelector("#main_container > div > div:nth-child(2) > article > div.bottom_icons > div.left_icons > div.heart_btn > div").className ="sprite_heart_icon_outline";
   else
   document.querySelector("#main_container > div > div:nth-child(2) > article > div.bottom_icons > div.left_icons > div.heart_btn > div").className ="sprite_heart_icon_outline on";
   }