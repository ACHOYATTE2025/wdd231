const alepe = [
  {
    "name": "Full Bush and Tradition Day Tour in Alépé",
    "address": "Alépé Region, Akyé Country",
    "cost": "Price on request",
    "description": "Embark on a full-day adventure through the Akyé country, visiting plantations, exploring traditional villages, witnessing captivating dance performances by local girls, and ending with a serene canoe ride on the Comoé River.",
    "photo_url": "./images/alepe_1.webp"
  },
  {
    "name": "Explore Cultural Village in Alépé Region",
    "address": "Danguira Village, Alépé Region",
    "cost": "Varies by activity",
    "description": "Immerse yourself in local culture by visiting Danguira and nearby villages, engaging with artisans, participating in crafts, learning daily life, exploring customs, and understanding traditions of the Akyé people in detail.",
    "photo_url": "./images/alepe_2.webp"
  },
  {
    "name": "Guided Rubber and Cocoa Plantation Tours",
    "address": "Various plantations in Alépé Region",
    "cost": "Price on request",
    "description": "Take guided tours through expansive rubber and cocoa plantations, learn cultivation and processing, discover their economic importance, observe plantation techniques, meet local workers, and understand agricultural life in Alépé region fully.",
    "photo_url": "./images/alepe_3.webp"
  },
  {
    "name": "Canoe Ride Along Comoé River Today",
    "address": "Comoé River, Alépé",
    "cost": "Included in the Bush and Tradition Day Tour",
    "description": "Experience the tranquil beauty of the Comoé River on a canoe ride, glide through lush landscapes, enjoy local wildlife, explore hidden river areas, relax on peaceful waters, and witness natural surroundings in a unique way.",
    "photo_url": "./images/alepe_4.webp"
  },
  {
    "name": "Amazing Tasting Local Cuisine in Alépé Town",
    "address": "Local restaurants (Maquis) in Alépé",
    "cost": "Affordable",
    "description": "Savor traditional Ivorian dishes such as attieke, grilled fish, placali, and other specialties at local eateries, enjoy flavors, meet chefs, observe cooking methods, and taste the authentic cuisine of Alépé region in each bite.",
    "photo_url": "./images/alepe_5.webp"
  },
  {
    "name": "Join Traditional Craft Workshops Today Here",
    "address": "Cultural centers in Alépé",
    "cost": "Varies by workshop",
    "description": "Participate in workshops teaching traditional crafts including bead-making, weaving, pottery, create unique souvenirs, interact with artisans, understand crafting techniques, experience local art, and appreciate cultural heritage during engaging sessions.",
    "photo_url": "./images/alepe_6.webp"
  },
  {
    "name": "Observe Wildlife in Local Nature Reserves",
    "address": "Nearby nature reserves in Alépé",
    "cost": "Varies by reserve",
    "description": "Explore nearby nature reserves, observe wildlife including birds, monkeys, and other native species, learn about habitats, engage in guided tours, photograph animals, enjoy forest scenery, and appreciate Alépé’s diverse natural environment fully.",
    "photo_url": "./images/alepe_7.webp"
  },
  {
    "name": "Participate Community Festivals and Events Today",
    "address": "Various locations in Alépé",
    "cost": "Free to attend",
    "description": "Time your visit to coincide with local festivals, enjoy music, traditional dances, community celebrations, meet residents, participate in events, witness colorful costumes, understand cultural significance, and experience the vibrant spirit of Alépé fully.",
    "photo_url": "./images/alepe_8.webp"
  }
]


// ✅ Fonction d'affichage des cartes
function afficherCartes() {
  const container = document.querySelector('.contained');
  container.innerHTML = '';

  alepe.forEach((place) => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
     
      <figure><div><img src="${place.photo_url}" alt="${place.name}" loading="lazy"></div></figure>
      <div><h2>${place.name}</h2></div>
      <button>Learn more</button>
    `;

    // Ouverture du modal
    card.querySelector('button').addEventListener('click', () => {
      ModalShow(place);
    });

    container.appendChild(card);
  });
}

// ✅ Fonction pour ouvrir le modal
function ModalShow(place) {
  const modal = document.getElementById('modal');
  document.getElementById('modal-title').textContent = place.name;
  document.getElementById('modal-text').innerHTML = `
    <p>${place.description}</p>
    <p><strong>Address:</strong> ${place.address}</p>
    <p><strong>Cost:</strong> ${place.cost}</p>
  `;
  document.getElementById('modal-image').src = place.photo_url;
  document.getElementById('modal-image').alt = place.name;
  modal.style.display = 'flex';
}

// ✅ Fonction pour fermer le modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// ✅ Fermer en cliquant à l’extérieur
window.addEventListener('click', (event) => {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
});


// ✅ Création dynamique du contenu du modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");

  // Crée la div principale du contenu
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // Bouton de fermeture
  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close");
  closeBtn.innerHTML = "&times;";
  closeBtn.addEventListener("click", closeModal);

  // Éléments internes du modal
  const title = document.createElement("h2");
  title.id = "modal-title";

  const img = document.createElement("img");
  img.id = "modal-image";

  const text = document.createElement("p");
  text.id = "modal-text";

  // Assemble tous les éléments dans le modal
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(title);
  modalContent.appendChild(img);
  modalContent.appendChild(text);

  modal.appendChild(modalContent);
});


// ✅ Attendre le chargement du DOM avant exécution
document.addEventListener('DOMContentLoaded', afficherCartes);



// ✅ Gestion du message de visite dans un modal

document.addEventListener("DOMContentLoaded", () => {
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();
  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const text = document.getElementById("modal-text");
  const img = document.getElementById("modal-image");

  let message = "";

  if (!lastVisit) {
    // Première visite
    message = "Welcome! Let us know if you have any questions.";
    title.textContent = "👋 Welcome to Alépé Chamber of Commerce!";
  } else {
    // Calcul du nombre de jours depuis la dernière visite
    const difference = now - Number(lastVisit);
    const daysBetween = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (daysBetween < 1) {
      message = "Back so soon! Awesome!";
      title.textContent = "😎 Welcome back!";
    } else if (daysBetween === 1) {
      message = "You last visited 1 day ago.";
      title.textContent = "👋 Good to see you again!";
    } else {
      message = `You last visited ${daysBetween} days ago.`;
      title.textContent = "👋 Welcome back!";
    }
  }

  // Met à jour le texte et affiche le modal
  text.textContent = message;
  img.src = "images/chamberlogo.png";
  img.alt = "Chamber logo";

  modal.style.display = "flex"; // ouverture automatique

  // Enregistre la date de visite actuelle
  localStorage.setItem("lastVisit", now);
});
