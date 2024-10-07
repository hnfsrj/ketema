"use strict";


let container = document.querySelector("#container");
let menu = document.querySelector(".menu");
let closer = document.querySelector(".close");
let dropdown = document.querySelector(".dropdown");
let links = document.querySelectorAll(".dropdown p");
let book = document.querySelector("#landing .frost > button");
let left = document.querySelector(".left");
let right = document.querySelector(".right");




container.addEventListener('click',function(e){

    if(e.target == menu){
        menu.classList.add('hide');
        closer.classList.remove('hide');
        dropdown.classList.remove('hide');

    }else if(e.target == closer){
        closer.classList.add('hide');
        dropdown.classList.add('hide');
        menu.classList.remove('hide');
    }

});



























