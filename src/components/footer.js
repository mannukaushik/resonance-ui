import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../css/styles.css';

export class footer extends React.Component{
    render(){
        return(
            <div class = "container footer-color text-center navbar-fixed-bottom footer" >
                <br/>
                <div class="row">Maharaja</div><br/>
                <div class="row">Copyright.Maharaja.2018.All Rights Reserved.</div>
                <br/>
            </div>
        )
    }    
}

export default footer;