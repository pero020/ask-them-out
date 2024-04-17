import Footer from '../Footer.tsx'
import { Outlet } from 'react-router-dom'
import AppHeader from '../AppHeader.tsx';

const AskLayout = () => {

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <AppHeader />
        <div className="flex flex-col flex-1 justify-center items-center">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}
export default AskLayout