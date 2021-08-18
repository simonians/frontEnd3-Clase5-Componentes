import logo from './logo.svg';
import './App.css';
import List from './componentes';

const animalNames = ["Firulais", "Maya", "Pipo", "Pacha"]
const animals = [
  {
    edad:23,
    sexo: "Macho",
    raza: "Pastor Aleman",
    tam: "Grande"
  },
  {
    edad:23,
    sexo: "Hembra",
    raza: "Caniche",
    tam: "Grande"
  },
  {
    edad:23,
    sexo: "Macho",
    raza: "Pitbull",
    tam: "Grande"
  },
  {
    edad:23,
    sexo: "Macho",
    raza: "Dogo",
    tam: "Grande"
  },
  {
    edad:23,
    sexo: "Hembra",
    raza: "HotDog",
    tam: "Grande"
  }
]

function App() {
  return (
    <div className="App">
      <List labels={animalNames} animals={animals}/>
    </div>
  );
}

export default App;
