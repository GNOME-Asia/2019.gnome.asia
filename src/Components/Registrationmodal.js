import React from 'react';
import { Modal,ModalBody,ModalHeader } from 'reactstrap';


class Registrationmodal extends React.Component{

    render(){
        return(
            <div>
                <Modal isOpen={this.props.open}
                toggle={this.props.toggle}
                modalTransition={{ timeout:1000 }}
                backdropTransition={{ timeout:350 }}
                >
                    <ModalHeader toggle={this.props.toggle}></ModalHeader>
                    <ModalBody>
                        <div className="text-center">
                            <h3>Coming Soon</h3>
                            <p>Conference Date : October, 12–13 2019</p>
                        </div>
                    </ModalBody>
                    {/* <ModalFooter></ModalFooter> */}
                </Modal>
            </div>
        )
    }
}

export default Registrationmodal;