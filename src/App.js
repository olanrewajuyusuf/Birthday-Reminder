import { reducer } from "./reducer";
import { useReducer, useState } from "react";
import { data } from "./data";
import Form from "./component/DeskTab/Form";
import Main from "./component/DeskTab/Main";
import MobileForm from "./component/Mobile/MobileForm";
import MobileMain from "./component/Mobile/MobileMain";

const defaultState = {
  people: [...data],
  showModal: false,
  modalContent: '',
  showDashboard: false
}

const App = () => {
  const [person, setPerson] = useState({name: '', age: '', work: '', date: ''})
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person,[name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let {name, age, work, date} = person;
    if(name && age && work) {
        const newPerson = {id: age, name, age, work, date, image: 'images/avatar.png'};
        dispatch({type: "ADD_PERSON", payload: newPerson});
        setPerson({name:'', age:'', work:'', date: ''});
    } else {
        dispatch({type: 'INCOMPLETE'})
    }
  }

  const closeModal = () => {
      dispatch({type: 'CLOSE_MODAL'})
  }

  const deletePerson = (name) => {
    dispatch({ type: 'DELETE', payload: name })
  }

  const handleDashboard = () => {
    dispatch({ type: 'DASHBOARD'})
  }

  return (
    <>
    <div className="md:flex items-start justify-start hidden">
      <Form person={person} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Main people={state.people} closeModal={closeModal} deletePerson={deletePerson} showModal={state.showModal} modalContent={state.modalContent}/>
    </div>
    <div className="md:hidden">
      {!state.showDashboard && <MobileForm person={person} handleChange={handleChange} handleSubmit={handleSubmit} handleDashboard={handleDashboard}/>}
      {state.showDashboard && <MobileMain people={state.people} closeModal={closeModal} deletePerson={deletePerson} showModal={state.showModal} modalContent={state.modalContent} handleDashboard={handleDashboard}/>}
    </div>
    </>
  )
}

export default App;
