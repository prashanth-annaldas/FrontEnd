import StoreItems from './components/listItems';
import ErrorMsg from './components/errMessage';
import Container from './components/Container';
import StoreInput from './components/StoreInput';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
function Map() {
    // let listItems = [];
    let listItems = ["Pants","Shoes","Shirts","T-Shirts","Kurta","shorts"];

  return  (<Container>
              <h1>Online Store</h1>
              <StoreInput handleOnChange = {(event)=>{ 
        console.log(event.target.value);}
    }/>
              <ErrorMsg items = {listItems}/>
              <StoreItems items = {listItems}/>
           </Container>
  );
}
 
export default Map;
