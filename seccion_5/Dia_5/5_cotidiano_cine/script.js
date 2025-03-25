const recommendationElement = document.getElementById("recommendation");
const genreButtons = document.querySelectorAll(".genre-button");

genreButtons.forEach(button => {
    button.addEventListener("click", () => {
        const edad = parseInt(document.getElementById("edad").value);
        const genre = button.getAttribute("data-genre");

        if (isNaN(edad) || edad <= 0) {
            recommendationElement.textContent = "Por favor, introduce una edad válida.";
            return;
        }

        let movie = "";
        switch (genre) {
            case "Drama":
                if (edad < 13) movie = "Casablanca";
                else if (edad < 16) movie = "The Shawshank Redemption";
                else movie = "Taxi Driver";
                break;
            case "Comedia":
                if (edad < 13) movie = "Back to the Future";
                else if (edad < 16) movie = "The Truman Show ";
                else movie = "The Wolf of Wall Street ";
                break;
            case "Musical":
                if (edad < 13) movie = "La La Land";
                else if (edad < 16) movie = "Les Misérables";
                else movie = "The Rocky Horror Picture Show";
                break;
            case "Crimen":
                if (edad < 13) movie = "No hay opciones para esta edad.";
                else if (edad < 16) movie = "El Secreto de sus Ojos";
                else movie = "The Godfather";
                break;
            default:
                movie = "Género no válido.";
        }
       
        recommendationElement.textContent = movie;
    });
});
