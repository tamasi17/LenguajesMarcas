
    const title = document.getElementById("nameTitle");
     title.addEventListener("click", function () {
    //  title.style.color = "blue";  esto cambiaria el color del h1 "nameTitle"
        alert("Bienvenidx, desde aquí puedes acceder a mi web o a mi Github. Muchas gracias por pasarte por aquí, have funnnnn");
    });



const leyenda = document.getElementById("leyenda");
const text = "Madrid 28043 © 2024";

let i = 0;
leyenda.textContent = ""; // Limpia el texto para empezar de cero

    function typeWriter() {
        if (i < text.length) {
        leyenda.textContent += text.charAt(i); // a textContent se va añadiendo lo que esta en text a medida que itera i
        i++;
        setTimeout(typeWriter, 70); // mas grande el numero, mas tiempo tarda
         }
      }

typeWriter();



const themeToggleButton = document.getElementById("themeToggle");
const body = document.body;

// Aplica el ultimo tema elegido cuando carga la pagina
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeToggleButton.textContent = "Modo Claro";
}

// Toggle theme and save preference
themeToggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeToggleButton.textContent = "🌞";
    } else {
        localStorage.setItem("theme", "light");
        themeToggleButton.textContent = "🌙";
    }
});