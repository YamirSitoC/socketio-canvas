function init(){
    
    let mouse = {
        click: false,
        move: false,
        pos: {x:0,y:0},
        pos_prev: false
    };

    // Canvas 
    const canvas = document.getElementById('drawing');
    const context = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;


    canvas.width = width;
    canvas.height = height;


    canvas.addEventListener('mousedown',(e)=>{
        mouse.click = true;
        // console.log(mouse);
    });

    canvas.addEventListener('mouseup',(e)=>{
        mouse.click = false;
        // console.log(mouse);
    }); 
    
    canvas.addEventListener('mousemove',(e)=>{
        mouse.pos.x = e.clientX / width;
        mouse.pos.y = e.clientY / height;
        mouse.move = true;
       // console.log(mouse);

    });

    function mainLoop(){
        if(mouse.click && mouse.move && mouse.pos_prev){

        }
        setTimeout(mainLoop,25);
    }
    mainLoop();
}

document.addEventListener('DOMContentLoaded',init);