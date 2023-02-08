import React, { useEffect } from "react";
import HiddenMessage from "./HiddenMessage";

function App() {
  const fetching = async () => {
    try {
      await fetch('https://assignments.reaktor.com/birdnest/drones', {
        method: "GET",
        mode: "no-cors",
      }).then(data => {
        console.log(data)
        return data.json()
      }).then(res => {
        console.log(res)
      })

    } catch (error) {
      console.log('error')
      console.log(error)
    }
  }

  useEffect(() => {
  },)

  return (
    <div>
      <h1>
        testing
      </h1>
      <HiddenMessage children={'children'} />
      <button
        onClick={() => {
          fetching()
        }}
      >fetching</button>
    </div>
  );
}

export default App;
