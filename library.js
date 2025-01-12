
let library = [
  { title: "Livre A", isAvailable: true },
  { title: "Livre B", isAvailable: true },
  { title: "Livre C", isAvailable: true },
];


function viewBooks() {
  console.log("Livres disponibles dans la bibliothèque :");
  for (let i = 0; i < library.length; i++) {
    if (library[i].isAvailable) {
      console.log(`- ${library[i].title}`);
    }
  }
}


function borrowBook(bookTitle) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let found = false; 
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
    }, 1000); 
  });
}

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
    }, 2500); 
  });
}


viewBooks();

borrowBook("Livre A")
  .then((message) => {
    console.log(message);
    viewBooks(); 
    return returnBook("Livre A");
  })
  .then((message) => {
    console.log(message);
    viewBooks(); 
  })
  .catch((error) => {
    console.error("Erreur :", error.message);
  });
