export const ADD_TODO = "ADD_TODO";
export const BLANK = "BLANK";

export const addTodo = (data) => {

   if(data  === "")
      return {
        type: BLANK
       
      }  
      
    console.log(data)

    return {
        type: ADD_TODO,
        data : {id : 1 , buah : data}
    }
}
