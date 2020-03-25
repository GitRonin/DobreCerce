let searchBtn = document.querySelector('#searchBtn');
let search = document.querySelector('.afterInput');
let navbar = document.querySelector('.navbar');
let searchDiv = document.querySelector('#search');
let closeq = document.querySelector('.close');
let container = document.querySelector('.container');
let bigSearch = document.querySelector('.bigSearch');
let onlySearch = document.querySelector('.search');
searchBtn.addEventListener('click',()=>{
    // ВІДКРИТИ МАЛ. ПОШУК
    navbar.classList.add('navbarDis');
    searchDiv.classList.add('searchActive');
    search.innerHTML = '<input id="Search_Btn" onkeyup="activeSearchDis()" onkeypress="activeSearch()" maxlength="20" class="smallInput" autocomplete="off"> <input class="close" onclick="closew()" type="image" src="img/Close.svg">';
    bigSearch.classList.add('bigSearch_Dis');
    onlySearch.style.opacity = "1";
    onlySearch.style.transition = "opacity .3s";
});
function closew(){
    // ЗАКРИТИ МАЛ. ПОШУК
    navbar.classList.remove('navbarDis');
    searchDiv.classList.remove('searchActive');
    bigSearch.classList.remove('bigSearch_Dis');
}
function activeSearch(){
    // ВІДКРИТИ ВЕЛ. ПОШУК
  bigSearch.classList.add('bigSearch');
  bigSearch.style.opacity = "100";
  bigSearch.style.transition = "opacity .3s";
}
function activeSearchDis(){
    // ПЕРЕВІРКА НА ВІДКРИТТЯ ВЕЛ. ПОШУК
  let Search_Btn = document.querySelector('#Search_Btn').value;
  if (Search_Btn.length == 0){
    bigSearch.style.opacity = "0";
  }
}
let forma_flex = document.querySelector('.forma_flex');
function close_forma(){
    // 
  forma_flex.style.display = "none";
}
function open_forma(){
    // forma_flex.style.opacity = "1";
    // forma_flex.style.transition = "opacity .3s";
    forma_flex.style.display = "flex";
}
let help_flex = document.querySelector('.help_flex');
function open_help(){
    help_flex.style.display = "flex";
}
function close_help(){
    help_flex.style.display = "none";
}

let bg2a = document.querySelector('.bg2a');

let textRight = document.querySelector('.textRight');
let textLeft = document.querySelector('.textLeft');

let urface = document.querySelector('.urface');
let urface2 = document.querySelector('.urface2');
let u = document.querySelector('.u');
let f = document.querySelector('.f');
let u2 = document.querySelector('.u2');
let f2 = document.querySelector('.f2');

let visa = document.querySelector('.visa');
let privat = document.querySelector('.privat');
let terminal = document.querySelector('.terminal');
let webmoney = document.querySelector('.webmoney');
let paypal = document.querySelector('.paypal');
let perekaz = document.querySelector('.perekaz');

visa.addEventListener('click',()=>{
    // BACKGROUND CATRA
    visa.style.background = "#9C5D9A";
    privat.style.background = "#C5D5E6";
    terminal.style.background = "#C5D5E6";
    webmoney.style.background = "#C5D5E6";
    paypal.style.background = "#C5D5E6";
    perekaz.style.background = "#C5D5E6";
});
privat.addEventListener('click',()=>{
    // BACKGROUND CATRA
    visa.style.background = "#C5D5E6";
    privat.style.background = "#9C5D9A";
    terminal.style.background = "#C5D5E6";
    webmoney.style.background = "#C5D5E6";
    paypal.style.background = "#C5D5E6";
    perekaz.style.background = "#C5D5E6";
});
terminal.addEventListener('click',()=>{
    // BACKGROUND CATRA
    visa.style.background = "#C5D5E6";
    privat.style.background = "#C5D5E6";
    terminal.style.background = "#9C5D9A";
    webmoney.style.background = "#C5D5E6";
    paypal.style.background = "#C5D5E6";
    perekaz.style.background = "#C5D5E6";
});
webmoney.addEventListener('click',()=>{
    // BACKGROUND CATRA
    visa.style.background = "#C5D5E6";
    privat.style.background = "#C5D5E6";
    terminal.style.background = "#C5D5E6";
    webmoney.style.background = "#9C5D9A";
    paypal.style.background = "#C5D5E6";
    perekaz.style.background = "#C5D5E6";
});
paypal.addEventListener('click',()=>{
    // BACKGROUND CATRA
    visa.style.background = "#C5D5E6";
    privat.style.background = "#C5D5E6";
    terminal.style.background = "#C5D5E6";
    webmoney.style.background = "#C5D5E6";
    paypal.style.background = "#9C5D9A";
    perekaz.style.background = "#C5D5E6";
});
perekaz.addEventListener('click',()=>{
    visa.style.background = "#C5D5E6";
    privat.style.background = "#C5D5E6";
    terminal.style.background = "#C5D5E6";
    webmoney.style.background = "#C5D5E6";
    paypal.style.background = "#C5D5E6";
    perekaz.style.background = "#9C5D9A";
});
function pls(){
    // ЮР_ФОРМА
    urface.classList.remove('urface');
    urface2.classList.remove('urface2');
    textRight.style.height ='634px';
    textLeft.style.height ='634px';
    u.classList.remove('u');
    f.classList.remove('f');
    f.classList.add('f2');
    u.classList.add('u2');
    perekaz.classList.remove('perekaz');
}
function pls2(){
    // ФІЗ_ФОРМА
    urface.classList.add('urface');
    urface2.classList.add('urface2');
    textRight.style.height ='327px';
    textLeft.style.height ='327px';
    u.classList.remove('u2');
    f.classList.remove('f2');
    f.classList.add('f');
    u.classList.add('u');
    perekaz.classList.add('perekaz');
}
let land = document.querySelector('.land');
let money = document.querySelector('.money');
let clothes = document.querySelector('.clothes');
let heart = document.querySelector('.heart');

