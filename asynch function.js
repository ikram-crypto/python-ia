async function showData() {
    
    try {
      
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (response.ok){
        console.log(response.ok);
        console.log(response.status);
        let data = await response.json();
        console.log(data);
      }
    }
    catch (e) {
        console.log(`Error fetching Data From API Details : ${e.message}`);
    }  
  
} 
  