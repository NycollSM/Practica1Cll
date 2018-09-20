/** Accordion */
function accordion (h3, setAttribute){
    let titles = document.querySelectorAll('h3');
    let p = document.querySelectorAll('.widget');
    function color (event){
        event.target.setAttribute('class' , 'active');
    }
    
     for (t of titles){
         t.addEventListener('click' , color);

     }
 let linked = titles.length;
 linked.addEventListener('click' , function(){
     p.toggle('p');
     if (p.style.display === 'block'){
         p.style.display ='none';
     } else{
         p.style.display = 'block';
     }
 });
 
}

    function pop(){
         if (p.style.display === 'block'){
             p.style.display = 'none'
         } else {
             p.style.display = 'block';
         }
     }