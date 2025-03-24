const recommendationElement = document.getElementById("recommendation");
const genreButtons = document.querySelectorAll(".genre-button");

genreButtons.forEach(button => {
    button.addEventListener("click", () => {
        const age = parseInt(document.getElementById("age").value);
        const genre = button.getAttribute("data-genre");

        if (isNaN(age) || age <= 0) {
            recommendationElement.textContent = "Por favor, introduce una edad válida.";
            return;
        }

        let movie = "";

        switch (genre) {
            case "Drama":
                if (age < 13) movie = "Casablanca";
                else if (age < 16) movie = "The Shawshank Redemption";
                else movie = "Taxi Driver";
                break;
            case "Comedia":
                if (age < 13) movie = "Back to the Future";
                else if (age < 16) movie = "Ferris Bueller's Day Off";
                else movie = "The Big Lebowski";
                break;
            case "Musical":
                if (age < 13) movie = "La La Land";
                else if (age < 16) movie = "Les Misérables";
                else movie = "The Rocky Horror Picture Show";
                break;
            case "Crimen":
                if (age < 13) movie = "No hay opciones para esta edad.";
                else if (age < 16) movie = "El Secreto de sus Ojos";
                else movie = "The Godfather";
                break;
            default:
                movie = "Género no válido.";
        }

        recommendationElement.textContent = movie;
    });
});
