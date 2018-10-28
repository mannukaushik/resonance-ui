import harman1 from "../images/harman1.png";
import harman2 from "../images/harman2.png";
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default () => (
    <div class="container">
        <div class="row">
            <img src={harman2} alt='harman2' class="img-fluid img-responsive"/>
        </div>
        <div class="row">
            <img src={harman1} alt ='harman1' class="img-fluid img-responsive"/>
        </div>
    </div>
)