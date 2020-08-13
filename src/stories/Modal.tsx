import React, { Component } from 'react';
import { Modal } from "../components/layout/Modal";
import { Button } from "../components/elements/Button";

interface IModalContainerProps{

}

class ModalContainer extends Component <IModalContainerProps>{
  constructor(props) {
    super(props);
    this.state = {
      size: 'default',
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(size) {
    const { isModalOpen } = this.state;

    this.setState({
      isModalOpen: !isModalOpen,
      size,
    });
  }

  render() {
    const { size, isModalOpen } = this.state;

    return (
      <div className="p-16">
        <div className="columns p-16">
          <div className="mr-8">
            <Button primary onClick={() => this.toggleModal('sm')}>Small</Button>
          </div>
          <div className="mr-8">
            <Button primary onClick={() => this.toggleModal()}>Default</Button>
          </div>
          <div className="mr-8">
            <Button primary onClick={() => this.toggleModal('large')}>Large</Button>
          </div>
        </div>
        <div className="container">
          <Modal title="Add Node" size={size} open={isModalOpen} onSubmit={() => { }} onClose={this.toggleModal}>
            <h1>Hello World!</h1>
            <div className="p-2">
              This is a test
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}


export default { title: "Modal" };
export const WithBasicModal = () => <ModalContainer />;
