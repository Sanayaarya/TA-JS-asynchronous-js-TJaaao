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

// add keyup event on input element
input.addEventListener('keyup' , handleChange)

// select image and button elements
const imgage = document.querySelector('.img-cat');
const button = document.querySelector('button');

// add click event listener on button
button.addEventListener('click', (e) => {
  let xhr = new XMLHttpRequest();

  // get a random cat image from an api
  xhr.open(
    'GET',
    'https://api.thecatapi.com/v1/images/search?limit=1&size=full'
  );

  // show this cat image in the ui
  xhr.onload = function () {
    let imageData = JSON.parse(xhr.response);  
    imgage.src = imageData[0].url;
  };

  // log the error message in case api call get filed
  xhr.onerror = function () {
    console.log('Something went wrong...');
  };
  
  xhr.send();
});


