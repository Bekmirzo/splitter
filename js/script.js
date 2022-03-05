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

SplitterHeader.onmousedown = SplitHeader();
SplitFooter.onmousedown =SplitFooter();

function SplitHeader(){
    let sphc = false;
    let sphcY1 = 0;

    SplitterHeader.addEventListener('mousedown', (event)=>{
        sphc = true;
        sphcY1 = event.clientY;
    });

    body.addEventListener('mousemove', (event)=>{
        let sphcY2 = event.clientY;
        let sphcDY = sphcY1 - sphcY2;
    
        if(sphc){
            header.style.height = (header.offsetHeight - sphcDY) + 'px';
            center.style.height = (center.offsetHeight + sphcDY) + 'px';
        }
        sphcY1 = sphcY2;
        
        
    });

    body.addEventListener('mouseup', (event)=>{
        sphc = false;
    });
   
};

function SplitFooter(){
    let spfc = false;
    let spfcY1 = 0;

    SplitterFooter.addEventListener('mousedown', (event)=>{
        spfc = true;
        spfcY1 = event.clientY;
    });

    body.addEventListener('mousemove', (event)=>{
        let spfcY2 = event.clientY;
        let spfcDY = spfcY1 - spfcY2;
    
        if(spfc){
            center.style.height = (center.offsetHeight - spfcDY) + 'px';
            footer.style.height = (footer.offsetHeight + spfcDY) + 'px';
        }
        spfcY1 = spfcY2;
        
        
    });

    body.addEventListener('mouseup', (event)=>{
        spfc = false;
    });
   
};
