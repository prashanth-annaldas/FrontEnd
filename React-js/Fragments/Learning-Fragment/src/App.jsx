import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return  <React.Fragment>     {/* <>  */}
            <h1>Eapcet Colleges</h1>
              <ul className="list-group">
                <li className="list-group-item">JNTUH</li>
                <li className="list-group-item">OU</li>
                <li className="list-group-item">VNR</li>
                <li className="list-group-item">CMR</li>
                <li className="list-group-item">GCTC</li>
              </ul>
           </React.Fragment>;   {/* </> */} 
}
 
export default App;
