import Check from "./Components/Check";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import List from "./Components/List";
import Radio from "./Components/Radio";

const App = () => {
  return (
    <>
     <Header headerText='hej hej'/>
    <List animalArray={['horse', 'dog', 'cat']}/>
    <Counter/>
    <Check/>
    <Radio/>
    </>
  )
}

export default App;