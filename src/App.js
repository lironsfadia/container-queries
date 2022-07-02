import './App.css';
import logo from './assets/lightyear.jpeg';


function App() {
  return (
    <div className="card-container">
      <div className="buzz-card">
        <h1>lightyear</h1>
        <img src={logo} alt="My little unicorn" />
        <p>Buzz Lightyear is a fictional character in the Toy Story franchise created by Disney and Pixar mainly voiced by Tim Allen.He is a sentient toy action figure based on the in-universe film and television franchise Buzz Lightyear of Star Command, a "Space Ranger" superhero.</p>
        <a href="https://en.wikipedia.org/wiki/Buzz_Lightyear">Learn More</a>
      </div>
    </div>
  );
}

export default App;
