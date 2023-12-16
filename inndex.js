//function mostrar(){
    //document.getElementById("seleccionable").innerHTML = Date()
//}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
});


document.querySelector('.filtro-carta').addEventListener("keyup",(e)=>{

    const search = e.target.value;

    document.querySelectorAll(".carta").forEach((tarjeta)=>{
        
        const name = tarjeta.textContent.toLocaleLowerCase().trim();

        if (search != '')
            name.includes(search) ? tarjeta.classList.remove("filter") : tarjeta.classList.add("filter");
        else
            tarjeta.classList.remove('filter');
    });
    
});
