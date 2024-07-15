import "./App.css";
import Greets from "./components/Greets";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const names = [
    {
      first: "Priyansh",
      second: "Sultania",
    },
    {
      first: "Utsav",
      second: "Sultania",
    },
    {
      first: "Pallavi",
      second: "Sultania",
    },
  ];
  return (
    <div className="App">
      <Greets name="Ansh" messageCount={100} isLoggedIn={false} />
      <Person firstName="Priyansh" secondName="Sultania" />
      <PersonList names={names} />
    </div>
  );
}

export default App;
