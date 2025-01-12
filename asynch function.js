async function fetchUserData() {
    const apiURL = "https://jsonplaceholder.typicode.com/users";
  
    try {
      
      const response = await fetch(apiURL);
  
      
      console.log(`Status: ${response.status}`);
      console.log(response.ok ? "Response is OK" : "Response is NOT OK");
  
     
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
     
      const data = await response.json();
  
      
      return data;
    } catch (error) {
     
      console.error("An error occurred while fetching data:", error.message);
      return null;
    }
  }
  
  
  fetchUserData().then((data) => {
    if (data) {
      console.log("Fetched Data:", data);
    } else {
      console.log("No data fetched due to an error.");
    }
  });
  