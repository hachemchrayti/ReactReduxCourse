//ETAPE 1 : import du createStore et initialisaliton du state
const { createStore } = Redux
const initialState = {
    todos: [],
    posts: []
}
//ETAPE 2 : Création du reducer (vide au début puis on le remplit avec les case action)
function myreducer(state = initialState, action)
{
    switch (action.type)
    {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        default:
            break;
    }
}
//ETAPE 3 : creation du redux Store
const store = createStore(myreducer)
//ETAPE 4 : Inscription à un store (à faire dans les components)
store.subscribe(() =>
{
    console.log("state updated")
    console.log(store.getState())
})
//ETAPE 5 : création des actions
const todoAction = {
    type: 'ADD_TODO',
    todo: 'Faire du sport'
}
//ETAPE 6 : dispatch des actions
store.dispatch(todoAction)



// const initialState = {
//     salary: 1000,
// }

// const reducer = (state = initialState, action) =>
// {
//     switch (action.type)
//     {
//         case "ADD":
//             state = {
//                 salary: state.salary += action.payload,
//             }
//             break;

//         default:
//             break;
//     }
// }

// const store = createStore(reducer);

// store.subscribe(() =>
// {
//     console.log('Update salary: ', store.getState());
// })

// store.dispatch({
//     type: "ADD",
//     payload: 2000,
// });
