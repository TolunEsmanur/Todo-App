import React from 'react'
import { ListGroup } from 'react-bootstrap'

const TodoList = ({todos,setTodos}) => {

    const deleteTodo = (id) =>{
        const newTodos = todos.filter(todo=>todo.id !==id)
        setTodos(newTodos)
    }

  return (
    <div>
        <h2 className='text-center text-danger'>Todos</h2>
        <ListGroup className='w-50 d-flex mx-auto'>

        {todos.map((todo)=>(
                <ListGroup.Item variant="danger" className='m-2 text-capitalize rounded-3 d-flex justify-content-between'> <span>{todo.text}</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="brown"
                role="button"
                onClick={()=>deleteTodo(todo.id)}
                className="bi bi-trash-fill"
                viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                </svg>
                </ListGroup.Item> 
            ))
        }
        </ListGroup>
    </div>
  )
}

export default TodoList
