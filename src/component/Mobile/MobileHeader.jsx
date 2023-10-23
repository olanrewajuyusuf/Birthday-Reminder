import { AiOutlineLogout } from 'react-icons/ai'

const MobileHeader = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-10 mt-10">
        <div className="flex items-center gap-3">
            <img src="images/icon-facebook.svg" alt="facebook" className="w-10 bg-[orangered] p-2 rounded-lg hover:scale-[1.1] cursor-grabbing"/>
            <img src="images/icon-twitter.svg" alt="twitter" className="w-10 bg-teal-500 p-2 rounded-lg hover:scale-[1.1] cursor-grabbing"/>
            <img src="images/icon-instagram.svg" alt="instagram" className="w-10 bg-pink-600 p-2 rounded-lg hover:scale-[1.1] cursor-grabbing"/>
            <img src="images/icon-pinterest.svg" alt="pinterest" className="w-10 bg-teal-900 p-2 rounded-lg hover:scale-[1.1] cursor-grabbing"/>
        </div>
        <button 
        className="flex items-center gap-2 px-10 py-2 bg-lime-500 text-teal-950 border-2 border-teal-800 font-semibold rounded-md cursor-pointer hover:bg-lime-600 hover:text-white"
        ><AiOutlineLogout className='text-xl'/>Sign Out</button>
    </div>
  )
}

export default MobileHeader