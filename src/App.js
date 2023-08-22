import "./index.css";
import Tab from "./components/Tab";

function App() {
  return (
    <div className="App">
      <Tab colorOne="pink" colorTwo="yellow" title="SEOUL" text="1" />
      <Tab colorOne="green" colorTwo="silver" title="LONDON" text="2" />
      <Tab colorOne="purple" colorTwo="blue" title="PARIS" text="3" />
      <Tab colorOne="brown" colorTwo="beige" title="RIO" text="4" />
      <Tab colorOne="teal" colorTwo="yellow" title="TOKYO" text="5" />
    </div>
  );
}

export default App;
