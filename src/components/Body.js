import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import '../css/body.css';
import {Element} from 'react-scroll';
import Timeline from './Timeline';

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
                    <div className={'second-frame'}>
                        <Timeline/>
                    </div>
                </Element>
                <Element name="resume" className="element">
                    <div className={'intermediate-frame'}>
                    </div>
                    <div className={'third-frame'}>

                    </div>
                </Element>
            </div>

        )
    }
}

export default Body;