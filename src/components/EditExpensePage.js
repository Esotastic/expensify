import React from "react";

const EditExpensePage = (props) => {
  return (
    <div>
      This is the edit expense page for ID {props.match.params.id}.
    </div>
  )
};

export default EditExpensePage;