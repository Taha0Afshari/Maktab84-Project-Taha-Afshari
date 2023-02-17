import { Authscreen } from './pages';
import { ToastContainer } from 'react-toastify';
import { Footer } from './layout/footer/index';
import { Header } from './layout/header/index';
import { Productcard } from './components';

function App() {

  return (
    <>
    <Header/>
      <div className='App'>
        <ToastContainer/>
        <Authscreen></Authscreen>
      <Productcard/>
      </div>
      <Footer/>
    </>
  )
}

export default App
