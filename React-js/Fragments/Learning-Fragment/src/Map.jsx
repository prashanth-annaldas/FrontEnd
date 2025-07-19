import FoodItems from './components/listItems';
import ErrorMsg from './components/errMessage';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
function Map() {
    // let listItems = [];
    let listItems = ["Pants","Shoes","Shirts","T-Shirts","Kurta","shorts"];

  return  (<>
              <h1>Shop (Using Map)</h1>
              <ErrorMsg items = {listItems}/>
              <FoodItems items = {listItems}/>
           </>
  );
}
 
export default Map;
