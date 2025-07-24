import { useState } from 'react';
import StoreItems from './components/listItems';
import ErrorMsg from './components/errMessage';
import Container from './components/Container';
import StoreInput from './components/StoreInput';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function Map() {
  const [storeItems, setTextToShow] = useState([]);
  const OnKeyDown = (event)=>{
    if(event.key === "Enter"){
      let newStoreItems = event.target.value;
      let newItem = [...storeItems, newStoreItems];
      setTextToShow(newItem);
    }
  }
  return  (<Container>
              <h1>Online Store</h1>
              <StoreInput handleOnKeyDown = {OnKeyDown}/>
              <ErrorMsg items = {storeItems}/>
              <StoreItems items = {storeItems}/>
           </Container>
  );
}
 
export default Map;
