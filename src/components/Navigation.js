import React, {Component} from 'react';
import {Navbar, Button, Alignment} from '@blueprintjs/core'

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar className="bp3-navbar bp3-dark">
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading>Don Jayaweera</Navbar.Heading>
                        <Navbar.Divider/>
                        <Button className="bp3-minimal" icon="home" text="Home"/>
                        <Button className="bp3-minimal" icon="badge" text="Achievements"/>
                        <Button className="bp3-minimal" icon="document" text="Resume"/>
                    </Navbar.Group>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;