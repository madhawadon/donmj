import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import '../css/body.css';
import {Element} from 'react-scroll';

class Body extends Component {
    render() {
        return (
            <div>
                <div className={'body-frame'}>
                    <div className='text-frame bp3-dark'>
                        <Typing loop={true}>
                            <Typing.Speed ms={100}/>
                            <span>HI, I'M DON</span>
                            <Typing.Reset delay={1000}/>
                        </Typing>
                    </div>
                </div>
                <Element name="achieve" className="element">
                    <div className={'second-frame'}>
                    </div>
                </Element>
            </div>

        )
    }
}

export default Body;