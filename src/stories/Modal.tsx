import React, { Component } from 'react';
import { Modal } from "../components/layout/Modal";
import { Button } from "../components/elements/Button";
import "@tailwindcss/ui/dist/tailwind-ui.css";

interface IModalContainerProps{

}

class ModalContainer extends Component <IModalContainerProps>{
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    const { isModalOpen } = this.state;

    this.setState({
      isModalOpen: !isModalOpen,
    });
  }

  render() {
    const { size, isModalOpen } = this.state;

    return (
      <div className="container">
        <div className="flex">
          <div className="p-2">
            <Button onClick={() => this.toggleModal()}>Toggle</Button>
          </div>
        </div>
        <Modal
          className="bg-white rounded-lg px-4 pt-5 pb-4 sm:max-w-sm sm:w-full sm:p-6"
          open={isModalOpen}
          onClose={this.toggleModal}
        >
          <div>
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                class="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3
                class="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                Hello World!
              </h3>
              <div class="mt-2">
                <p class="text-sm leading-5 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur amet labore.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <span class="flex w-full rounded-md shadow-sm">
              <button
                type="button"
                onClick={() => this.toggleModal()}
                class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                Close
              </button>
            </span>
          </div>
        </Modal>
      </div>
    );
  }
}


export default { title: "Modal" };
export const WithBasicModal = () => <ModalContainer />;
