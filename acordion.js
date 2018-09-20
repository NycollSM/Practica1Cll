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

function pop(){
    let menu = document.getElementsByClassName(widget);
    console.log(menu);
}