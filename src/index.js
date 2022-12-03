const init = () => {
  

const inputForm = document.querySelector('form');

inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
   // display the value of the input in the console

   const input = document.querySelector('input#searchByID');

   console.log(input.value);
   //using fetch request
   fetch(`http://localhost:3000/movies/${input.value}`)
   .then(response => response.json())
   .then(data => {
    //replace title(h4) and summary(p)
    const title = document.querySelector('section#movieDetails h4');
    const summary = document.querySelector('section#movieDetails p');

    //assigning new values to h4 and p

    title.innerText = data.title;
    summary.innerText = data.summary;

    // console.log(data);

   });
 
    
});
}
document.addEventListener('DOMContentLoaded', init);