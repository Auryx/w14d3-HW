import './App.css';
import NewQuestion from './components/NewQuestion';
import Display from './components/Display';
import Category from './components/Category';
import Points from './components/Points';
import {useState} from 'react'

function App() {

  console.log("App check")

  const [question, setQuestion] = useState({
    question: ''
  })
  return (
    <div className="App">
      <h1>Our Jeapardy App</h1>
      <NewQuestion setQuestion={setQuestion}/>
      <Display question={question}/>
      <Points question={question}/>
      <Category question={question}/>
    </div>
  );
}

export default App;
