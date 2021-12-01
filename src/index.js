const init = () => {
  const inputForm = document.querySelector('form'); // Storing what we want to add an event listener to (the form)
//console.log(inputForm)
  inputForm.addEventListener("submit", (e) => {     // Adding event listener to our form
    e.preventDefault();              // Calling event object function that prevents form from refreshing when submitted (default behavior)
    // console.log(e)
    const input = e.target.children[1].value;      // Accessing value of user text input in the second child of the target of the event (the form)
    // const input = document.querySelector('input#searchByID').value;                   // Another way to get input the text value
    // console.log(input)
    fetch(`http://localhost:3000/movies/${input}`)     // fetching our data from emulated API/server, recieves response data (JSON) and parses it to produce a JavaScript object (data we can use)
    .then( (response) => response.json() )             // interpolated the user text input value in order to access that id's specific path and recieve the object we want
    .then( (data) => {                                 
            
            const title = document.querySelector('section#movieDetails h4')         // Storing the tags that we want to update the text of with the fetched data (title and summary of searched movie)
            const summary = document.querySelector('section#movieDetails p')
            
            title.innerText = data.title                                            // Changing the inner text of the tags with the recieved data
            summary.innerText = data.summary
    })

})

}

document.addEventListener('DOMContentLoaded', init);













// Add event listeners to capture form data and override a form's default behavior
// Fetch data based on what the user types into that form
// Display that data on the page