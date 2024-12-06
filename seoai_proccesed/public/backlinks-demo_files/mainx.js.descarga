const header = document.querySelector("header")

const menuBtn = document.querySelector(".headerCta img")
const overlay = document.querySelector(".overlay")
const menuItem = document.querySelector(".mobileNav")

const dropdownMenu = document.querySelectorAll(".dropdownMenu")




menuBtn.addEventListener("click", () => {
    overlay.classList.add("active")
    menuItem.classList.add("active")
})
overlay.addEventListener("click", () => {
    overlay.classList.remove("active")
    menuItem.classList.remove("active")
})




const headerEffectFunc = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
}
window.addEventListener("load", headerEffectFunc)
window.addEventListener("scroll", () => {
    requestAnimationFrame(headerEffectFunc)
})







dropdownMenu.forEach((item) => {
    // const dropLabel = item.querySelector("span");
    // const dropItem = item.querySelector("ul");

    let isDropShow = false;

    item.addEventListener("click", () => {
        if (isDropShow) {
            item.classList.remove('active');
            isDropShow = false;
        } else {
            dropdownMenu.forEach((otherItem) => {
                otherItem.classList.remove('active');
            });
            item.classList.add('active');
            isDropShow = true;
        }
    });
});