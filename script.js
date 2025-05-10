window.addEventListener("scroll", function(){
    const header = this.document.querySelector("#header")
    header.classList.toggle("rolagem", this.window.scrollY > 1)
})