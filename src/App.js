import './App.css';
import { useState } from 'react';
import VideoScreen from './component/VideoScreen/VideoScreen';
import BottomTools from './component/BottomTools/BottomTools';

function App() {

  const [popup, setPopup]=useState(true);
  const [rightPopup, setRightPopup]=useState(false)


  return (
    <div className="app">
      <VideoScreen popup={popup} setPopup={setPopup} rightPopup={rightPopup} setRightPopup={setRightPopup} />
      <BottomTools rightPopup={rightPopup} setRightPopup={setRightPopup} />
    </div>
  );
}

export default App;
