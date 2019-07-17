import React from 'react';
import Counter from '../Components/Counter';

class Proposal extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            gnome:false,
            foss:false,
            os:false,
            et:false,
            ts:false,
            sc:false,
            travel:false
        }

        this._gnome = this._gnome.bind(this);
        this._foss = this._foss.bind(this);
        this._os = this._os.bind(this);
        this._et = this._et.bind(this);
        this._ts = this._ts.bind(this);
        this._sc = this._sc.bind(this);
        this._travel = this._travel.bind(this);
    }

    _gnome(){
        this.setState({
            gnome: !this.state.gnome
        })
    }

    _foss(){
        this.setState({
            foss: !this.state.foss
        })
    }

    _os(){
        this.setState({
            os:!this.state.os
        })
    }

    _et(){
        this.setState({
            et:!this.state.et
        })
    }

    _ts(){
        this.setState({
            ts:!this.state.ts
        })
    }

    _sc(){
        this.setState({
            sc:!this.state.sc
        })
    }
    _travel(){
        this.setState({
            travel: !this.state.travel
        })
    }

    render(){
        return(
            <div className="Page py-5" id="callofproposal">
                <div className="container py-3">
                
                    <h1>Call for Papers for GNOME.Asia Summit 2019 is now open!</h1>
                    <hr/>
                    <br/>
                        <h4>Topics of Call for Papers (CFP)</h4>
                        <div className="container px-5">
                        <br/>
                        <div onClick={this._gnome} className="cfptitle">

                            <h5> <i className={`fas ${this.state.gnome ? 'fa-minus':'fa-plus'} mr-2`}></i> Contribute to GNOME</h5>
                        </div>
                        <div className={this.state.gnome ? 'cfpshow' : 'cfphidden'} >
                            <ul>
                                <li>Latest 	developments</li>
                                <li>Writing applications for GNOME 3</li>
                                <li>UI design</li>
                                <li>QA and testing</li>
                                <li>Accessibility</li>
                                <li>Human Interface Engineering (Icons and Graphic Design) 	</li>
                                <li>Marketing/Engagement</li>
                                <li>Asia success stories / Local GNOME Projects</li>
                                <li>GNOME and Education 	</li>
                                <li>FOSS outreach programs, including Google Summer of Code</li>
                                <li>Developing GNOME on mobile devices (smart phones, tablets) 	</li>
                                <li>Developing GNOME on embedded systems or open hardware</li>
                            </ul>
                        </div>
                        
                        <div onClick={this._foss} className="cfptitle">

                            <h5> <i className={`fas ${this.state.foss ? 'fa-minus':'fa-plus'} mr-2`}></i> Contributing to Linux and F/LOSS</h5>
                        </div>

                        <div className={this.state.foss ? 'cfpshow' : 'cfphidden'}>
                            <ul>
                                <li>Linux kernel and development </li>
                                <li>The development and promotion of open-source operating systems 	</li>
                                <li>About Debian, Fedora, openSUSE, Ubuntu, FreeBSD, and other distributions 	</li>
                                <li>The development and promotion of other open-source projects </li>
                            </ul>
                        </div>
                        <div onClick={this._os} className="cfptitle">

                        <h5> <i className={`fas ${this.state.os ? 'fa-minus':'fa-plus'} mr-2`}></i> Open Source Enlightenment and Related Story</h5>
                        </div>
                        <div className={this.state.os ? 'cfpshow' : 'cfphidden'}>
                            <ul>
                                <li>The Knowledge and Spirit of Open Source </li>
                                <li>Open Source stories of your own </li>
                                <li>How to optimize the process and improve efficiency with the help of open-source tools</li>
                                <li>How to engage non-technical 	lightning talks contributors in Open Source Projects </li>
                                <li>How to engage more female contributors in Open Source Projects </li>
                            </ul>
                        </div>
                        <div onClick={this._et} className="cfptitle">

                            <h5> <i className={`fas ${this.state.et ? 'fa-minus':'fa-plus'} mr-2`}></i>Emerging Technologies</h5>
                        </div>
                        <div className={this.state.et ? 'cfpshow' : 'cfphidden'}>
                            <ul>
                                <li>Artificial Intelligence</li>
                                <li>DevOps with AI</li>
                                <li>Deep Learning</li>
                                <li>AR & VR</li>
                                <li>Big Data</li>
                                <li>Distributed systems</li>
                                <li>Open Source DevOps</li>
                            </ul>
                        </div>
                        
                     

                        
                    </div>

                    <br/>
                    <div className="container">
                        <div>

                        <h5>Type of Session</h5>
                        </div>
                        <div>

                        <ol start="1">
                            <li>
                            Standard session. Standard session will be scheduled for 45 minutes (35 minutes talk + 10 minutes Q&A). The session could be a technical talk, panel discussion, or BOF. If you need more time or additional resources, feel free to get in touch with the organizing team.
                            </li>
                            <li>
                            Lightning talk session. This session is a 5 minutes presentation for demonstrating your work or promoting an interesting topic. 
                            </li>
                        </ol>
                        </div>
                        <div >

                        <h5>Submission Criteria</h5>
                        </div>
                        <div>
                            <p>
                            Please provide a short abstract of your paper (under 200 words). Include your name, biographical information, a title, and a description of your presentation.
                            </p>
                            <ul>
                                <li>Submission timeline: July 15th to August 15th 2019</li>
                                <li>Confirmation of paper acceptance: August, 20th 2019</li>
                            </ul>
                        </div>
                        <div>

                        <h5>Travel Support</h5>
                        </div>
                        <div>

                        <p>
                        There will be an opportunity for speakers and GNOME Foundation members to request travel support by the GNOME Foundation. Please submit your application to the GNOME Travel Committee. For further information please refer to this guides <a href="https://wiki.gnome.org/Travel" target="__blank">https://wiki.gnome.org/Travel</a>.
                        </p>
                        <p>
                        All interested contributors are highly encouraged to send in talks. More information about GNOME.Asia Summit 2019 is available at <a href="https://asiasummit.gnome.id" target="__blank">https://asiasummit.gnome.id</a>.
                        </p>
                        </div>

                        <div className="d-flex justify-content-center my-3">
                            <div className="d-flex flex-column align-items-center">
                                <span>Apply here</span>
                                <br/>
                                <a href="https://s.id/GNAS19-CfP" target="__blank" className="btn btn-lg btn-danger shadow-sm">Call for Papers for GNOME.Asia Summit 2019</a>
                                <br/>
                                <Counter/> 
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Proposal;