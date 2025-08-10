document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add("aprobado");
        btn.disabled = true;

        let desbloqueos = btn.dataset.unlock;
        if (desbloqueos) {
            desbloqueos.split(",").forEach(id => {
                let requisito = document.getElementById(id);
                if (requisito) {
                    requisito.disabled = false;
                }
            });
        }
    });
});
