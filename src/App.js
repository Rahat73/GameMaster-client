import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import router from './Routes/Routes/Routes';
import videoBG from './assets/video_bg.mp4'


function App() {
  return (
    <div className='App'>
      <video className='fixed top-0 left-0 w-full h-screen object-cover -z-10' src={videoBG} autoPlay loop muted />
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
