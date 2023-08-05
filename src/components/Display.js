function Display(props) {

    console.log("Display check")

    // const question = props.question

    if (props.question) {
// props.question is currently undefined, since undefined is falsy, shouldn't the else statement trigger?
        return <div>
            <h2>Your Answer is: {props.question[0].question}</h2>
        </div>

    } else {

        return <div>
            <h2>Your Answer will be displayed here</h2>
        </div>

    }
}

export default Display