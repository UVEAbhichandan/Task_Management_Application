const initialState = {
    editTask: undefined,
    tasks: [],
};

const myReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD':
            return {...state, tasks: action.payload};
        case 'EDIT_OR_DELETE':
              return {...state, editTask : action.payload.editTask, tasks: action.payload.tasks};
        default :
            return {...state, tasks: action.payload}
    }
};

export default myReducer;