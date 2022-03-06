const body = document.getElementById('body');
const header = document.getElementById('header');
const SplitterHeader = document.getElementById('SplitterHeader');
const center = document.getElementById('center');
const SplitterFooter = document.getElementById('SplitterFooter');
const footer = document.getElementById('footer');

/*
let sphc = false;
let sphcY1 = 0;

SplitterHeader.addEventListener('mousedown',(event)=>{
    sphc = true;
    sphcY1 = event.clientY;
});

body.addEventListener('mousemove',(event)=>{
    let sphcY2 = event.clientY;
    let sphcDY = sphcY1 - sphcY2;

    if(sphc){
        header.style.height = (header.offsetHeight - sphcDY) + 'px';
        center.style.height = (center.offsetHeight + sphcDY) + 'px';
    }
    sphcY1 = sphcY2;
});

body.addEventListener('mouseup',(event)=>{
    sphc = false;
});
*/



function SplitHeader(element,direction){
    
    let   md; // remember mouse down info
    const first  = document.getElementById("header");
    const second = document.getElementById("center");

    element.onmousedown = onMouseDown;

    function onMouseDown(e)
    {
        //console.log("mouse down: " + e.clientX);
        md = {e,
              offsetLeft:  element.offsetLeft,
              offsetTop:   element.offsetTop,
              firstWidth:  first.offsetWidth,
              firstHeight: first.offsetHeight,
              secondHeight: second.offsetHeight,
              secondWidth: second.offsetWidth
             };

        document.onmousemove = onMouseMove;
        document.onmouseup = () => {
            //console.log("mouse up");
            document.onmousemove = document.onmouseup = null;
        };
    };

    function onMouseMove(e)
    {
        //console.log("mouse move: " + e.clientX);
        let delta = {x: e.clientX - md.e.clientX,
                     y: e.clientY - md.e.clientY};

        if (direction === "V" ) // Horizontal
        {
            // Prevent negative-sized elements
            delta.y = Math.min(Math.max(delta.y, -md.firstHeight),
                       md.secondHeight);

            element.style.offsetTop = md.offsetTop + delta.y + "px";
            first.style.height = (md.firstHeight + delta.y) + "px";
            second.style.height = (md.secondHeight - delta.y) + "px";
        };
    };
};
function SplitFooter(element,direction){
    
    let   md; // remember mouse down info
    const first  = document.getElementById("center");
    const second = document.getElementById("footer");

    element.onmousedown = onMouseDown;

    function onMouseDown(e)
    {
        //console.log("mouse down: " + e.clientX);
        md = {e,
              offsetLeft:  element.offsetLeft,
              offsetTop:   element.offsetTop,
              firstWidth:  first.offsetWidth,
              firstHeight: first.offsetHeight,
              secondHeight: second.offsetHeight,
              secondWidth: second.offsetWidth
             };

        document.onmousemove = onMouseMove;
        document.onmouseup = () => {
            //console.log("mouse up");
            document.onmousemove = document.onmouseup = null;
        };
    };

    function onMouseMove(e)
    {
        //console.log("mouse move: " + e.clientX);
        let delta = {x: e.clientX - md.e.clientX,
                     y: e.clientY - md.e.clientY};

        if (direction === "V" ) // Horizontal
        {
            // Prevent negative-sized elements
            delta.y = Math.min(Math.max(delta.y, -md.firstHeight),
                       md.secondHeight);

            element.style.offsetTop = md.offsetTop + delta.y + "px";
            first.style.height = (md.firstHeight + delta.y) + "px";
            second.style.height = (md.secondHeight - delta.y) + "px";
        };
    };
};

SplitterHeader.onMouseDown = SplitHeader(SplitterHeader,"V");
SplitterFooter.onMouseDown = SplitFooter(SplitterFooter,"V");