let font_text = document.querySelector('.font_text');
let fonDis = document.querySelector('.fonDis');

let land_text = document.querySelector('.land_text');
let money_text = document.querySelector('.money_text');
let clothes_text = document.querySelector('.clothes_text');
let heart_text = document.querySelector('.heart_text');

let Shape_land = document.querySelector('#Shape_land');
let Shape_money = document.querySelector('#Shape_money');
let Shape_clothes = document.querySelector('#Shape_clothes');
let Shape_clothes_2 = document.querySelector('#Shape_clothes_2');
let Shape_heart = document.querySelector('#Shape_heart');
let Shape_heart_2 = document.querySelector('#Shape_heart_2');

land.addEventListener('click',()=>{
    // BACKGROUND
    land.style.background = "#9C5D9A";
    money.style.background = "#ffffff";
    clothes.style.background = "#ffffff";
    heart.style.background = "#ffffff";

    // TEXT
    land_text.style.color = "#363B5D";
    money_text.style.color = "#C5D5E6";
    clothes_text.style.color = "#C5D5E6";
    heart_text.style.color = "#C5D5E6";

    // ICON_BACKGROUND
    Shape_land.style.fill = "#ffffff";
    Shape_money.style.fill = "#C5D5E6";
    Shape_clothes.style.fill = "#C5D5E6";
    Shape_clothes_2.style.fill = "#C5D5E6";
    Shape_heart.style.fill = "#C5D5E6";
    Shape_heart_2.style.fill = "#C5D5E6";
    // CORSOR
    bg2a.style.left = '-300px';
});
money.addEventListener('click',()=>{
    // BACKGROUND
    land.style.background = "#ffffff";
    money.style.background = "#9C5D9A";
    clothes.style.background = "#ffffff";
    heart.style.background = "#ffffff";

    // TEXT
    land_text.style.color = "#C5D5E6";
    money_text.style.color = "#363B5D";
    clothes_text.style.color = "#C5D5E6";
    heart_text.style.color = "#C5D5E6";

    // ICON_BACKGROUND
    Shape_land.style.fill = "#C5D5E6";
    Shape_money.style.fill = "#ffffff";
    Shape_clothes.style.fill = "#C5D5E6";
    Shape_clothes_2.style.fill = "#C5D5E6";
    Shape_heart.style.fill = "#C5D5E6";
    Shape_heart_2.style.fill = "#C5D5E6";

    // CORSOR
    bg2a.style.left = '0px';
});
clothes.addEventListener('click',()=>{
    // BACKGROUND
    land.style.background = "#ffffff";
    money.style.background = "#ffffff";
    clothes.style.background = "#9C5D9A";
    heart.style.background = "#ffffff";

    // TEXT
    land_text.style.color = "#C5D5E6";
    money_text.style.color = "#C5D5E6";
    clothes_text.style.color = "#363B5D";
    heart_text.style.color = "#C5D5E6";

    // ICON_BACKGROUND
    Shape_land.style.fill = "#C5D5E6";
    Shape_money.style.fill = "#C5D5E6";
    Shape_clothes.style.fill = "#ffffff";
    Shape_clothes_2.style.fill = "#ffffff";
    Shape_heart.style.fill = "#C5D5E6";
    Shape_heart_2.style.fill = "#C5D5E6";

    // CORSOR
    bg2a.style.left = '305px';
});
heart.addEventListener('click',()=>{
    // BACKGROUND
    land.style.background = "#ffffff";
    money.style.background = "#ffffff";
    clothes.style.background = "#ffffff";
    heart.style.background = "#9C5D9A";

    // TEXT
    land_text.style.color = "#C5D5E6";
    money_text.style.color = "#C5D5E6";
    clothes_text.style.color = "#C5D5E6";
    heart_text.style.color = "#363B5D";

    // ICON_BACKGROUND
    Shape_land.style.fill = "#C5D5E6";
    Shape_money.style.fill = "#C5D5E6";
    Shape_clothes.style.fill = "#C5D5E6";
    Shape_clothes_2.style.fill = "#C5D5E6";
    Shape_heart.style.fill = "#ffffff";
    Shape_heart_2.style.fill = "#ffffff";

    // CORSOR
    bg2a.style.left = '610px';
});
$('input[name="number"]').keyup(function() {
    if (/\D/g.test(this.value))
    {
  
      this.value = this.value.replace(/\D/g, '');
    }
});
function perevirka(current_length, next_length){
    let length = current_length.value.length;
    let maxlength = current_length.getAttribute("maxlength");
    if(length == maxlength){
        document.getElementById(next_length).focus();
    }
}
$(document).ready(function() {
    $("#date").mask("99 / 99", {placeholder:" "});
});