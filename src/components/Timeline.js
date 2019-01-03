import React, {Component} from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


class Timeline extends Component {
    render() {
        return (
            <div>
                <VerticalTimeline>
                    <div className={"workline"}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="January 19th 2018"
                            // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">SpartaHack IV</h3>
                            <h4 className="vertical-timeline-element-subtitle">Michigan State University</h4>
                            {/*<p>*/}
                            {/*Creative Direction, User Experience, Visual Design, Project Management, Team Leading*/}
                            {/*</p>*/}
                        </VerticalTimelineElement>
                    </div>
                    <div className={'secondline'}>
                        <VerticalTimelineElement
                            position={'right'}
                            className="vertical-timeline-element--work"
                            date="February 23rd 2018"
                            // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">HackIllinois</h3>
                            <h4 className="vertical-timeline-element-subtitle">University of Illinois
                                Urbana-Champaign</h4>
                        </VerticalTimelineElement>
                    </div>
                    <div className={'thirdline'}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="September 22nd 2018"
                            // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">GrizzHacks 3</h3>
                            <h4 className="vertical-timeline-element-subtitle">Oakland University</h4>
                        </VerticalTimelineElement>
                    </div>
                    <div className={"forthline"}>
                        <VerticalTimelineElement
                            position={'right'}
                            className="vertical-timeline-element--work"
                            date="October 12th 2018"
                        >
                            <h3 className="vertical-timeline-element-title">MHacks 11</h3>
                            <h4 className="vertical-timeline-element-subtitle">University of Michigan</h4>
                        </VerticalTimelineElement>
                    </div>
                </VerticalTimeline>
            </div>
        );
    }
}

export default Timeline;