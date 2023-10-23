import Modal from "./Modal";
import Header from "./Header";

const Main = ({people, closeModal, showModal, modalContent, deletePerson}) => {
    const person = people.map(person=>person)
    console.log(person);

  return (
    <main className=' overflow-y-scroll w-full h-screen flex justify-center items-start relative'>
        <Header />
        
        {showModal && <Modal modalContent={modalContent} closeModal={closeModal}/>}
        <div className='lg:w-[70%] w-[500px] mt-28'>
        {people && people.map(person => (
            <div key={person.name} className="mx-auto py-5 px-3 my-2 rounded-lg flex justify-between items-center bg-[rgba(0,0,0,0.1)] text-purple-950 font-semibold hover:scale-[1.02]">
                <div className="flex items-center gap-3 lg:w-[55%] w-[65%] border-r-[1px] border-[linen] pr-2">
                  <div className="w-[50px] h-[50px] shadow-md shadow-purple-500 border-[2px] border-purple-800 rounded-full overflow-hidden">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3>{person.name}</h3>
                    <div className="flex items-center gap-3 text-sm mt-2">
                      <h3 className="flex items-center gap-2 text-teal-950">
                          <span className="bg-white px-[5px] pb-[2px] text-[orangered] rounded-lg">Age</span>
                          {person.age}
                      </h3>
                      <h3 className="flex items-center gap-2 text-teal-950">
                          <span className="bg-white px-[5px] pb-[2px] text-[orangered] rounded-lg">Job</span>
                          {person.work}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div>
                  <span className="bg-white px-[8px] pb-[2px] text-teal-950 text-sm rounded-lg">Birthday</span>
                  <h3 className="text-[orangered] mt-2">{person.date}</h3>
                </div>
                
                <img src="images/icon-close.svg" alt="close" onClick={()=>deletePerson(person.name)} className="cursor-pointer" />
            </div>
        ))}
        </div>
    </main>
  )
}

export default Main