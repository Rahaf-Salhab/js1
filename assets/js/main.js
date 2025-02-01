 

 
async function getUsers (){
   const response =  await fetch(`https://jsonplaceholder.typicode.com/users`);
   const users = await response.json();
   const result = users.map( function(user){
return `
  <div class="user">
   <h2>${user.id}</h2>
  <h2>${user.name}</h2>
  <p>${user.username}</p>
  <p>${user.email}</p>
  <p>${user.address.street}</p>
  <p>${user.address.suite}</p>
  <p>${user.address.city}</p>
  <p>${user.address.zipcode}</p>
  <p>${user.address.geo.lat}</p>
  <p>${user.address.geo.lng}</p>
  <p>${user.phone}</p>
  <p>${user.website}</p>
  <p>${user.company.name}</p>
  <p>${user.company.catchPhrase}</p>
  <p>${user.company.bs}</p>

  </div>
`
   }).join('');

document.querySelector(".users").innerHTML = result;
  }
      getUsers();
  

