import React, { Component } from 'react';
import  Container from  './container'

export default class  containerGroup extends  Component{

    constructor (props) {
        super(props)
        this.state={
            summary: 0,
        }
    }
    Sum=(value)=>{

      this.setState(
          {
              summary:this.state.summary+value
          }
      )

    }
    render(){
        return (
            <div>
                <Container  func={this.Sum}/>
                <Container func={this.Sum}/>
                <Container func={this.Sum}/>
                <span>Summary:{this.state.summary}</span>
            </div>

    )
    }





}