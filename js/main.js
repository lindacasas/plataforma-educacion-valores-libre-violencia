const contenidos = {
    solidaridad: {
        titulo: "Solidaridad",
        definicion: "La solidaridad es un valor fundamental que implica ayudar a los demás de manera desinteresada.",
        caracteristicas:`
        <ul>
            <li>Altruismo</li>
            <li>Empatía</li>
            <li>Compromiso</li>
        </ul>`,
        aplicarValor: "Aplicar la solidaridad implica ayudar a otros sin esperar nada a cambio.",
        ejemplos:`
        <ol>
            <li>Voluntariado en organizaciones benéficas.</li>
            <li>Apoyo a amigos y familiares en tiempos difíciles.</li>
        </ol>`,
        conclusion: "La solidaridad es fundamental para construir una sociedad más justa y compasiva."
    },
    respeto: {
        titulo: "Respeto",
        definicion: "El respeto es la consideración hacia los derechos y sentimientos de los demás.",
        caracteristicas:`
        <ul>
            <li>Tolerancia</li>
            <li>Cortesía</li>
            <li>Empatía</li>
        </ul>`,
        aplicarValor: "Reconocer y valorar a los demás es la base del respeto.",
        ejemplos:`
        <ol>
            <li>Escuchar activamente a alguien.</li>
            <li>Valorar las opiniones diferentes a las propias.</li>
        </ol>`,
        conclusion: "El respeto fomenta una convivencia armoniosa y pacífica."
    },
    
};

function mostrarValor() {
    const valor = sessionStorage.getItem('valor');

    if (contenidos[valor]) {
        document.getElementById("titulo").textContent = contenidos[valor].titulo;
        document.getElementById("definicion").textContent = contenidos[valor].definicion;
        document.getElementById("caracteristicas").innerHTML = contenidos[valor].caracteristicas;
        document.getElementById("aplicarValor").textContent = contenidos[valor].aplicarValor;
        document.getElementById("ejemplos").innerHTML = contenidos[valor].ejemplos;
        document.getElementById("conclusion").textContent = contenidos[valor].conclusion;
    }
    else{
        alert("Valor sin contenido");
    }
}

document.addEventListener('DOMContentLoaded', mostrarValor);