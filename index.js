let btn = document.getElementById('btn');

let username = document.getElementById('username');
let password = document.getElementById('password');


btn.onmouseover = function () {
    if (password.value === "" && username.value === "") {
        btn.classList.toggle('active');
        btn.textContent = ' 👊👿 USERNAME  आणि  PASSWORD दोनीही पण  टाकं 👊👿';
    }
    else if(username.value === ""){
        btn.classList.toggle('active');
        btn.textContent = '👿👿USERNAME टाकं आधी👿👿 ';
    }
    else if (password.value === "") {
        btn.classList.toggle('active');
        btn.textContent = '👿👿PASSWORD टाकं आधी👿👿 ';
    }
    else if(password.value !== "" && username.value !== "" ){
        btn.classList.remove('active');
        btn.textContent = '😉😉✅ हा आता ठीक आहे ......... ✅';

    }
}

//Rules for touch screen devices .
btn.onclick = function () {
    if (password.value === "" && username.value === "") {
        btn.classList.toggle('active');
        btn.textContent = ' 👊👿 USERNAME  आणि  PASSWORD दोनीही पण  टाकं 👊👿';
    }
    else if(username.value === ""){
        btn.classList.toggle('active');
        btn.textContent = '👿👿USERNAME टाकं आधी👿👿 ';
    }
    else if (password.value === "") {
        btn.classList.toggle('active');
        btn.textContent = '👿👿PASSWORD टाकं आधी👿👿 ';
    }
    else if(password.value !== "" && username.value !== "" ){
        btn.classList.remove('active');
        btn.textContent = '😉😉✅ हा आता ठीक आहे ......... ✅';

    }
}