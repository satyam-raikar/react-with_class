import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem

// import React from "react"

// export default class TodoItem extends React.Component{
// render(props){
// return(

// <div>
// <input type = "checkbox" />
// <p>{props.task}</p>
// </div>

// )

// }



// }