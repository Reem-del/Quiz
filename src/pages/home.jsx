import 'animate.css'
import Login from '../components/login'

export default function Home() {

    return (
      <div className='flex md:flex-row animate__animated animate__zoomIn bg-gradient-to-r  from-indigo-500 to-indigo-200  w-full min-h-screen max-md:flex-col gap-3'>
        <div className='md:w-1/2 flex justify-center items-center max-md:w-full mt-9'>
        <Login />
        </div>
        <div className='w-1/2 '>
        <img src='one-removebg-preview.png' className='pt-16' />
        </div>
      </div>
    )
  }