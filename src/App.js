import React, { Component } from 'react';
import './App.css';
import {Paragraph} from './paragraph';

class App extends Component {
  
  /*
    Contrutor 
  */ 
  constructor(props){
    super(props)
    /**
     * State e props são as caracteristicas 
     * mais importantes do react
     */
    this.state = {
      name: "fiap",
      data: "26/06/2019",
      number:{ prop: 2 }
    }
    //Correto, uma forma de fazer
    // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
    this.updateState = this.updateState.bind(this);
    //this.handleSubmit =this.handleSubmit.bind(this);
   // this.handleChange =this.handleChange.bind(this);
  }

  updateState(){
    this.setState({name:"fullstack"});
  }

  handleSubmit(){

  }
/*
  handleChange(event){
    this.setState({name:event.target.value});
  }*/
  render() {
    return (
      <form className="App" style={{paddingTop:'10px' }} onSubmit={this.handleSubmit}>
        <div className="App" style={{ paddingTop: '10px' }}>
          <input type='text' value={this.state.name} />
          <button onClick={this.updateState} type="button">
            {this.state.name}
          </button>
          <h1 id='texto'>{this.state.name}</h1>
          <Paragraph variavel={this.state.name}/>
        </div>
      </form>
    )
  }
}
export default App;