import Sidebar from "./components/sidebar";
import Display from './components/Display'
import Player from "./components/Player";

function App() {
  return (
    <div className='h-screen bg-black'>
      <div className="h-[90%] flex">
        <Sidebar />
        <div>
          <Display />
        </div>
      </div>
      <Player />
    </div>
  );
}

export default App
