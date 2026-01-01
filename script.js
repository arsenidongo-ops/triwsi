function afficher(id) {
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

// Étape 1 → Questions
function versQuestions() {
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;

    if (nom === "" || email === "") {
        document.getElementById("error").textContent = "Remplis tous les champs";
        return;
    }

    afficher("loading");
    setTimeout(() => afficher("step2"), 15000);
}

// Étape 2 → Produits
function versProduits() {
    afficher("loading");
    setTimeout(() => afficher("step3"), 15000);
}

// Redirection WhatsApp (TON NUMÉRO EST ICI)
function whatsapp(produit) {
    let phone = "241077202343";
    let message = encodeURIComponent(
        "Bonjour, je suis intéressé par : " + produit
    );
    window.location.href = `https://wa.me/${phone}?text=${message}`;
}
