import { useRef } from "react";

function NewQuestion(props){
    console.log("NewQuestion check")
    const formRef = useRef(null)
    console.log(formRef)

    


    return <button onClick={props.fetchQuestion()}>Click Me</button>
}

export default NewQuestion