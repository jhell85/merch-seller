import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import MerchControl from './MerchControl'


function App() {
  return (
   <React.Fragment>
     <div className="container pt-2">
     <Header/>
     <MerchControl/>
   </div>
   </React.Fragment>
  );
}

export default App;
