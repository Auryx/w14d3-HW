import './App.css';
import NewQuestion from './components/NewQuestions';
import Display from './components/Display';
import Answer from './components/Answer';
import Category from './components/Category';
import Points from './components/Points';
import {useState} from 'react'

function App() {

  console.log("App check")

  const [question, setQuestion] = useState({
    question: ''
  })
  console.log(question)
  return (
    <div className="App">
      <h1>Our Jeapardy App</h1>
      <NewQuestion setQuestion={setQuestion}/>
      <Points/>
      <Category question={question}/>
      <Display question={question}/>
      <Answer question={question}/>
    </div>
  );
}

export default App;
