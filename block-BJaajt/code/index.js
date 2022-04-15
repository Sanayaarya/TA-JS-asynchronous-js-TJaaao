const img = document.querySelector("img"); 
const name = document.querySelector("h3")
const working= document.querySelector("p")
const followers = document.querySelector(".followers")
const following = document.querySelector(".following")
const input = document.querySelector("input")

function displayUI (data){
  img.src = data.avatar_url;
  name.innerText = `name:${data.name}`;
  working.innerText = data.company;
  following.innerText = `Following: ${data.following}`;
  followers.innerText = `Followers:${data.followers}`;
};


function handleChange(event){
  console.log(event.keycode);
  if(event.keyCode === 13){
  var xhr = new XMLHttpRequest();
   xhr.open('GET',`https://api.github.com/users/${event.target.value}`);
   xhr.onload = function (){
       let userData = JSON.parse(xhr.response);
       console.log(userData);
       displayUI(userData);
   }
   xhr.onerror = function (){
        console.log ('something went wrong...')
   }
   xhr.send();
   event.target.value = "";
  }
}  

input.addEventListener('keyup' , handleChange)

// Random Cat

const imgage = document.querySelector('.img-cat');
const reload = document.querySelector('button');
reload.addEventListener('click', (e) => {
  console.log(e)
  let xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://api.thecatapi.com/v1/images/search?limit=1&size=full'
  );
  xhr.onload = function () {
    let imageData = JSON.parse(xhr.response);
    imgage.src = imageData[0].url;
  };
  xhr.onerror = function () {
    console.log('Something went wrong...');
  };
  xhr.send();
});


