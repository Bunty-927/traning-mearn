function* fetchUsers(){
    yield fetch("https://reqres.in/api/products")
        .then(resp => resp.json())
        .then(users =>{
            return users;
        });
}
const userID = fetchUsers();
userID.next().value.then(resp => console.log(resp));