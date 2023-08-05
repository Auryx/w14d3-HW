function Answer(props) {

    console.log("Answer check")

    const question = props.question

    if (props.question) {
// props.question is currently undefined, since undefined is falsy, shouldn't the else statement trigger?
        return <div>
            <h2>Your Answer is: {props.question[0].answer}</h2>
        </div>

    } else {

        return <div>
            <h2>Your Question will be displayed here</h2>
        </div>

    }
}

export default Answer