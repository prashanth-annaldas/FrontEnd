import 'bootstrap/dist/css/bootstrap.min.css'

function Map() {
  let listItems = ["JNTUH","OU","VNR","CMR","GCTC"];
  return  (<>
            <h1>Eapcet Colleges (Using Map)</h1>
              <ul className="list-group">
                {listItems.map((item) =>(
                    <li className="list-group-item">{item}</li>
                ))}
              </ul>
           </>
  );
}
 
export default Map;
