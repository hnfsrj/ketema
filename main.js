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
let form = document.querySelector("#form");
let the_service = document.querySelector(".the_services");


const scrollPosition = window.scrollY;
services[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
window.scrollTo(0, scrollPosition);


let position = 0;



function service_in_view(){

    for (let index = 0; index < 3; index++){
        let val = services[index];

        if (Math.trunc(val.getBoundingClientRect().left) >= Math.trunc(the_service.getBoundingClientRect().left)){
            return index;
        }
    };

}


container.addEventListener('click',function(e){

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
        form.scrollIntoView({ behavior: 'smooth'});

    }else if(e.target == left){

        let in_view = service_in_view();

        if (in_view > 0){

            services[in_view-1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }

        
    }else if(e.target == right){

        let in_view = service_in_view();

        if (in_view < 2){

            services[in_view+1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
    }

});



























