import React from 'react';
import {Link} from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="panel">
    <div className="confirm_container0">
        Are you sure you want to request?
    </div>
    <div className="confirm_container1">
        <button>
            <Link to="/success">Confirm</Link>
        </button>
        <button>
            <Link to="/results">Cancel</Link>
        </button> 
    </div>
</div>
    </div>
)}

export default Start
