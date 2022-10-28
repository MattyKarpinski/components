const cardRate = document.querySelector('.card_rate');
const cardThanks = document.querySelector('.card_thanks');

const submitBtn = document.querySelector('.submit');
const rateAgainBtn = document.querySelector('.rate_again');

const rateNumber = document.querySelector('.rate_number');
const rateBtns = document.querySelectorAll('.rate_btn');

submitBtn.addEventListener("click", () => {
    cardThanks.classList.remove('hidden');
    cardRate.style.display = "none";
})

rateAgainBtn.addEventListener("click", () => {
    cardThanks.classList.add('hidden');
    cardRate.style.display = "block";
})

rateBtns.forEach((rateBtn) => {
    rateBtn.addEventListener("click", () => {
        rateNumber.innerHTML = rateBtn.innerHTML
    } )
})