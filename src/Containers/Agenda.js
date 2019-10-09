import React from 'react';
import String from '../Components/Contents';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';

class Agenda extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            activeTabs: '0'
        }
        this._toggle = this._toggle.bind(this);
    }

    _toggle(tab){
        if(this.state.activeTabs !== tab){
            this.setState({
                activeTabs: tab
            })
        }
    }
    render(){
        
        return(
            <div className="Page py-5" style={{ backgroundColor:'#E0E0E0' }}>
                <div className="container py-3">
                    <div className="text-center">
                        <h1>{String.navigation.agenda}</h1>
                    </div>
                    <hr />
                    <div className="p-4 agenda-container">
                       <Nav tabs fill>
                            <NavItem>
                                <NavLink className={this.state.activeTabs === '0' ? "tab-agenda tab-agenda-active":"tab-agenda" } onClick={()=>this._toggle("0")} active={this.state.activeTabs === '0' ? true : false} >
                                    <h4>Day 0</h4>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={this.state.activeTabs === '1' ? "tab-agenda tab-agenda-active":"tab-agenda" } onClick={()=>this._toggle("1")} active={this.state.activeTabs === '1' ? true : false} >
                                    <h4>Day 1</h4>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={this.state.activeTabs === '2' ? "tab-agenda tab-agenda-active":"tab-agenda" } onClick={()=>this._toggle("2")} active={this.state.activeTabs === '2' ? true : false} >
                                    <h4>Day 2</h4>
                                </NavLink>
                            </NavItem>
                       </Nav>
                       <TabContent activeTab={this.state.activeTabs}>
                            <TabPane tabId="0">
                                <Row className="my-3">
                                <Col sm="12">
                                    <Table bordered responsive className="text-center">
                                        <thead className="table-dark">
                                            <tr><th colSpan="4">Friday, October 11th 2019</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="align-middle">08:00 - 08:30</td>
                                                <td className="align-middle" colSpan="3">Registration</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">08:30 - 09:30</td>
                                                <td className="align-middle" colSpan="3">Gitlab Class by GresikDev<br/>(RPL TI UMG)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">09:30 - 11:00</td>
                                                <td className="align-middle" colSpan="3">Video Call Application using WebRTC and Gstreamer by Fitra Aditya<br/>(RPL TI UMG)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">11:30 - 13:00</td>
                                                <td className="align-middle" colSpan="3">Break for Lunch/Praying</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">13:00 - 16:00</td>
                                                <td className="align-middle" width="45%">GNOME Translation <br/> Andika Triwidada<br/>(SBC TI UMG)</td>
                                                <td className="align-middle" width="45%">GNOME: Newcomers workshop (BoF) <br/>Gaurav Agrawal, Felipe Borges, Sajeer Ahamed<br/>(ALGO TI UMG)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">16:00 - 16:30</td>
                                                <td className="align-middle" colSpan="3">Closing</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="1">
                                <Row className="my-3">
                                <Col sm="12">
                                    <Table bordered responsive className="text-center">
                                        <thead className="table-dark">
                                            <tr><th colSpan="6">Saturday, October 12th 2019</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="align-middle">08:00 - 09:00</td>
                                                <td className="align-middle" colSpan="5">Registration</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">09:00 - 09:30</td>
                                                <td className="align-middle" colSpan="5">Opening - Tari-Tari Gembira (Traditional Dance) <br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">09:30 - 09:40</td>
                                                <td className="align-middle" colSpan="5">Opening Talk by Mayor <br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">09:40 - 09:45</td>
                                                <td className="align-middle" colSpan="5">Opening Talk by Dean of University <br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">09:45 - 09:50</td>
                                                <td className="align-middle" colSpan="5">Opening Talk by GNOME <br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">09:50 - 10:50</td>
                                                <td className="align-middle" colSpan="5">Opening Talk by Neil McGovern (GNOME Executive Director) <br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">10:50 - 11:50</td>
                                                <td className="align-middle" colSpan="5">USB Borne Attacks and Usable Defense Mechanisms by Tobias Mueller <br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">11:50 - 13:00</td>
                                                <td className="align-middle" colSpan="5">Break/Lunch/Praying</td>
                                            </tr>
                                            <tr>
                                                <td width="12rem"></td>
                                                <td width="20%" className="align-middle table-secondary">Class 1<br/>(Hall Sang Pencerah)</td>
                                                <td width="20%" className="align-middle table-secondary">Class 2<br/>(Room I6.06)</td>
                                                <td width="20%" className="align-middle table-secondary">Class 3<br/>(Room I6.07)</td>
                                                <td width="20%" className="align-middle table-secondary">Class 4<br/>(Room I6.08)</td>
                                                <td width="20%" className="align-middle table-secondary">Class 5<br/>(Room I6.09)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">13:00 - 13:45</td>
                                                <td className="align-middle">GNOME Shell Introduction <br/> BIN LI</td>
                                                <td className="align-middle">Pegon at GNOME <br/> Rahman Yusri Aftian</td>
                                                <td className="align-middle">Human Interface Engineering (Icons and Graphic Design) <br/> Sevagen Veerasamy</td>
                                                <td className="align-middle">LibreOffice in Asia <br/> Franklin Weng</td>
                                                <td className="align-middle">Understanding People with Visual Impairments Using Screen Reader (Gnome AT-API)) <br/>Yudhi Satrio</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td className="align-middle" colSpan="5">Group Photos (Each Class)</td>
                                            </tr>
                                            <tr>
                                                <td>13:45 - 14:15</td>
                                                <td className="align-middle" colSpan="5">Coffee Break</td>
                                            </tr>
                                            <tr>
                                                <td width="12rem"></td>
                                                <td width="20%" className="align-middle table-secondary">Class 1<br/>(Hall Sang Pencerah)</td>
                                                <td width="20%" className="align-middle table-secondary">Class 2<br/>(Room I6.06)</td>
                                                <td width="20%" className="align-middle table-secondary">Class 3<br/>(Room I6.07)</td>
                                                <td width="20%" className="align-middle table-secondary">Class 4<br/>(Room I6.08)</td>
                                                <td width="20%" className="align-middle table-secondary">Class 5<br/>(Room I6.09)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">14:15 - 15:00</td>
                                                <td className="align-middle">How To Contribute To FOSS Projects <br/> Ahmad Haris</td>
                                                <td className="align-middle">Managing Social Capital in Open Source <br/> Rizki Kelimutu</td>
                                                <td className="align-middle">Running Linux Desktop on Sony Playstation 4 <br/> Iwan Suryanto Tahari</td>
                                                <td className="align-middle">pulseaudio: Improvement on Audio Streams Switch <br/> Hui Wang</td>
                                                <td className="align-middle">Collaboration in Game  Development using Godot: an Open Source Software <br/>Sofyan Sugianto</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td className="align-middle" colSpan="5">Group Photos (Each Class)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">15:00 - 15:30</td>
                                                <td className="align-middle" colSpan="5">Coffee Break</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">15:30 - 15:35</td>
                                                <td className="align-middle" colSpan="5">(Lightning Talk) GNOME l10n Indonesia Progress <br/> Kukuh syafaat <br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">15:35 - 15:40</td>
                                                <td className="align-middle" colSpan="5">(Lightning Talk) IRGSH <br/> Herpiko Dwi Aguno <br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">15:40 - 15:45</td>
                                                <td className="align-middle" colSpan="5">(Lightning Talk) Open Source and Education in Indonesia <br/> Faiq Aminuddin <br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">15:45 - 15:50</td>
                                                <td className="align-middle" colSpan="5">(Lightning Talk) Deep Learning in Linux Distros <br/> Radical Rakhman Wahid <br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">15:50 - 16:30</td>
                                                <td className="align-middle" colSpan="5">Closing</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row className="my-3">
                                <Col sm="12">
                                    <Table bordered responsive className="text-center">
                                        <thead className="table-dark">
                                            <tr><th colSpan="6">Sunday, October 13th 2019</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="align-middle">08:00 - 09:10</td>
                                                <td className="align-middle" colSpan="5">Registration</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">09:10 - 09:15</td>
                                                <td className="align-middle" colSpan="5">Opening by MC <br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">09:15 - 10:15</td>
                                                <td className="align-middle" colSpan="5">GNOME Foundation — We're Here to Help - Rosanna Yuen <br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">10:15 - 11:00</td>
                                                <td className="align-middle" colSpan="5">Make our steel industry Great again, with Industry 4.0 - Stephanus Koeswandi (DOMUS) <br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">11:00 - 11:30</td>
                                                <td className="align-middle" colSpan="5">Coffee Break</td>
                                            </tr>
                                            <tr>
                                                <td width="12rem"></td>
                                                <td width="20%" className="align-middle table-secondary">Class 1<br/>(Hall Sang Pencerah)</td>
                                                <td width="20%" className="align-middle table-secondary">Class 2<br/>(Room I6.06)</td>
                                                <td width="20%" className="align-middle table-secondary">Class 3<br/>(Room I6.07)</td>
                                                <td width="20%" className="align-middle table-secondary">Class 4<br/>(Room I6.08)</td>
                                                <td width="20%" className="align-middle table-secondary">Class 5<br/>(Room I6.09)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">11:30 - 12:15</td>
                                                <td className="align-middle">Guitar Shredding under GNOME Environment <br/>Hananto Herlambang</td>
                                                <td className="align-middle">Open Source in Homeschooling Family <br/> Andik Nur Achmad</td>
                                                <td className="align-middle">Using Creative Commons License to Collaborate with Digital Artwork <br/> Florens Debora Patricia</td>
                                                <td className="align-middle">Power Management and Measurement in GNOME <br/> Aditya Manglik</td>
                                                <td className="align-middle">The experience of the KLAS roadshow to ignite the spirit of Open Source in East Java, Indonesia <br/>Darian Rizaludin</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td className="align-middle" colSpan="5">Group Photos (Each Class)</td>
                                            </tr>
                                            <tr>
                                                <td>12:15 - 13:30</td>
                                                <td className="align-middle" colSpan="5">Coffee Break</td>
                                            </tr>
                                            <tr>
                                                <td width="12rem"></td>
                                                <td width="20%" className="align-middle table-secondary">Class 1<br/>(Hall Sang Pencerah)</td>
                                                <td width="20%" className="align-middle table-secondary">Class 2<br/>(Room I6.06)</td>
                                                <td width="20%" className="align-middle table-secondary">Class 3<br/>(Room I6.07)</td>
                                                <td width="20%" className="align-middle table-secondary">Class 4<br/>(Room I6.08)</td>
                                                <td width="20%" className="align-middle table-secondary">Class 5<br/>(Room I6.09)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">13:30 - 14:15</td>
                                                <td className="align-middle">Gimpscape: The Biggest Open Source Design Community in Indonesia <br/> Rania Amina</td>
                                                <td className="align-middle">Using Kafka and Elixir for Fault Tolerant Distributed Backend <br/> Tonny Adhi Sabastian</td>
                                                <td className="align-middle">Current State of BlankOn Linux Development <br/> Samsul Maarif</td>
                                                <td className="align-middle">Linkerd 2.0 <br/>Ananda Dwi Rahmawati</td>
                                                <td className="align-middle">F/LOSS for Education <br/>Sokibi Imgos</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td className="align-middle" colSpan="5">Group Photos (Each Class)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">14:15 - 14:45</td>
                                                <td className="align-middle" colSpan="5">Coffee Break</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">14:45 - 14:50</td>
                                                <td className="align-middle" colSpan="5">(Lightning Talk) The Role of Open Source Technology to Accelerate Sustainable Development Goals <br/> Uthia Estiane<br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">14:50 - 14:55</td>
                                                <td className="align-middle" colSpan="5">(Lightning Talk) Implementation and utilization file hosting Owncloud and virtualization Proxmox for Teaching Factory Model on SMK Muhammadiyah 1 Yogyakarta <br/> Budi Putra<br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">14:55 - 15:00</td>
                                                <td className="align-middle" colSpan="5">(Lightning Talk) Introducing and Educate Local Community to FOSS <br/> Ernawan Ernawan<br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">15:00 - 16:15</td>
                                                <td className="align-middle" colSpan="5">Using Open Sorce to Manage Asian Games IT Security <br/> Andika Triwidada <br/>(Hall Sang Pencerah)</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">16:15 - 16:30</td>
                                                <td className="align-middle" colSpan="5">Closing</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
 
                    <small className="text-danger"><i>* The schedule can change at any time</i></small>
                    </div>
                </div>
                <br/>
            </div>
        )
    }

   
}


export default Agenda;
