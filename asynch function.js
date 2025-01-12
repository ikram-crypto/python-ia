async function fetchUserData() {
    const apiURL = "https://jsonplaceholder.typicode.com/users";
  
    try {
      // Récupération des données depuis l'API
      const response = await fetch(apiURL);
  
      // Afficher le statut et l'état de la réponse
      console.log(`Status: ${response.status}`);
      console.log(response.ok ? "Response is OK" : "Response is NOT OK");
  
      // Vérifier si la réponse est réussie (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Conversion des données en JSON
      const data = await response.json();
  
      // Retourner les données
      return data;
    } catch (error) {
      // Gestion des erreurs
      console.error("An error occurred while fetching data:", error.message);
      return null; // Retourner `null` en cas d'erreur
    }
  }
  
  // Appeler la fonction et afficher les résultats dans la console
  fetchUserData().then((data) => {
    if (data) {
      console.log("Fetched Data:", data);
    } else {
      console.log("No data fetched due to an error.");
    }
  });
  