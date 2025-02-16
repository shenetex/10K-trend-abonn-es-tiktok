// Charger les pseudos déjà inscrits
let pseudos = JSON.parse(localStorage.getItem("pseudos")) || [];
let photos = JSON.parse(localStorage.getItem("photos")) || [];

// Afficher la liste des pseudos
function afficherPseudos() {
    let liste = document.getElementById("listePseudos");
    liste.innerHTML = "";

    pseudos.forEach((pseudo, index) => {
        let li = document.createElement("li");
        let link = document.createElement("a");
        let img = document.createElement("img");

        link.href = `https://www.tiktok.com/@${pseudo}`;
        link.target = "_blank";
        link.innerText = `@${pseudo}`;

        img.src = photos[index] && photos[index].trim() !== "" 
                  ? photos[index] 
                  : "https://via.placeholder.com/30/CCCCCC/FFFFFF?text=IMG";  // Image par défaut

        li.appendChild(img);
        li.appendChild(link);
        liste.appendChild(li);
    });
}

// Ajouter un pseudo à la liste
function ajouterPseudo() {
    let pseudoInput = document.getElementById("pseudo").value.trim();
    let photoInput = document.getElementById("photo").value.trim();

    if (pseudoInput === "") {
        alert("really_just_nothing_ !");
        return;
    }

    pseudos.push(pseudoInput);
    photos.push(photoInput);

    // Sauvegarder les données
    localStorage.setItem("pseudos", JSON.stringify(pseudos));
    localStorage.setItem("photos", JSON.stringify(photos));

    afficherPseudos();
}

// Afficher les pseudos dès le chargement
afficherPseudos();
