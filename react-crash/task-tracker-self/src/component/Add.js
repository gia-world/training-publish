import React from "react";

const Add = () => {
  return (
    <form className="add-form form-control">
      <label>Subject</label>
      <input type="text" placeholder="Text here" />
      <input type="submit" value="submit" className="btn btn-block" />
    </form>
  );
};

export default Add;
