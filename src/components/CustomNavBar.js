import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { increment, incrementAsync, decrement, decrementAsync } from '../reducers/counter';
import '../css/styles.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, MenuItem } from '../../node_modules/react-bootstrap/dist/react-bootstrap.min.js';
import { resourceFactory } from '../actions/resourceFactory';

export class CustomNavbar extends React.Component {
  componentDidMount() {
    const a = this.props.dispatch(resourceFactory());
    console.log(this.props);
  }
  render() {

    const { error, loading, items } = this.props;
    console.log(this.props);

    if (loading) {
      return <div>Loading...</div>;
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
              <MenuItem><Link to='/hometheaters/soundbars' className="nullifyLink" onClick={this.props.dispatch(resourceFactory())}><MenuItem eventKey={1.1} className="nullifyLink">Sound Bars</MenuItem></Link></MenuItem>
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
  items: state.apiReducer.items.href, loading: state._links, error: state._links
});

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ resourceFactory }, dispatch)
  }
}
export default connect(mapStateToProps)(CustomNavbar, mapDispatchToProps);