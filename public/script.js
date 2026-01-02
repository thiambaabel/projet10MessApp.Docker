const form = document.getElementById('messageForm'); // recupere le formulaire
const list = document.getElementById('messageList');  // recupere la liste des messages

async function loadMessages() {
    const res = await fetch('/api/messages'); // recupere les mess avec la méthode fetch de js
    const data = await res.json();             // recupere les données en json
    list.innerHTML = '';    // vider la liste


    // affichage du message
    data.forEach((msg) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${msg.pseudo}</strong> (${msg.date})<br> ${msg.message}`;
        list.appendChild(li);
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const pseudo = form.pseudo.value.trim();
    const message = form.message.value.trim();

    const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pseudo, message }),
    });

    if (res.ok) {
        form.reset();
        loadMessages();
    } else {
        alert("Erreur lors de l'envoi du message.");
    }
});

loadMessages();
