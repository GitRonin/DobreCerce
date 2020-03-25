let searchBtn = document.querySelector('#searchBtn');
let search = document.querySelector('.afterInput');
let navbar = document.querySelector('.navbar');
let searchDiv = document.querySelector('#search');
let closeq = document.querySelector('.close');
let container = document.querySelector('.container');
let bigSearch = document.querySelector('.bigSearch');
let onlySearch = document.querySelector('.search');
searchBtn.addEventListener('click',()=>{
    navbar.classList.add('navbarDis');
    searchDiv.classList.add('searchActive');
    search.innerHTML = '<input id="Search_Btn" onkeyup="activeSearchDis()" onkeypress="activeSearch()" maxlength="20" class="smallInput" autocomplete="off"> <input class="close" onclick="closew()" type="image" src="img/Close.svg">';
    bigSearch.classList.add('bigSearch_Dis');
    onlySearch.style.opacity = "1";
    onlySearch.style.transition = "opacity .3s";
});
function closew(){
    navbar.classList.remove('navbarDis');
    searchDiv.classList.remove('searchActive');
    bigSearch.classList.remove('bigSearch_Dis');
}
function activeSearch(){
  bigSearch.classList.add('bigSearch');
  bigSearch.style.opacity = "100";
  bigSearch.style.transition = "opacity .3s";
}
function activeSearchDis(){
  let Search_Btn = document.querySelector('#Search_Btn').value;
  if (Search_Btn.length == 0){
    bigSearch.style.opacity = "0";
  }
}
function Btn(){
    let Btn_name = document.querySelector('#Btn_name').value;
    let Btn_tel = document.querySelector('#Btn_tel').value;
    if (Btn_name.length < 3 || Btn_name.length > 12 || Btn_tel.length < 10 || Btn_tel.length > 12)
    {
        alert("Заповніть у правильному форматі!");
    }
    else
    {
        alert("Дані успішно відправлено!");
        //let a = "../src/index.html";
        //document.location.href = a;
    }
}
$(document).ready(function() {
    $('.phone').mask('+38 (099) 999 99 99');
});
function href1(){
    let a = "../src/index.html";
    document.location.href = a;
}
        /*for(let i = Btn_name_arr[0]; i < Btn_name.length; i++)
        {
            if(typeof i === String)
            {
                alert("Дані успішно відправлено!");
            }
            else
            {
                alert("No");
            }
        }*/