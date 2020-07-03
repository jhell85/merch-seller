import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewMerchForm(props) {
  function handleNewMerchFormSubmission(event){
    event.preventDefault(event.target.item.value);
    props.onNewMerchCreation({item: event.target.item.value, description: event.target.description.value, quantity: event.target.quantity.value, id: v4()});
  }
  return (
    <React.Fragment>
      <h3>Add new Merch:</h3>
      <form onSubmit={handleNewMerchFormSubmission}>
        <input type="text" name="item" placeholder="New Item" required />
        <input
          type="text"
          name="description"
          placeholder="Item Description"
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="quantity"
          required
        />
        <button type="submit">Create</button>
      </form>
    </React.Fragment>
  );
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;