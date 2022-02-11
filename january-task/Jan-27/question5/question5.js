//Implementation of fetchData by using async method
const fetchData = async() => {
    
    const res = await fetch("https://retoolapi.dev/BUCPSc/posts");
    const country = await res.json();
    
    console.log(country);
};
//calling the fetchData method
fetchData();