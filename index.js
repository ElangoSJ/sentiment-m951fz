import Sentiment from 'sentiment';

const app = document.querySelector('#app');
const phrase = 'Cats are totally amazing!';

const sentiment = new Sentiment();
const result = sentiment.analyze(phrase);

app.innerHTML = `
phrase: "${phrase}" <br>
score: ${result.score} <br>
comparative: ${result.comparative} <br>
`;

console.log(result);
