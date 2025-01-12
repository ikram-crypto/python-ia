// La bibliothèque avec des livres
// La bibliothèque avec des livres
let library = [
  { title: "Livre A", isAvailable: true },
  { title: "Livre B", isAvailable: true },
  { title: "Livre C", isAvailable: true },
];

// Fonction pour afficher les livres disponibles
function viewBooks() {
  console.log("Livres disponibles dans la bibliothèque :");
  for (let i = 0; i < library.length; i++) {
    if (library[i].isAvailable) {
      console.log(`- ${library[i].title}`);
    }
  }
}

// Fonction pour emprunter un livre
function borrowBook(bookTitle) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let found = false; // On utilise une variable pour éviter array methods
      for (let i = 0; i < library.length; i++) {
        if (library[i].title === bookTitle) {
          found = true;
          if (library[i].isAvailable) {
            library[i].isAvailable = false;
            resolve(`${bookTitle} a été emprunté avec succès.`);
          } else {
            reject(new Error(`${bookTitle} n'est pas disponible.`));
          }
          break;
        }
      }
      if (!found) {
        reject(new Error(`${bookTitle} n'existe pas dans la bibliothèque.`));
      }
    }, 1000); // Simule une tâche asynchrone avec un délai
  });
}

// Fonction pour rendre un livre
function returnBook(bookTitle) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let found = false;
      for (let i = 0; i < library.length; i++) {
        if (library[i].title === bookTitle) {
          found = true;
          if (!library[i].isAvailable) {
            library[i].isAvailable = true;
            resolve(`${bookTitle} a été rendu avec succès.`);
          } else {
            reject(new Error(`${bookTitle} est déjà disponible.`));
          }
          break;
        }
      }
      if (!found) {
        reject(new Error(`${bookTitle} n'existe pas dans la bibliothèque.`));
      }
    }, 1000); // Simule une tâche asynchrone avec un délai
  });
}

// Exemple d'utilisation
viewBooks();

borrowBook("Livre A")
  .then((message) => {
    console.log(message);
    viewBooks(); // Vérifie la liste des livres après l'emprunt
    return returnBook("Livre A"); // Rend le livre
  })
  .then((message) => {
    console.log(message);
    viewBooks(); // Vérifie la liste des livres après le retour
  })
  .catch((error) => {
    console.error("Erreur :", error.message);
  });
