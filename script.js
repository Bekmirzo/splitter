const d0 = document.getElementsByClassName('d0')[0];
const d1 = document.getElementsByClassName('d1')[0];
const d2 = document.getElementsByClassName('d2')[0];
const parent = document.getElementsByClassName('parent')[0];
const title = document.getElementById('title');

const Styled1 = window.getComputedStyle(d1);
const Styled2 = window.getComputedStyle(d2);
const StyleParent = window.getComputedStyle(parent);


const body = document.getElementById('body');

var a = false;
var b = false;
var x = 0;
d0.addEventListener('mousedown',(e)=>{
     
    a = true;
    x = e.clientX;    

});


body.addEventListener('mouseup',(event)=>{a = false; b = false;});

parent.addEventListener('mousemove', (e)=>{
        
   // console.log('a = ' + a);
  //  console.log('b = ' + b);

    xc = e.clientX;


    if(a&&b){
        if(x > xc){
            d1.style.width = d1.clientWidth - (x-xc)+'px';
            d2.style.width = d2.clientWidth + (x-xc)+'px';
            
            console.log('a = ' + a);
            console.log('b = ' + b);
            console.log('x = ' + x);
            console.log('xc = ' + xc);

        } else if(x < xc) {
            d1.style.width = d1.clientWidth + (xc-x)+'px';
            d2.style.width = d2.clientWidth - (xc-x)+'px';

            console.log('a = ' + a);
            console.log('b = ' + b);
            console.log('x = ' + x);
            console.log('xc = ' + xc);
        }
        x = xc;
    }

    
});

d0.addEventListener('mousemove', (e)=>{
        
    b = true;
  

});
 
