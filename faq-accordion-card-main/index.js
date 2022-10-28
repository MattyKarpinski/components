const accordions = document.querySelectorAll('.accordion');
const ans = document.querySelector('.answer');



accordions.forEach((an) => {
    accordions.addEventListener("click", () => {
        if(ans.classList.contains("hidden")) {
            ans.classList.toggle("hidden")
            ans.style.display = "block"
        }
        else {
            ans.forEach(an => ans.classList.remove("hidden"))
            ans.classList.add("hidden")
        }
    })
})