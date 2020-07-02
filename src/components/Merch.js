import React from "react";
import PropTypes from "prop-types";

function Merch(props){
  return(
 <React.Fragment>
   <h3>{props.item}</h3>
   <p>{props.description}</p>
   <h4>{props.quantity}</h4>
    <hr/>
 </React.Fragment>

  );
}

Merch.propTypes = {
  item: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};


export default Merch;