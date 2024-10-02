fetch('https://icanhazdadjoke.com/slack')
  .then(data => data.json())
  .then(jokeData => {
    if (jokeData.attachments && jokeData.attachments.length > 0) {
      const jokeText = jokeData.attachments[0].text;
      const jokeElement = document.getElementById('jokeElement');
      
      jokeElement.innerHTML = jokeText;
    } else {
      console.error('No joke data found in attachments');
    }
  })
  .catch(error => console.error('Error fetching joke:', error));
