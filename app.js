let active = false;
document.getElementById('hamburger-menu-svg').addEventListener('click' , ()=> {
    const menuContaiener = document.getElementById('menu-container');
    if(active) {
        menuContaiener.classList.add('hidden');

    } else{
        menuContaiener.classList.remove('hidden');
        
    }
    active = !active /* toggle variable */
      
  
})
