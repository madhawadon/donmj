import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import '../css/body.css';
import {Element} from 'react-scroll';
import Time from './Timeline';
import {Button} from '@blueprintjs/core';

class Body extends Component {
    render() {
        return (
            <div>
                <Element name="home" className="element">
                    <div className={'body-frame'}>
                        <div className='text-frame bp3-dark'>
                            <Typing loop={true}>
                                <Typing.Speed ms={100}/>
                                <span>HI, I'M DON</span>
                                <Typing.Delay ms={2000}/>
                                <Typing.Backspace count={15}/>
                                <Typing.Reset delay={1000}/>
                            </Typing>
                        </div>
                    </div>
                </Element>
                <Element name="achieve" className="element">
                    <div className={"second-frame"}>
                        <Time/>
                    </div>
                </Element>
                <Element name="resume" className="element">
                    <div className={'third-frame'}>
                        <div className={'button-frame'}>
                            <Button className="bp3-minimal" onClick={this.openTab} large={true} icon="document"
                                    text="Click Here for Resume" style={{color: '#FFF'}}/>
                        </div>
                    </div>
                </Element>
            </div>

        )
    }

    openTab = () => {
        let url = 'https://drive.google.com/file/d/1UM963tEWT__picOYICbId2d2QMIgWsdp/view?usp=sharing';
        window.open(url, '_blank');
    }
}

export default Body;