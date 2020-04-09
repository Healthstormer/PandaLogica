import React from 'react';
import {Link} from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="panel">
    <div>We found these offerings based on your search: </div>
    <div className="results_container0">
        <div>
            <div>Masks Type Y</div>
            <div>Availability:</div>
            <div>Supplier: ACME Corp</div>
            <div>8000 Zurich</div>
        </div>
        <div>
            <Link to="/confirm">cart</Link>
        </div>
    </div> 
    <div className="results_container1">
        <div>
            <div>Masks Type ZZ</div>
            <div>Availability:</div>
            <div>Supplier: Zork GmbH</div>
            <div>8400 Winterthur</div>
        </div>
        <div>
            <Link to="/confirm">cart</Link>
        </div>
    </div> 
    <div className="results_container2">
        <div>
            <div>Specialist</div>
            <div>Availability:</div>
        </div>
        <div>
            <Link to="/confirm">flag</Link>
        </div>
    </div>    
</div>
    </div>
)}

export default Start
