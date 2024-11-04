let navegador= document.getElementById('navegador');
let cambiarNav=false;

window.addEventListener('scroll',()=>{
    if (window.scrollY > (innerHeight*0.6))
    {
        cambiarNav=false
    }
    else
    {
        cambiarNav=true;
    }

    if (cambiarNav)
    {
        navegador.classList.remove('visible');
    }
    else
    {
        navegador.classList.add('visible');
    }
    
})
