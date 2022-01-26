
let navListNtnOpener = document.querySelector(".nav__list-opener");
navListNtnOpener.onclick = function(){
  navVisible()
}
function navVisible(){
  let navList = document.querySelector(".nav__list");
  if (navList.classList.contains("visible") ){
    navList.classList.remove("visible")
  }else{
    navList.classList.add("visible")
  }
}
navVisible()
