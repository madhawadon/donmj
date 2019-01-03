import React, {Component} from 'react';
import {Navbar, Button, Alignment} from '@blueprintjs/core';
import {Link, Events, animateScroll as scroll, scrollSpy} from 'react-scroll';
import '../css/global.css';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar className="bp3-navbar bp3-dark" fixedToTop={true}>
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading>Don Jayaweera</Navbar.Heading>
                    </Navbar.Group>
                    <Navbar.Group align={Alignment.RIGHT}>
                        <Navbar.Divider/>
                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}
                              onSetActive={this.handleSetActive}>
                            <Button className="bp3-minimal" icon="home" text="Home"/>
                        </Link>
                        <Link activeClass="active" to="achieve" spy={true} smooth={true} offset={50} duration={500}
                              onSetActive={this.handleSetActive}>
                            <Button className="bp3-minimal" icon="badge" text="Hackathons"/>
                        </Link>
                        <Link activeClass="active" to="resume" spy={true} smooth={true} offset={50} duration={500}
                              onSetActive={this.handleSetActive}>
                            <Button className="bp3-minimal" icon="document" text="Resume"/>
                        </Link>
                    </Navbar.Group>
                </Navbar>
            </div>
        );
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', function (to, element) {
            console.log("begin", arguments);
        });
        Events.scrollEvent.register('end', function (to, element) {
            console.log("end", arguments);
        });
        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };
    scrollToBottom = () => {
        scroll.scrollToBottom();
    };
    scrollTo = () => {
        scroll.scrollTo(100);
    };
    scrollMore = () => {
        scroll.scrollMore(100);
    };
    handleSetActive = (to) => {
        console.log(to);
    };
}

export default Navigation;