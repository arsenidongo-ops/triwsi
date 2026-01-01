const questions = [
    "Avez-vous plus de 18 ans ?",
    "Avez-vous lu les conditions ?",
    "Êtes-vous humain ?",
    "Acceptez-vous le traitement ?",
    "Utilisez-vous Internet souvent ?",
    "Êtes-vous d'accord avec les règles ?",
    "Avez-vous déjà attendu longtemps ?",
    "Aimez-vous remplir des formulaires ?",
    "Êtes-vous patient ?",
    "Faites-vous confiance aux sites ?",
    "Avez-vous un compte email ?",
    "Êtes-vous concentré ?",
    "Souhaitez-vous continuer ?",
    "Êtes-vous sûr ?",
    "Vraiment sûr ?",
    "Toujours sûr ?",
    "Encore sûr ?",
    "Dernière confirmation ?",
    "Vous confirmez ?",
    "Validation finale ?"
];

function goQuestions() {
    document.getElementById("inscription").classList.add("hidden");
    document.getElementById("questions").classList.remove("hidden");

    let container = document.getElementById("listeQuestions");
    container.innerHTML = "";

    questions.forEach((q, i) => {
        container.innerHTML += `
            <div class="question">
                ${i+1}. ${q}<br>
                <input type="radio" name="q${i}" required> Oui
                <input type="radio" name="q${i}"> Non
            </div>
        `;
    });
}

function valider() {
    document.getElementById("questions").classList.add("hidden");
    document.getElementById("loading1").classList.remove("hidden");

    startProgress("bar1", "percent1", 15000);

    setTimeout(() => {
        document.getElementById("loading1").classList.add("hidden");
        document.getElementById("loading2").classList.remove("hidden");
        startProgress("bar2", "percent2", 20000);
        playSound();
    }, 15000);

    setTimeout(() => {
        document.getElementById("loading2").classList.add("hidden");
        document.getElementById("final").classList.remove("hidden");
    }, 35000);
}

function startProgress(barId, percentId, duration) {
    let bar = document.getElementById(barId);
    let percent = document.getElementById(percentId);
    let start = 0;
    let step = 100 / (duration / 300);

    let interval = setInterval(() => {
        start += step;
        if (start >= 100) {
            start = 100;
            clearInterval(interval);
        }
        bar.style.width = start + "%";
        percent.innerText = Math.floor(start) + "%";
    }, 300);
}
function playSound() {
    document.getElementById("sound").play();
}