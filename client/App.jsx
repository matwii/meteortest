import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown, form, Grid, Row, Col} from 'react-bootstrap';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component) {

    resolutions(){
        return Resolutions.find().fetch();//Fetch gives us an object
    }

    addResolution(event){
        //Stops page from reloading each time we submit
        event.preventDefault();
        var text = this.refs.resolution.value.trim();

        Resolutions.insert({
            text: text,
            complete: false,
            createdAt: new Date()
        });
        console.log(this);
        this.refs.resolution.value="";
    }

    render(){
        let res = this.resolutions();
        if (res.length < 1){
            return (<div>loading</div>)
        }
        console.log(this.resolutions());
        return(
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Meteor test application</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">Arrangementer</NavItem>
                        <NavItem eventKey={2} href="#">Opprett arrangement</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
                                <input
                                    type="text"
                                    ref="resolution"
                                    placeholder="Finish React Meteor Series"/>
                            </form>
                            <div>
                                {res[0].text}
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

if(Meteor.isClient){
    Meteor.startup(function () {
        ReactDOM.render(<App />, document.getElementById("render-target"));
    })
}