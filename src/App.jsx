import Check from "./Components/Check";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import List from "./Components/List";

const App = () => {
  return (
    <>
     <Header headerText='hej hej'/>
    <List animalArray={['horse', 'dog', 'cat']}/>
    <Counter/>
    <Check/>
    </>
  )
}

export default App;