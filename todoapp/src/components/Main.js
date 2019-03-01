import React, { Component } from 'react'

export default class Main extends Component {
    constructor(){
        super()
        this.state={
            tasks:[]
        }
    }

    handleAdd =e =>{
        e.preventDefault();
        this.setState((prevState) => ({
            tasks: [...prevState.tasks, { tasks:[] }],
        }));
    }
    handleChange=e=>{
        this.setState({
          [e.target.name]:e.target.value  
        })
    } 
    handleRemove =index =>{
        this.state.tasks.splice(index,1)
        this.setState({tasks:this.state.tasks})
    }
    handleClear = e=>{
        this.setState({tasks:[]})
    }
  render() {
      
    return (
      <div className='Main'>
        <div className='mainButtons'>
                <h1>To do list</h1>
                <button onClick={this.handleAdd}><i className="fas fa-plus"></i></button>
                <button onClick={this.handleRemove}><i className="fas fa-minus"></i></button>
                <button onClick={this.handleClear}><i className="fas fa-trash-alt"></i></button>  
                {this.state.tasks.map((task,index)=>{
    
        return (
            <div key={index}>
                    <label>Tusk number {index}</label>
                    <input
                        type='text'
                        value={this.state.task}
                        onChange={this.handleChange}
                        name='task'
                        id={index}
                        data-id={index}
                        />
                </div>
        )
                })}
        
        </div>
      </div>
    )
  }
}
