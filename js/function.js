var timer;
var x=false;
Go();
function Go() {
    timer = setInterval(slider, 5000);
}
function imgchange(obj,imgX,imgY) {
    if  (x){
    obj.src=imgX;
    } else {
    obj.src=imgY;
    }
    x=!x;
}  

function func(a, b) {
    
    clearInterval(timer);    
    var img = document.getElementById("image");
    img.src = a;
    
    for (var i = 1; i <= 5; i++) document.getElementById(i).className = 'inactive';
    document.getElementById(b).className = 'active';
    
    var el = document.getElementById("action_menu");
    switch(b) {
    case '1':
        el.style.top = "70%";
        el.style.left = "52.8%";
    break;
    case '2':
        el.style.top = "75%";
        el.style.left = "85%";
    break;
    case '3':
        el.style.top = "85%";
        el.style.left = "45%";
    break;
    case '4':
        el.style.top = "10%";
        el.style.left = "5%";
    break;
    case '5':
        el.style.top = "10%";
        el.style.left = "50%";
    break;
    }
    Go();
}

function slider() {

    var active = document.querySelector(".active").getAttribute("id");
    var n = active;

    var img = document.getElementById("image");
    if(active == 5) {
        n = 1;
        img.src = "img/menu-top/slyde/img"+ n +".jpg";
    }
    else {
        img.src = "img/menu-top/slyde/img"+ (++n) +".jpg";
    }

    for (var i = 1; i <= 5; i++) document.getElementById(i).className = 'inactive';
    document.getElementById(n).className = 'active';
    var el = document.getElementById("action_menu");
    switch(n) {
    case 1:
        el.style.top = "70%";
        el.style.left = "52.8%";
    break;
    case 2:
        el.style.top = "75%";
        el.style.left = "85%";
    break;
    case 3:
        el.style.top = "85%";
        el.style.left = "45%";
    break;
    case 4:
        el.style.top = "10%";
        el.style.left = "5%";
    break;
    case 5:
        el.style.top = "10%";
        el.style.left = "50%";
    break;
    }
}


function zamen(){
    document.getElementById('span').className = 'content_menu';
    var text = '<p><img src="img/menu-top/eye.png" /></p><p><img src="img/menu-top/favorites.png" /></p><p><img src="img/menu-top/share.png" /></p><p><img src="img/menu-top/cart.png"/></p>';
    $("#span").html(text);
}
function zamena(){
    document.getElementById('span').className = 'spanj';
    var text = '<span>Even & Odd</span>';
    $("#span").html(text);
}