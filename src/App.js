import beer from './assets/images/marcy.jpg';

function App() {
  return (
    <div>
      <h1>Hi!</h1>
      <p>I did a thing.</p>
      <p>Enjoy this nice, refreshing picture while I work on adding stuff.</p>
      <img src={beer} height="500px" alt="Beers on the mountain"></img>
    </div>
  );
}

export default App;
