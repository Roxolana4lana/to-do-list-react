import React, { Component } from 'react'


export default class Main extends Component {
    constructor(){
        super()
        this.state={
            tasks: []
        }
    }

    handleAdd = e => {
        e.preventDefault();
        this.setState((prevState) => ({
            tasks: [...prevState.tasks, { tasks: [] }],
        }));
    }
   
    handleChange = e => {
        let tasks=[...this.state.tasks]
        tasks[e.target.dataset.id] = e.target.value
        this.setState({
          tasks
        })
    } 

    handleRemove = index => {
        this.state.tasks.splice(index,1)
        this.setState({tasks:this.state.tasks})
    }

    handleClear = e => {
        this.setState({ tasks: [] })
    }
   
  render() { 
    return (
      <div className='Main'>
        <div className='mainButtons'>
                <h1>To do list</h1>
                <button className='myButton'onClick={this.handleAdd}>
                <i className="fas fa-plus "style={{fontSize:'2rem'}}></i></button>

                <button className='myButton' onClick={this.handleRemove}>
                <i className="fas fa-minus " style={{ fontSize: '2rem' }}></i></button>
                 
                <button className='myButton' onClick={this.handleClear}>
                <i className="fas fa-trash-alt " style={{ fontSize: '2rem' }}></i></button> 

                {this.state.tasks.map((task, index) => {
                    let i = index + 1 
                    return (
                        <div key={index}>
                            <label className='myLabel'>Task &#8470; {i}</label>
                            <input
                                type='text'
                                onChange={this.handleChange}
                                data-id={index}
                                className='myInput'/>
                        </div>
                    )
                })}
        </div>
      </div>
    )
  }
}
