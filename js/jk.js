let pics = document.getElementById("pics");
pics.addEventListener('click', (e)=>{
    if(e.target.tagName =='IMG'){
        pics.style.display='block';
    }
})