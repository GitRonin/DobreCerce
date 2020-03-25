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
let forma_flex = document.querySelector('.forma_flex');
function close_forma(){
  forma_flex.style.display = "none";
}
function open_forma(){
  forma_flex.style.display ="flex";
}
let help_flex = document.querySelector('.help_flex');
function open_help(){
    help_flex.style.display = "flex";
}
function close_help(){
    help_flex.style.display = "none";
}
let fonDis = document.querySelector('.fonDis');
let fonActive = document.querySelector('.fonActive');
let land = document.querySelector('.land');
let money = document.querySelector('.money');
let clothes = document.querySelector('.clothes');
let heart = document.querySelector('.heart');
let bank = document.querySelector('.bank');
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
    visa.innerHTML = '<input class="carti" type="image" src="img/visa1.svg">';
    privat.innerHTML = '<input class="carti" type="image" src="img/privat.svg">';
    terminal.innerHTML = '<input class="carti" type="image" src="img/terminal.svg">';
    webmoney.innerHTML = '<input class="carti" type="image" src="img/webmoney.svg">';
    paypal.innerHTML = '<input class="carti" type="image" src="img/paypal.svg">';
    perekaz.innerHTML ='<input class="carti" type="image" src="img/perekaz.svg">';
});
privat.addEventListener('click',()=>{
    visa.innerHTML = '<input class="carti" type="image" src="img/visa.svg">';
    privat.innerHTML = '<input class="carti" type="image" src="img/privat1.svg">';
    terminal.innerHTML = '<input class="carti" type="image" src="img/terminal.svg">';
    webmoney.innerHTML = '<input class="carti" type="image" src="img/webmoney.svg">';
    paypal.innerHTML = '<input class="carti" type="image" src="img/paypal.svg">';
    perekaz.innerHTML ='<input class="carti" type="image" src="img/perekaz.svg">';
});
terminal.addEventListener('click',()=>{
    visa.innerHTML = '<input class="carti" type="image" src="img/visa.svg">';
    privat.innerHTML = '<input class="carti" type="image" src="img/privat.svg">';
    terminal.innerHTML = '<input class="carti" type="image" src="img/terminal1.svg">';
    webmoney.innerHTML = '<input class="carti" type="image" src="img/webmoney.svg">';
    paypal.innerHTML = '<input class="carti" type="image" src="img/paypal.svg">';
    perekaz.innerHTML ='<input class="carti" type="image" src="img/perekaz.svg">';
});
webmoney.addEventListener('click',()=>{
    visa.innerHTML = '<input class="carti" type="image" src="img/visa.svg">';
    privat.innerHTML = '<input class="carti" type="image" src="img/privat.svg">';
    terminal.innerHTML = '<input class="carti" type="image" src="img/terminal.svg">';
    webmoney.innerHTML = '<input class="carti" type="image" src="img/webmoney1.svg">';
    paypal.innerHTML = '<input class="carti" type="image" src="img/paypal.svg">';
    perekaz.innerHTML ='<input class="carti" type="image" src="img/perekaz.svg">';
});
paypal.addEventListener('click',()=>{
    visa.innerHTML = '<input class="carti" type="image" src="img/visa.svg">';
    privat.innerHTML = '<input class="carti" type="image" src="img/privat.svg">';
    terminal.innerHTML = '<input class="carti" type="image" src="img/terminal.svg">';
    webmoney.innerHTML = '<input class="carti" type="image" src="img/webmoney.svg">';
    paypal.innerHTML = '<input class="carti" type="image" src="img/paypal1.svg">';
    perekaz.innerHTML ='<input class="carti" type="image" src="img/perekaz.svg">';
});
perekaz.addEventListener('click',()=>{
    visa.innerHTML = '<input class="carti" type="image" src="img/visa.svg">';
    privat.innerHTML = '<input class="carti" type="image" src="img/privat.svg">';
    terminal.innerHTML = '<input class="carti" type="image" src="img/terminal.svg">';
    webmoney.innerHTML = '<input class="carti" type="image" src="img/webmoney.svg">';
    paypal.innerHTML = '<input class="carti" type="image" src="img/paypal.svg">';
    perekaz.innerHTML ='<input class="carti" type="image" src="img/perekaz1.svg">';
});
function pls(){
    urface.classList.remove('urface');
    urface2.classList.remove('urface2');
    textRight.style.height ='634px';
    textLeft.style.height ='634px';
    u.classList.remove('u');
    f.classList.remove('f');
    f.classList.add('f2');
    u.classList.add('u2');
    perekaz.style.display = "flex";
    //navMenu__b.innerHTML = '<a class="navMenu__b2" href="#" onclick="pls2()">Фіз. особа</a>';
}
function pls2(){
    urface.classList.add('urface');
    urface2.classList.add('urface2');
    textRight.style.height ='327px';
    textLeft.style.height ='327px';
    u.classList.remove('u2');
    f.classList.remove('f2');
    f.classList.add('f');
    u.classList.add('u');
    perekaz.style.display = "none";
}
land.addEventListener('click',()=>{
    land.innerHTML = '<input class="fonActive" type="image" src="img/land1.svg"> <p class="textFons">Зробити</p>';
    money.innerHTML = '<input class="fonDis" type="image" src="img/money.svg">  <p class="textFons">Фінансова допомога</p>';
    clothes.innerHTML = '<input class="fonDis" type="image" src="img/clothes.svg"> <p class="textFons">Матеріальна допомога</p>';
    heart.innerHTML = '<input class="fonDis" type="image" src="img/heart.svg"> <p class="textFons">Волонтерство</p>';
    bg2a.style.left = '-300px';
    //bank.parentNode.removeChild(bank);
});
money.addEventListener('click',()=>{
    land.innerHTML = '<input class="fonDis" type="image" src="img/land.svg"> <p class="textFons">Зробити</p>';
    money.innerHTML = '<input class="fonActive" type="image" src="img/money1.svg">  <p class="textFons">Фінансова допомога</p>';
    clothes.innerHTML = '<input class="fonDis" type="image" src="img/clothes.svg"> <p class="textFons">Матеріальна допомога</p>';
    heart.innerHTML = '<input class="fonDis" type="image" src="img/heart.svg"> <p class="textFons">Волонтерство</p>';
    bg2a.style.left = '0px';
    //heart.innerHTML = '<input class="fonDis" type="image" src="img/heart.svg"> <p class="textFons">Волонтерство</p>';
});
clothes.addEventListener('click',()=>{
    land.innerHTML = '<input class="fonDis" type="image" src="img/land.svg"> <p class="textFons">Зробити</p>';
    money.innerHTML = '<input class="fonDis" type="image" src="img/money.svg">  <p class="textFons">Фінансова допомога</p>';
    clothes.innerHTML = '<input class="fonActive" type="image" src="img/clothes1.svg"> <p class="textFons">Матеріальна допомога</p>';
    heart.innerHTML = '<input class="fonDis" type="image" src="img/heart.svg"> <p class="textFons">Волонтерство</p>';
    bg2a.style.left = '310px';
    //bank.parentNode.removeChild(bank);
});
heart.addEventListener('click',()=>{
    land.innerHTML = '<input class="fonDis" type="image" src="img/land.svg"> <p class="textFons">Зробити</p>';
    money.innerHTML = '<input class="fonDis" type="image" src="img/money.svg">  <p class="textFons">Фінансова допомога</p>';
    clothes.innerHTML = '<input class="fonDis" type="image" src="img/clothes.svg"> <p class="textFons">Матеріальна допомога</p>';
    heart.innerHTML = '<input class="fonActive" type="image" src="img/heart1.svg"> <p class="textFons">Волонтерство</p>';
    bg2a.style.left = '640px';
    //bank.parentNode.removeChild(bank);
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