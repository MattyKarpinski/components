const submitBtn = document.querySelector(".submit_btn");
const mailCorrect = document.querySelector(".mail_correct");
const mailIncorrect = document.querySelector(".mail_incorrect");
const errorIcon = document.querySelector(".error_icon");
const mail = document.querySelector(".mail");

let mailformat = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

submitBtn.addEventListener("click", () => {
    if(mail.value.match(mailformat)) {
        mailCorrect.classList.toggle("hidden");
        errorIcon.classList.add("hidden");
        mailIncorrect.classList.add("hidden");
    }
    else {
        mailIncorrect.classList.toggle("hidden");
        mailCorrect.classList.toggle("hidden");
        errorIcon.classList.remove("hidden")
    }
})