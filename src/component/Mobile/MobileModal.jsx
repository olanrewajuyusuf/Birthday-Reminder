import { useEffect } from "react"

const MobileModal = ({modalContent, closeModal}) => {

    useEffect(() => {
        setTimeout(()=>{
            closeModal();
        }, 3000)
    }, [closeModal])

  return (
    <div 
    className="absolute top-[20%] left-[50%] -translate-x-[50%] flex justify-center items-center text-2xl text-center p-5 mt-5 w-[300px] h-[200px] bg-white rounded-xl font-semibold z-10"
    >{modalContent}</div>
  )
}

export default MobileModal