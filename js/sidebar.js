var menuButton = document.querySelector('.btn-menu-nm');
let menuState = false;

//On click change menu state
menuButton.addEventListener('click', () =>{
    if(menuState === false){
        //show menu

        menuState = true;
    }else {
        //hide menu


        menuState = false;
        
    }
});

setInterval(function(){
    //DEBUG
    console.log(menuState);

}, 1000);