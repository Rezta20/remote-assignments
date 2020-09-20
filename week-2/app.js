// change welcome to hava a good time! and swich back to welcome message
document.getElementById('changeTitle').addEventListener('click', changeWelcomeWords);

 function changeWelcomeWords(){
     const welcomeWords = document.getElementById('changeTitle').innerHTML;

     if( welcomeWords == 'Welcome Message'){
        document.getElementById('changeTitle').innerHTML= 'Have a Good Time!';
     }
     else{
        document.getElementById('changeTitle').innerHTML= 'Welcome Message';   
     }
    }

// When navbar was clicked the img will change to a cross
//setattribute
const navbarImg = document.getElementById('controlNavbar');
navbarImg.addEventListener('click', changeToCross);
 
function changeToCross(){
    if(navbarImg.classList.contains('controlNavbar')){
        navbarImg.classList.add('fa-times');
        navbarImg.classList.remove('fa-bars');
    }
    else{
        navbarImg.classList.remove('fa-times');
        navbarImg.classList.add('fa-bars');
    }

}

//navbar fas fa-bars fa-2x
{/* <i class="fas fa-times"></i> */}

// When clicked the call to action, the under content boxes will show up.

function expandWrapper(){
    const wrapperBorn = document.getElementById('wrapperBorn');
    if(wrapperBorn.style.display ==='flex'){
        wrapperBorn.style.display = 'none';
    }
    else{
        wrapperBorn.style.display = 'flex';
        wrapperBorn.style.backgroundColor = '#ffffdd';
    }
}