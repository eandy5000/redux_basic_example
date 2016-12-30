export default function(state, action) {
    if(!state) {
        state = null
    }
    
    switch(action.type) {
        case 'BOOK_SELECTED':
        return action.payload
    }

    return state
}