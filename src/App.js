import { useEffect, useRef, useState } from "react";

function App() {
  const modelRef = useRef();
  const audio = new Audio("/jingle.mp3");
  const [showArButton, setShowArbutton] = useState(false);
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.addEventListener("load", () => {
        setShowArbutton(true);
      });
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">slon</header>
      <model-viewer
        id="modelViewer"
        src="/output.glb"
        ios-src="/slon.usdz"
        camera-controls
        ar
        ar-modes="webxr"
        ref={(ref) => {
          modelRef.current = ref;
        }}
      ></model-viewer>
      {showArButton && (
        <button
          style={{
            color: "yellow",
            backgroundColor: "blue",
            border: "none",
            outline: "none",
            height: "100px",
            width: "300px",
            fontSize: "24px",
          }}
          onClick={() => {
            modelRef.current.activateAR();
            setTimeout(() => {
              modelRef.current.play();
              audio.play();
            }, 3000);
          }}
        >
          Pusti slona u ples
        </button>
      )}
    </div>
  );
}

export default App;
