/* =========================================
   PARA MI PEQUEÑA ❤️
   JAVASCRIPT PRINCIPAL
========================================= */


/* =========================================
   BOTÓN INICIAL
========================================= */
/* =========================================
   BOTÓN INICIAL + MÚSICA
========================================= */

const startButton = document.getElementById("startButton");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");


startButton.addEventListener("click", () => {

    /* Intentar iniciar la música */

    backgroundMusic.play()
        .then(() => {

            musicButton.classList.add("show");
            musicButton.classList.add("playing");

            musicButton.textContent = "🎵";

        })
        .catch(error => {

            console.log(
                "El navegador no permitió iniciar la música:",
                error
            );

        });


    /* Ir hacia nuestra historia */

    document.getElementById("historia").scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================================
   PAUSAR / REANUDAR MÚSICA
========================================= */

musicButton.addEventListener("click", () => {

    if (backgroundMusic.paused) {

        backgroundMusic.play();

        musicButton.classList.add("playing");

        musicButton.textContent = "🎵";

    } else {

        backgroundMusic.pause();

        musicButton.classList.remove("playing");

        musicButton.textContent = "▶️";

    }

});

/* =========================================
   "¿YO SECA?" 😂
========================================= */

const dryButton = document.getElementById("dryButton");
const dryMessage = document.getElementById("dryMessage");

dryButton.addEventListener("click", () => {

    dryMessage.classList.toggle("show");

    if (dryMessage.classList.contains("show")) {

        dryButton.textContent = "Jajajaja sí eras 😂❤️";

    } else {

        dryButton.textContent = "¿Yo seca? 🤨";

    }

});


/* =========================================
   LA PROPIA NUCITA 🤎🤍
========================================= */

const combineButton = document.getElementById("combineButton");
const nucitaResult = document.getElementById("nucitaResult");

combineButton.addEventListener("click", () => {

    nucitaResult.classList.toggle("show");

    if (nucitaResult.classList.contains("show")) {

        combineButton.textContent = "La combinación perfecta ❤️";

    } else {

        combineButton.textContent = "Combinar ❤️";

    }

});


/* =========================================
   CONTADOR DE NUESTRA RELACIÓN ❤️
========================================= */

/*
    IMPORTANTE:

    Cambia la hora si quieres.

    Actualmente está configurado para:

    4 de mayo de 2026
    00:00:00
*/

const relationshipStart = new Date("May 4, 2026 00:00:00").getTime();


function updateCounter() {

    const now = new Date().getTime();

    const difference = now - relationshipStart;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
    );


    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}


/* Actualizar inmediatamente */

updateCounter();


/* Actualizar cada segundo */

setInterval(updateCounter, 1000);


/* =========================================
   MEDIDOR DE CELOS 😂❤️
========================================= */

const jealousyButton = document.getElementById("jealousyButton");

const jealousyFill = document.getElementById("jealousyFill");

const jealousyPercent = document.getElementById("jealousyPercent");

const jealousyText = document.getElementById("jealousyText");


jealousyButton.addEventListener("click", () => {

    let percentage = 0;

    jealousyText.textContent =
        "Analizando el nivel de celos de mi Pequeña... 🤔";


    const loading = setInterval(() => {

        percentage += Math.floor(Math.random() * 12) + 5;

        if (percentage >= 100) {

            percentage = 100;

            clearInterval(loading);

            jealousyText.textContent =
                "Resultado: 100% celosa 😂❤️ Pero igual te amo demasiado, mi Pequeña.";

            jealousyButton.textContent =
                "Confirmado: Mi Pequeña es celosita 😂❤️";

        }


        jealousyFill.style.width = percentage + "%";

        jealousyPercent.textContent = percentage + "%";


    }, 200);

});


/* =========================================
   LA GARRAPATA 😂❤️
========================================= */

const garrapataButton =
    document.getElementById("garrapataButton");

const garrapataMessage =
    document.getElementById("garrapataMessage");


garrapataButton.addEventListener("click", () => {

    garrapataMessage.classList.toggle("show");


    if (garrapataMessage.classList.contains("show")) {

        garrapataButton.textContent =
            "Confirmado 😂❤️";

    } else {

        garrapataButton.textContent =
            "Descubrir 🦥";

    }

});


/* =========================================
   CARTAS PARA MI PEQUEÑA 💌
========================================= */

const letterButtons =
    document.querySelectorAll(".letter-button");

const letterModal =
    document.getElementById("letterModal");

const letterContent =
    document.getElementById("letterContent");

const closeModal =
    document.getElementById("closeModal");


const letters = {


    extrañar: {

        title: "Cuando me extrañes ❤️",

        content: `
            <p>
                Mi Pequeña, sé que hay momentos en los que
                la distancia pesa más de lo normal.
            </p>

            <p>
                Momentos en los que quisieras tenerme cerca,
                abrazarme o simplemente estar conmigo.
            </p>

            <p>
                Yo también te extraño.
            </p>

            <p>
                Pero quiero que recuerdes algo:
            </p>

            <p>
                Cada día que pasa no es un día más lejos de ti.
            </p>

            <p>
                Es un día menos para volver a encontrarnos.
            </p>

            <p>
                Y cuando vuelvas a extrañarme,
                recuerda que probablemente yo también
                esté pensando exactamente en ti. ❤️
            </p>
        `

    },


    triste: {

        title: "Cuando estés triste 🤍",

        content: `
            <p>
                Mi Pequeña...
            </p>

            <p>
                Si estás leyendo esto porque estás triste,
                me gustaría poder aparecer ahora mismo
                y darte uno de esos abrazos largos.
            </p>

            <p>
                No puedo estar físicamente contigo todo el tiempo,
                pero quiero que recuerdes que nunca tienes
                que enfrentar tus momentos difíciles sola.
            </p>

            <p>
                Puedes contarme lo que sea.
                Puedes llorar conmigo.
                Puedes decirme que no estás bien.
            </p>

            <p>
                No tienes que ser fuerte todo el tiempo.
            </p>

            <p>
                Yo estaré aquí para escucharte,
                apoyarte y recordarte lo increíble
                que eres. ❤️
            </p>
        `

    },


    distancia: {

        title: "Cuando la distancia duela 🌎❤️",

        content: `
            <p>
                Medellín y Caucasia pueden estar separados
                por muchos kilómetros.
            </p>

            <p>
                Pero míranos.
            </p>

            <p>
                Ya nos encontramos tres veces.
            </p>

            <p>
                Y cada vez que tuvimos que despedirnos,
                también encontramos una nueva razón
                para querer volver a vernos.
            </p>

            <p>
                La distancia existe.
                Sería mentira decir que no duele.
            </p>

            <p>
                Pero también existe algo más fuerte:
            </p>

            <p>
                Las ganas que tenemos de volver a encontrarnos.
            </p>

            <p>
                Así que no pienses en la distancia
                como algo que nos separa.
            </p>

            <p>
                Piensa en ella como el camino
                que volveremos a recorrer
                para encontrarnos otra vez. ❤️
            </p>
        `

    },


    amor: {

        title: "Cuando quieras recordar cuánto te amo ❤️",

        content: `
            <p>
                Te amo por tus ojos.
            </p>

            <p>
                Por tus cachetes.
            </p>

            <p>
                Por tus cejas.
            </p>

            <p>
                Por tus labios.
            </p>

            <p>
                Por tu cabello crespo.
            </p>

            <p>
                Por tu forma de preocuparte por mí.
            </p>

            <p>
                Por preguntarme si ya comí.
            </p>

            <p>
                Por estar pendiente de mí.
            </p>

            <p>
                Por apoyarme.
            </p>

            <p>
                Y por estar conmigo incluso
                en momentos difíciles.
            </p>

            <p>
                Pero sobre todo...
            </p>

            <p>
                Te amo porque eres tú.
            </p>

            <p>
                Mi Pequeña.
                Mi Nucita.
                La persona que apareció en mi vida
                sin que ninguno de los dos planeara
                lo que iba a pasar.
            </p>

            <p>
                Y ahora no quiero imaginar una historia
                donde tú no estés. ❤️
            </p>
        `

    },


    pronto: {

        title: "Nos veremos pronto ❤️",

        content: `
            <p>
                Ya hemos tenido que despedirnos tres veces.
            </p>

            <p>
                Y sí...
                cada despedida ha sido difícil.
            </p>

            <p>
                Pero ninguna despedida ha sido el final.
            </p>

            <p>
                Porque después de cada una,
                seguimos hablando.
                Seguimos queriéndonos.
                Seguimos planeando el momento
                en que volveremos a vernos.
            </p>

            <p>
                Así que cuando tengas ganas de llorar
                porque me extrañas, recuerda esto:
            </p>

            <p>
                No estamos esperando un milagro.
            </p>

            <p>
                Estamos esperando nuestro próximo encuentro.
            </p>

            <p>
                Y sé que cuando llegue ese momento,
                volveré a viajar felizmente
                porque al final del camino
                estarás tú. ❤️
            </p>
        `

    }

};


/* =========================================
   ABRIR CARTAS
========================================= */

letterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const letterName =
            button.dataset.letter;

        const letter =
            letters[letterName];


        letterContent.innerHTML = `
            <h2>${letter.title}</h2>
            ${letter.content}
        `;


        letterModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* =========================================
   CERRAR MODAL
========================================= */

closeModal.addEventListener("click", closeLetter);


function closeLetter() {

    letterModal.classList.remove("show");

    document.body.style.overflow = "auto";

}


/* Cerrar haciendo clic fuera */

letterModal.addEventListener("click", (event) => {

    if (event.target === letterModal) {

        closeLetter();

    }

});


/* =========================================
   CERRAR CON ESC
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeLetter();

    }

});




/* =========================================
   VISOR DE IMÁGENES
========================================= */

const imageModal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

const closeImage = document.getElementById("closeImage");


document.querySelectorAll(".gallery img").forEach(image => {

    image.addEventListener("click", () => {

        modalImage.src = image.src;

        modalImage.alt = image.alt;

        imageModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


closeImage.addEventListener("click", () => {

    imageModal.classList.remove("show");

    document.body.style.overflow = "auto";

});


imageModal.addEventListener("click", (event) => {

    if (event.target === imageModal) {

        imageModal.classList.remove("show");

        document.body.style.overflow = "auto";

    }

});

/* =========================================
   SORPRESA FINAL - FELICES 4 MESES ❤️
========================================= */

const anniversaryButton =
    document.getElementById("anniversaryButton");

const anniversarySurprise =
    document.getElementById("anniversarySurprise");


anniversaryButton.addEventListener("click", () => {

    /* Mostrar la sorpresa */

    anniversarySurprise.classList.add("show");


    /* Ocultar el botón */

    anniversaryButton.style.display = "none";


    /* Crear lluvia de corazones */

    createHeartRain();


    /* Desplazarse suavemente hacia el mensaje */

    setTimeout(() => {

        anniversarySurprise.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 300);

});


/* =========================================
   FUNCIÓN PARA CREAR CORAZONES ❤️
========================================= */

function createHeartRain() {

    const heartInterval = setInterval(() => {

        const heart =
            document.createElement("div");


        heart.classList.add("falling-heart");


        heart.textContent =
            Math.random() > 0.25
                ? "❤️"
                : "💖";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.fontSize =
            Math.random() * 25 + 20 + "px";


        heart.style.animationDuration =
            Math.random() * 3 + 3 + "s";


        document.body.appendChild(heart);


        /* Eliminar corazón cuando termine */

        setTimeout(() => {

            heart.remove();

        }, 6500);


    }, 180);


    /* Detener lluvia después de 12 segundos */

    setTimeout(() => {

        clearInterval(heartInterval);

    }, 12000);

}