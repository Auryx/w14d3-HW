function Category(props) {
    console.log("Category check")
    const question = props.question
//     if (props.question) {
// // props.question is currently undefined, since undefined is falsy, shouldn't the else statement trigger?
//         return <div>
//             <h2>Your Category is: {props.question[0].category.title}</h2>
//         </div>

//     } else {

        return <div>
            <h2>Your Category will be displayed here</h2>
        </div>

    // }
}

export default Category