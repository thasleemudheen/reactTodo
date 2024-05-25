import React, { Component } from 'react'
import "./TodoApp.css"
 class TodoApp extends Component {
       state={
        input:'',
        items:[]
       }
    handleChange=(event)=>{
        this.setState({
            input:event.target.value
        })
    }

    storeItem=(event)=>{
        event.preventDefault()
          const {input}=this.state
        //   const allItems=this.state.items
          
        //   allItems.push(input)

          this.setState({
            items:[...this.state.items,input],
            input:""
          })
          
    }
    delteItem=(key)=>{
        //    const allItems=this.state.items
        //    allItems.splice(key,1)

           this.setState({
            items:this.state.items.filter((data,index)=>{
                return index!==key
            })
           })
    }

  render() {
    const {input,items}=this.state
    return (
      <div className='todo-container'>
       <form className='input-section' onSubmit={this.storeItem} >
       <h1>Todo App</h1>

        <input type='text' value={input} onChange={this.handleChange} placeholder='enter items ....' />
       </form >
       <ul>
        {items.map((value,index)=>(
            <li key={index}>{value}<i className="fa fa-trash" aria-hidden="true" onClick={()=>this.delteItem(index)} ></i> </li>
        ))}
       </ul>
      </div>
    )
  }
}
export default TodoApp