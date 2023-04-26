export default{
    namespaced: true,
    state:()=>{
       return{
        todos: [
            { id: 1, content: '待办1', done: true },
            { id: 2, content: '待办2', done: false },
            { id: 3, content: '待办3', done: false },
          ],
       }
    },
    getters:{
        
        doneTodos:(state)=>{
            return state.todos.filter((todo) => todo.done)
          },
          getTodoById: (state) => {
            return (id) => {
              return state.todos.find((todo) => todo.id == id)
            }
          },
        

    }
}