"use strict";


let container = document.querySelector("#container");
let menu = document.querySelector(".menu");
let closer = document.querySelector(".close");
let dropdown = document.querySelector(".dropdown");
let book = document.querySelector("#landing .frost > button");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let subject = document.querySelector("#form>input[name='subject']");
let services = document.querySelectorAll(".service");



const scrollPosition = window.scrollY;
services[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
window.scrollTo(0, scrollPosition);


let position = 0;




container.addEventListener('click',function(e){
    console.log(e.target);
    if(e.target == menu){
        menu.classList.add('hide');
        closer.classList.remove('hide');
        dropdown.classList.remove('hide');

    }else if(e.target == closer){
        closer.classList.add('hide');
        dropdown.classList.add('hide');
        menu.classList.remove('hide');
    
    }else if(e.target == book){
        subject.value = "Consultation";
        window.location.hash = 'contact_me';
    }else if(e.target == left){

        if (position > 0){
            services[position-1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            position -= 1;
        }

        
    }else if(e.target == right){

        if (position < 2){
            services[position+1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            position += 1;
        }

    }

});



























