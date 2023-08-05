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

  const fetchQuestion = async () => {
    // construct url for api call
    const url = `http://jservice.io/api/random`
    // make api call
    const response = await fetch(url)
    // convert response into javascript object
    const data = await response.json()
    // update the state
    setQuestion(data)
}

  return (
    <div className="App">
      <h1>Our Jeapardy App</h1>
      <NewQuestion fetchQuestion={fetchQuestion}/>
      <Display question={question}/>
      <Points question={question}/>
      <Category question={question}/>
    </div>
  );
}

export default App;
