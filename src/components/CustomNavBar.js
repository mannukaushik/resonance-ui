import React from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { MenuItem, Nav, NavDropdown, Navbar } from '../../node_modules/react-bootstrap/dist/react-bootstrap.min.js';
import { resourceFactory } from '../actions/resourceFactory';
import '../css/styles.css';
import { connect } from 'react-redux';
export var location = ''; 

export class CustomNavbar extends React.Component {

  callApiOnClick(apiUrl) {
    this.props.dispatch(resourceFactory(apiUrl));
  }

  render() {
    const { error, loading, item } = this.props;
    location = this.props.location;

    if(loading){
      return <div>Loading ...</div>
    }
    return (
      <div>
        <br />
        <Navbar className="nav-color" role="navigation">
          <Navbar.Header>
            <Navbar.Brand className="nav-color-text">
              <a href="/">Resonance</a>
            </Navbar.Brand>
          </Navbar.Header>

          <Nav pullRight>
            <NavDropdown eventKey={1} title="Home Audio" id="basic-nav-dropdown">
              <MenuItem>{<Link to='/hometheaters/soundbars' className="nullifyLink" onClick={()=>this.callApiOnClick('http://localhost:8080/resonance/v1/products?type=homeTheater')}><MenuItem eventKey={1.1} className="nullifyLink">Sound Bars</MenuItem></Link>}</MenuItem>
              <MenuItem eventKey={1.2}>Home Theater Systems</MenuItem>
              <MenuItem eventKey={1.3}>Tower Speakers</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={2} title="Support" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1}>Contact Us</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={2.2}>Why Buy Direct ?</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  item: state.apiReducer.items, loading: state.loading, error: state.error
});

export default connect(mapStateToProps)(CustomNavbar);