const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");

form1.addEventListener("submit", (e)=>{
    e.preventDefault();
    const value = document.querySelector(".input-text").value;
    alert("Сработала 1-ая форма с данными " + value + "!");
})

const divSubmit = document.querySelector(".div-submit");
divSubmit.addEventListener("click", (e)=>{
    e.preventDefault();
    const value = document.querySelector(".div-text").textContent;
    alert("Сработала 2-ая форма с данными " + value + "!");
})

divSubmit.addEventListener("keydown", (e)=>{
    if(e.key==="Enter" || e.key===" "){
        const value = document.querySelector(".div-text").textContent;
        alert("Сработала 2-ая форма с данными " + value + "!");
    }
})