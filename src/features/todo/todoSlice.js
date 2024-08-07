 import {createSlice, nanoid} from '@reduxjs/toolkit';

 const initialState={
    todos: [{id:1,text:'Hello world'}]
 }
 const AddToDo=(state,action)=>{
       const toDo={
        id:nanoid(),
        text: action.payload,
       }
       state.todos.push(toDo);
 }

 const RemoveToDo=(state,action)=>{
           state.todos=state.todos.filter((todo)=>{
            return (todo.id!==action.payload)})
 }
 const Updatetodo=(state,action)=>{
        const {id,text}=action.payload;
        const todo=state.todos.find(todo => todo.id === id);
        if(todo){
         todo.text=text;
        }
 }


        
export const toDoSlice=createSlice({
         name: 'todo',
         initialState,
         reducers:{
            addTodo: AddToDo,
            removeTodo: RemoveToDo,
            updatetodo:Updatetodo,
         }
 })

export const {addTodo,removeTodo,updatetodo}=toDoSlice.actions;
export default toDoSlice.reducer;