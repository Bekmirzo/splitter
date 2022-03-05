const d0 = document.getElementById('d0');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const parent = document.getElementById('parent');

const body = document.getElementById('body');

var clicked = false;
var x1 = 0;
var x2 = 0;
var dx = 0;
d0.addEventListener('mousedown', (event)=>{
    clicked = true;
    x1 = event.clientX;
});
body.addEventListener('mousemove',(event)=>{
    x2 = event.clientX;
    dx = x2-x1; 
    if(clicked){
        d1.style.width = (d1.clientWidth + dx) + 'px';
        d2.style.width = (d2.clientWidth - dx) + 'px';
    }
    x1 = x2;
});

body.addEventListener('mouseup', (event)=>{
    clicked = false;
})
