//selects all the HTML elements we will require for the generator
const jokeText = document.querySelector('.joke-text');

const newJokeBtn = document.querySelector('.new-joke-btn');

const tweetBtn = document.querySelector('.tweet-btn');




//the button 'Here's a random one for ya!' is clickable
newJokeBtn.addEventListener('click', getJoke);
getJoke();

//define getJoke function
function getJoke(){
    //fetch the jokes using Dad Joke API
    fetch('https://icanhazdadjoke.com/' , {
        headers: {
            'Accept' : 'application/json'
        }
    }).then(function(response)
        {return response.json();}
    ).then(function(data){
        //replaces the 'Joke goes here..' text with the joke
        //extract the joke text
        const joke = data.joke;
        //replace
        jokeText.innerText = joke;

        //make the share this text work by creating link
        //const tweetLink = 'https://twitter.com/share?url=http://www.onlinecode.org/blog&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons';
        //set the link
        //tweetBtn.setAttribute('href' , tweetLink);
        
    }).catch(function(error){
        //if error occurrs
        jokeText.innerText = 'Oops, it seems we have exceeded the dad joke limit. Please reduce your laughter to continue :(';
        //we then remove the old link from the share button
        tweetBtn.removeAttribute('href');
        console.log(error);
    })

}
