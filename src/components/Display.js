import React , {useState} from 'react'
import {Form , Button } from 'react-bootstrap'
import {connect , useSelector , useDispatch} from 'react-redux'
import {addTodo} from './../redux/action/display.action.js'


function Display(props) {

    const [val, setVal] = useState("")

    function track (param){
        setVal (param.target.value)
    }

    function read (param){
        alert("asd")
    }




    const dispatch = useDispatch()
    const todo = useSelector((param) => param.todo)


    console.log("ini todo" ,todo)


    return (
        <div>
            
            <Form>
                <Form.Group>
                  <Form.Control onChange={track} />
                  <Button variant="primary" onClick={() => dispatch(addTodo(val)) }   >Submit</Button>
                </Form.Group>
            </Form>

             <h1> Print Data :</h1>


             { todo.map( (items , index) => {
                   
                   return <h5 key={index}>{items.buah}</h5>

                }) }

        </div>
    )
}

// const mapStateToProps = (props) => {
//     console.log("dari mstp " ,props)
//     return {
//         todo: props
//     }
    
// }

// const  mapDispatchToProps = (dispatch) => {

//     return {
//         addTodo : (val) => dispatch(addTodo(val)),
//     }

// }


// export default connect(mapStateToProps , mapDispatchToProps) (Display);

export default Display;
