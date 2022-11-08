import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import videoBG from './assets/video_bg.mp4'


function App() {
  return (
    <div>
      <video className='absolute top-0 left-0 w-full h-screen object-cover -z-10' src={videoBG} autoPlay loop muted />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
