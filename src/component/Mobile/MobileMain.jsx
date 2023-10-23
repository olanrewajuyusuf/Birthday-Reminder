import { FaWpforms } from 'react-icons/fa'
import MobileModal from './MobileModal';

const MobileMain = ({people, closeModal, showModal, modalContent, deletePerson, handleDashboard}) => {

  return (
    <main className='w-full px-8 pt-5 pb-10'>
        <div className="flex justify-between items-center">
            <div className="text-left font-bold text-xl text-purple-950 bg-white w-[120px] px-3 rounded-xl">
                <h2>Birthday</h2>
                <h2 className="text-purple-400 font-light mt-[-12px]">REMINDER</h2>
            </div>
            <FaWpforms className='text-4xl text-teal-950 cursor-pointer hover:border-[1px] border-teal-700' onClick={handleDashboard}/>
        </div>
        
        {showModal && <MobileModal modalContent={modalContent} closeModal={closeModal}/>}
        <div className='mt-10'>
        {people && people.map(person => (
            <div key={person.name} className="relative mx-auto py-5 px-3 my-2 rounded-lg flex items-center gap-5 bg-[rgba(0,0,0,0.1)] text-purple-950 font-semibold hover:scale-[1.02]">
                <div className="w-[100px] sm:w-[50%] border-r-[1px] border-[linen] pr-2">
                  <div className="w-[50px] h-[50px] mb-3 shadow-md shadow-purple-500 border-[2px] border-purple-800 rounded-full overflow-hidden">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3>{person.name}</h3>
                </div>
                <div className="flex flex-col items-start gap-3 text-sm mt-2">
                  <h3 className="flex items-center gap-2 text-teal-950">
                    <span className="bg-white px-[5px] pb-[2px] text-[orangered] rounded-lg">Age</span>
                    {person.age}
                  </h3>
                  <h3 className="flex items-center gap-2 text-teal-950">
                    <span className="bg-white px-[5px] pb-[2px] text-[orangered] rounded-lg">Job</span>
                    {person.work}
                  </h3>
                  <h3 className="flex items-center gap-2 text-teal-950">
                    <span className="bg-white px-[5px] pb-[2px] text-[orangered] rounded-lg">Birthday</span>
                    {person.date}
                  </h3>
                </div>
                    
                <img src="images/icon-close.svg" alt="close" onClick={()=>deletePerson(person.name)} className="cursor-pointer absolute top-3 right-3 w-4" />
            </div>
        ))}
        </div>
    </main>
  )
}

export default MobileMain