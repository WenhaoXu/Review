import React, { Component } from 'react';
export  default  class addCont extends Component{
    constructor (props){
        super(props);
        this.inputText=React.createRef();
    }

    mul=()=>{
        const mull=   this.inputText.current.value;
        const onMul=this.props.onMul;
        onMul(this.props.index,mull)
    }
    setTime=()=>{
        setTimeout(()=>this.props.onIncrement(this.props.index),1000)
    }
    render() {
        const { value, onIncrement, onDecrement,index } = this.props;
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={()=>onIncrement(index)}>
                    +
                </button>
                <button onClick={()=>onDecrement(index)}>
                    -
                </button>
                <input  type="text"  ref={this.inputText}></input>
                <button onClick={this.mul}>
                    *
                </button>

                <button type="text" onClick={this.setTime}>daly</button>
            </p >

        );
    }
}