function NewQuestion(props){
    console.log("NewQuestion check")
    const fetchQuestion = async () => {
        console.log("fetchQuestion")
        // // make api call
        const response = await fetch(`http://jservice.io/api/random`)
        console.log(response)
        // // convert response into javascript object
        const data = await response.json()
        console.log(data)
        // // update the state
        props.setQuestion(data)
    }
    return <button onClick={fetchQuestion}>Click Me</button>
}

export default NewQuestion;