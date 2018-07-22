import {connect} from 'react-redux';
import {addTo, decTo, mulTo} from "../actions/addContainer";
import compoenter from "../compoents/container";

const mapStateToProps=(state,ownProps)=>{
    return {
        value:state[ownProps.index]
    }
}


const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        onIncrement:(index) => dispatch(addTo(index)),
        onDecrement:(index) => dispatch(decTo(index)),
        onMul:(index, multipler) => dispatch(mulTo(index,multipler)),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(compoenter)