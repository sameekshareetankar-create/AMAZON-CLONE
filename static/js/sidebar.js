const sign_in_box = document.querySelector(".Sign_in_box");
const close_button = document.querySelector(".close_button");

function show_side_bar() {
    sign_in_box.style.left = "0";
    close_button.style.left = "350px";
}

function hide_side_bar() {
    sign_in_box.style.left = "-350px";
    close_button.style.left = "-50px";
}
