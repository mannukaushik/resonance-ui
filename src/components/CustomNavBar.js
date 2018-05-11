import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { increment, incrementAsync, decrement, decrementAsync } from '../reducers/counter';
import '../css/styles.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, MenuItem } from '../../node_modules/react-bootstrap/dist/react-bootstrap.min.js';

const CustomNavbar = () => (
  <div>
  <br/>
   <Navbar className="nav-color" role="navigation">
    <Navbar.Header>
      <Navbar.Brand className="nav-color-text">
        <a href="/">Resonance</a>
      </Navbar.Brand>
    </Navbar.Header>

    <Nav pullRight>
      <NavDropdown eventKey={1} title="Home Audio" id="basic-nav-dropdown">
      <MenuItem><Link to='/soundbars'className="nullifyLink"><MenuItem eventKey={1.1} className="nullifyLink">Sound Bars</MenuItem></Link></MenuItem>
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
)


const mapStateToProps = state => ({ count: state.counter.count, isIncrementing: state.counter.isIncrementing, isDecrementing: state.counter.isDecrementing })

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/Linkbout-us')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar);