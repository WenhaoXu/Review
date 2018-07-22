
import React, { Component } from 'react';

export default class  container extends  Component{
     constructor (props) {
         super(props)
         this.state={
             value:0
         }
     }
    add=()=>{
         this.setState({
             value:this.state.value+1
         })
        this.props.func(1);
    }

    del=()=>{
        this.setState({
            value:this.state.value-1
        })
        this.props.func(-1)
    }
    render(){

        return (
            <div>
                <button onClick={this.add}>+</button>
                <button onClick={this.del}>-</button>
                <span>containAdd {this.state.value}</span>
            </div>
        );



    }

}