export default function(state, action) {
    if(!state){
        state = null
    }

    switch(action.type) {
        case 'SELECT_ITEM':
        return action.payload
    }

    return state
}