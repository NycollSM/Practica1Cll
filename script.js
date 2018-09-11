function show(tab , display){
    let showa = document.querySelectorAll('.change');
    
    function panel (event){
        showa[0].style.display = display;
        let evento = showa.length;  
    }
    for (let i = 0; i < showa.length; i++){
        let txt = showa.target;
    }
 let div = document.querySelectorAll('.tab')
    for (let e of div){
        e.addEventListener('click', panel);
    }
}



/** Accordion */
function accordion (h3, setAttribute){
    function color (event){
        event.target.setAttribute('class' , 'active');
    }
    let titles = document.querySelectorAll('h3');
     for (t of titles){
         t.addEventListener('click' , color);

     }
}
