import harman1 from "../images/harman1.png";
import harman2 from "../images/harman2.png";
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default () => (
    <div class="media">
        <div class="row">
            <img src={harman2} responsive />
        </div>
        <div class="row">
            <img src={harman1} responsive />
        </div>
    </div>
)