export const reducer = (state, action) => {
    if(action.type === 'ADD_PERSON') {
        const newPeople = [...state.people, action.payload]
        return {...state, people: newPeople, showModal:true, modalContent: 'New person added', showDashboard: true};
    }
    if(action.type === 'INCOMPLETE') {
        return {...state, showModal:true, modalContent: 'Please enter correct info..'}
    }
    if(action.type === 'CLOSE_MODAL') {
        return {...state, showModal:false}
    }
    if(action.type === 'DELETE') {
        const newPeople = state.people.filter(person=>person.name !== action.payload)
        return {...state, people: newPeople, showModal:true, modalContent: 'Person is removed'};
    }
    if(action.type === 'DASHBOARD') {
        return {...state, showDashboard: !state.showDashboard};
    }
    return state;
}