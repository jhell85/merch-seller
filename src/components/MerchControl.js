import React from 'react';
import NewMerchForm from './NewMerchForm';

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      formVisibleOnPage: false,
      merchList: []
    };
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewMerchForm />
    } else {
      currentlyVisibleState = <MerchList />
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}
export default MerchControl;