import React from 'react';

class Proposal extends React.Component{
    render(){
        return(
            <div className="Page py-5" id="callofproposal">
                <div className="container py-3">
                    <h1>Call for Papers for GNOME.Asia Summit 2019 is now open!</h1>
                    <hr/>
                    <br/>
                    <div className="container">
                        <p>
                        GNOME.Asia Summit 2019 invites you to participate as a speaker at the conference on the 12th and 13th of October 2019 in Gresik, Indonesia.
                        </p>
                        <p>
                        GNOME.Asia Summit is the featured annual GNOME conference in Asia. It focuses primarily on the GNOME desktop, but also covers applications and platform development tools. The summit brings together the GNOME community in Asia to provide a forum for users, developers, foundation leaders, governments and businesses to discuss the present technology and future developments.
                        </p>
                        <h4>Topics of Call for Papers (CFP)</h4>
                        <p>GNOME.Asia Summit 2019 will invite talks relevant to GNOME and FLOSS. We welcome proposals by newcomers and experienced speakers alike. The possible topics are, but not limited to :</p>
                        <h5>Contribute to GNOME</h5>
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
                        <h5>Contributing to Linux and F/LOSS</h5>
                        <ul>
                            <li>Linux kernel and development </li>
                            <li>The development and promotion of open-source operating systems 	</li>
                            <li>About Debian, Fedora, openSUSE, Ubuntu, FreeBSD, and other distributions 	</li>
                            <li>The development and promotion of other open-source projects </li>
                        </ul>
                        <h5>Open Source Enlightenment and Related Story</h5>
                        <ul>
                            <li>The Knowledge and Spirit of Open Source </li>
                            <li>Open Source stories of your own </li>
                            <li>How to optimize the process and improve efficiency with the help of open-source tools</li>
                            <li>How to engage non-technical 	lightning talks contributors in Open Source Projects </li>
                            <li>How to engage more female contributors in Open Source Projects </li>
                        </ul>
                        <h5>Emerging Technologies</h5>
                        <ul>
                            <li>Artificial Intelligence</li>
                            <li>DevOps with AI</li>
                            <li>Deep Learning</li>
                            <li>AR & VR</li>
                            <li>Big Data</li>
                            <li>Distributed systems</li>
                            <li>Open Source DevOps</li>
                        </ul>
                        <p>
                        We are also interested in other topics related to Free/Libre and Open Source Software which are not listed above.
                        </p>

                    </div>
                    {/* <div className="d-flex align-items-center justify-content-center" style={{ height:'25vh' }} >
                            
                        <p style={{ letterSpacing:5 }}>Coming soon</p>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Proposal;