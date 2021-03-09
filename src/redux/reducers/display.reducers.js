import { StaticRouter } from 'react-router';
import {ADD_TODO , BLANK} from './../action/display.action.js';

 const startState = {todo : [{id: 1, buah: "jeruk (starting state)"}] };


const Buah = (state = startState , action) => {

    switch(action.type){

        case ADD_TODO:

     
        // 1 2 4 5 .. 6

       // 0 1 2
       // 1 2 3

       // 0 1 2
       // 1 3 4

        action.data.id = (state.todo.length-1)+2

        
            return {
                todo : [...state.todo , action.data],
                
            }  
        
        case BLANK:

        
          alert("data kosong")    


        default:
            return state
    }

}

export default Buah;