document.querySelectorAll(".ramo").forEach(boton => {
    boton.addEventListener("click", () => {
        if (boton.classList.contains("bloqueado")) return;

        boton.style.backgroundColor = "#9E4D57";

        let desbloquea = boton.getAttribute("data-desbloquea");
        if (desbloquea) {
            desbloquea.split(",").forEach(id => {
                let ramoDesbloquear = document.getElementById(id.trim());
                if (ramoDesbloquear) {
                    ramoDesbloquear.classList.remove("bloqueado");
                }
            });
        }
    });
});
