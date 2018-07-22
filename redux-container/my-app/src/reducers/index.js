import { combineReducers } from 'redux'
export default (state = [0,0,0], action) => {
    switch (action.type){
        case "INCREMENT":
        {
            const newState=[...state]
            newState[action.index]++

            return newState;

        }

        case 'DECL':
        {
            const newState=[...state]
            newState[action.index]--

            return newState;
        }
        case 'MUL':
        {
            const newState = [...state]
            newState[action.index] *= action.mul
            return newState
        }

        case  'daly' : {
            let ne = [];
            for (let i = 0; i < state.length; i++) {
                ne.push(state[i])
            }
            ne[action.index]++;



            window.setTimeout(() => {
                return ne;
            }, 1000)

        }

        default:
            return state
    }
}
