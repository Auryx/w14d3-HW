import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
function Answer(props) {

    console.log("Answer check")

    const question = props.question
    let clicked = false
    const clickWatcher = () => {
        clicked = true
        console.log(clicked)
    }
    if (clicked) {
        return <div class='answer'onClick={clickWatcher}><h2>Your Question is: {question[0].answer}</h2></div>
    }else{
        return <div class='answer' onClick={clickWatcher}><h2>Click me to reveal your Question!</h2></div>
    }
}

export default Answer