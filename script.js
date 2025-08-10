// Mapa de prerequisitos
const prerequisitos = {
    calculo1: ["calculo2"],
    fisica1: ["fisica2"],
    quimicaGeneral: ["quimicaOrganica", "termodinamicaCinetica"],
    calculo2: ["ecuacionesDiferenciales"],
    fisica2: ["fisicaModerna"],
    introIngMateriales: ["cienciaMateriales1"]
    // Aquí continúas añadiendo todos los enlaces
};

// Función para desbloquear cursos
function desbloquear(curso) {
    if (prerequisitos[curso]) {
        prerequisitos[curso].forEach(dep => {
            document.getElementById(dep).disabled = false;
        });
    }
}

// Asignar evento a todos los botones
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.backgroundColor = "#4CAF50"; // Verde para aprobado
        btn.disabled = true;
        desbloquear(btn.id);
    });
});
