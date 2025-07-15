import LikeButton from "./Buttons";
import YtChannel from "./YouTube";
import Dynamic from "./Dynamic-comp";
function App(){
  return <div>
    <YtChannel/>
    <LikeButton/>
    <Dynamic></Dynamic>
  </div>;
}

export default App;