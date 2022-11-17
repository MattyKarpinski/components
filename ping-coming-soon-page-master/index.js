const email = document.querySelector('.email');
const notifyBtn = document.querySelector('.notify_btn'); 
const message = document.querySelector('.message'); 

let mailformat = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

notifyBtn.addEventListener("click", () => {
    if (email.value.match(mailformat)) {
        message.innerText = "Yours email address is correct";
        message.style.color = "hsl(120, 88%, 35%)"
        message.style.fontSize = "16px";
        message.classList.toggle("message");
        email.style.border = "1px solid hsl(223, 100%, 88%)"
    } else {
        message.innerText = "Please provide a vaild email address";
        message.style.color = "hsl(354, 100%, 66%)"
        message.style.fontSize = "16px";
        message.classList.toggle("message");
        email.style.border = "2px solid hsl(354, 100%, 66%)"
    }

})

