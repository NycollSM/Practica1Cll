function show(tab, displayAtt){
    let parent = document.querySelectorAll(tab);
    let div = document.querySelectorAll('.change');
    function panel(event){
        for (let i of div){
            i.style.display = 'none';
        }            
        let x;
        for (let i = 0; i < parent.length; i++){
           if (parent[i]== event.target){
                x = i;
            }
        
        }

        div[x].style.display = displayAtt;
        event.target.getAttrubute('href');
    }
    for (let e of parent){
        e.addEventListener('click', panel);
    }
}
