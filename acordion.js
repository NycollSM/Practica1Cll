/** Accordion */
function accordion (h3, setAttribute, userOptions){
    let titles = document.querySelectorAll('h3');
    
    function color (event){
        event.target.setAttribute('class' , 'active');
    }
    
     for (t of titles){
         t.addEventListener('click' , color);

     }
    /// 
/** Accordion */

    //elementos del DOM
    let titles = document.querySelectorAll('h3');
    let content = document.querySelectorAll('div');
    let p = document.querySelectorAll('.widget');
    //objeto 
    const options = Object.assign({
        collapsible: false,
        height: 'auto'
      }, userOptions);
  
    //para cambiar de color con click
    function color (event){
        event.target.setAttribute('class' , 'active');
        let header = event.target.nextElementSibling;
        let headerclicked = event.target.className === 'active';
        if (headerclicked){
            if (options.collapsible){
                event.target.className = '';
                content.className = 'content-none';
            }
        } else{
            collapseAll();
                event.target.className = 'header-active';
                content.className = 'content-visible';
        }
    }
    
     for (t of titles){
         t.addEventListener('click' , color);
     }
  
    function collapseAll(){
        for (let e of tittles){
            tittles.className = '';
        }
        for (let c of content){
            c.className = 'widget';
        }
    }
    if (options.collapsible){
        header[0].className = 'active';
        content[0].className = 'content-block';
    }
}
   

