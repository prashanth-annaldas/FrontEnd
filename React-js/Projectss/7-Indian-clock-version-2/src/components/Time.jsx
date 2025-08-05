import { useEffect, useState } from "react";

function Time() {
  const [time,setTime] = useState(new Date());
  useEffect(()=>{
    console.log("Started");
    const intervalId = setInterval(()=>{
      setTime(new Date());
    },1000);
    return ()=>{
      clearInterval(intervalId);
      console.log("Cleared");
    }
  },[]);
  return <p>This is shows time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>;

}

export default Time;