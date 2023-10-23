// import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full absolute top-5 px-10 border-b-[1px] border-gray-200 pb-5">
        <h1 className="text-4xl text-teal-800 font-thin">Dashboard</h1>
        <div className="flex items-center gap-3">
            <img src="images/icon-facebook.svg" alt="facebook" className="w-[30px] bg-[orangered] p-2 rounded-lg hover:scale-[1.1] cursor-grabbing"/>
            <img src="images/icon-twitter.svg" alt="twitter" className="w-[30px] bg-teal-500 p-2 rounded-lg hover:scale-[1.1] cursor-grabbing"/>
            <img src="images/icon-instagram.svg" alt="instagram" className="w-[30px] bg-pink-600 p-2 rounded-lg hover:scale-[1.1] cursor-grabbing"/>
            <img src="images/icon-pinterest.svg" alt="pinterest" className="w-[30px] bg-teal-900 p-2 rounded-lg hover:scale-[1.1] cursor-grabbing"/>
        </div>
        <button className="px-3 py-2 bg-lime-500 border-[1px] border-lime-400s font-semibold rounded-md cursor-pointer hover:bg-lime-600 hover:text-white">Sign Out</button>
    </div>
  )
}

export default Header