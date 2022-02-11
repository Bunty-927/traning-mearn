async function loadJson(url) { // (1)
    var response = await fetch(url); // (2)
        console.log(response.status);
        try{
            if (response.status == 200) {
                console.log("Success")
                return response.json;
        }
    }catch(error){
        throw new Error(response.status);
    }
  }
  
  loadJson("https://reqres.in/api/products")
    .catch(alert); // Error: 404 (4)