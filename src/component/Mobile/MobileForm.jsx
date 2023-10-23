import { MdDns } from 'react-icons/md'
import MobileHeader from "./MobileHeader"

const MobileForm = ({person, handleChange, handleSubmit, handleDashboard}) => {

  return (
    <>
    <form className='w-full text-center px-8 py-5'>
        <div className="flex justify-between items-center">
            <div className="text-left font-bold text-xl text-purple-950 bg-white w-[120px] px-3 rounded-xl">
                <h2>Birthday</h2>
                <h2 className="text-purple-400 font-light mt-[-12px]">REMINDER</h2>
            </div>
            <MdDns className='text-4xl text-teal-950 cursor-pointer hover:border-[1px] border-teal-700' onClick={handleDashboard}/>
        </div>
        
        <p className="mt-16 mb-5 text-teal-900 font-semibold border-b-[1px] border-gray-200 pb-3">Add your loved ones to the lists of <span className="text-[orangered] text-lg font-thin">Birthday Reminder</span></p>
        <div className='flex justify-between items-center gap-2'>
            <label htmlFor="name" className='text-purple-900 font-semibold'>Name</label>
            <input 
            type="text" 
            name='name'
            value={person.name}
            onChange={handleChange}
            className='bg-white w-[70%] py-1 px-2 rounded-md shadow-sm shadow-purple-900 outline-none text-sm'
            />
        </div>
        <div className='mt-2 flex justify-between items-center gap-2'>
            <label htmlFor="age" className='text-purple-900 font-semibold'>Age</label>
            <input 
            type="number" 
            name='age'
            value={person.age}
            onChange={handleChange}
            className='bg-white w-[70%] py-1 px-2 rounded-md shadow-sm shadow-purple-900 outline-none text-sm'
            />
        </div>
        <div className='mt-2 flex justify-between items-center gap-2'>
            <label htmlFor="date" className='text-purple-900 font-semibold'>Birthday</label>
            <input 
            type="date" 
            name='date'
            value={person.work}
            onChange={handleChange}
            className='bg-white w-[70%] py-1 px-2 rounded-md shadow-sm shadow-purple-900 outline-none text-sm'
            />
        </div>
        <div className='mt-2 flex justify-between items-center gap-2'>
            <label htmlFor="work" className='text-purple-900 font-semibold'>Profession</label>
            <input 
            type="text" 
            name='work'
            value={person.work}
            onChange={handleChange}
            className='bg-white w-[70%] py-1 px-2 rounded-md shadow-sm shadow-purple-900 outline-none text-sm'
            />
        </div>
        <button 
        type="submit"
        onClick={handleSubmit}
        className="py-2 w-full bg-purple-950 text-white font-bold text-sm mt-3 rounded-md shadow-lg shadow-white hover:bg-purple-700"
        >
            Add Person
        </button>
    </form>
    <MobileHeader />
    </>
  )
}

export default MobileForm