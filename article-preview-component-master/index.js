const shareBtn = document.querySelector('.share_btn');
const share = document.querySelector('.share');

shareBtn.addEventListener("click", () => {
    share.classList.toggle('share');
})