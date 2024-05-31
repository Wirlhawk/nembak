const button = document.getElementById("no");
const yes = document.getElementById("yes")
const c1 = document.querySelector(".c1")
const c2 = document.querySelector(".c2")

button.addEventListener("click", () => {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute"    
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;


});

yes.addEventListener("click", () => {
    console.log(c1,c2)
    c1.style.display = "none"
    c2.style.display = "flex"
})
