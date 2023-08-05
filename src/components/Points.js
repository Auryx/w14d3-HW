import {useState} from 'react'
function Points(props) {
    console.log("points check")
    let [points, setPoints] = useState(0)
    function increment(){
        setPoints(points+100)
    }
    function decrement(){
        setPoints(points-100)
    }

    return <div>
        <h1>Current Points: {points}</h1>
            <div>
                <button onClick={increment}> Increase Points </button>
                <button onClick={decrement}> Remove Points </button>
            </div>
        </div>
}

export default Points