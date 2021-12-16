let navbar = document.querySelector(' .menu');
document.querySelector('#menu-btn').onclick= () =>{
    navbar.classList.add('active');
}
document.querySelector('#close-menu').onclick = () =>{
    navbar.classList.remove('active');
}

let searchBar = document.querySelector('.search-bar');
document.querySelector('#search-btn').onclick = () =>{
    searchBar.classList.add('active');
}
document.querySelector('#search-close').onclick = () =>{
    searchBar.classList.remove('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    searchBar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');

    }


}

let icon = document.querySelector('.f-icon');
document.querySelector('#whats').onclick = () =>{
    icon.classList.add('active');
}