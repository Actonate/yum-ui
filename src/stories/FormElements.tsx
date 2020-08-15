import React, { Component } from "react";
import { Checkbox } from "../components/forms/Checkbox";
import { Switch } from "../components/forms/Switch";
import { Radio } from "../components/forms/Radio";
import { Input } from "../components/forms/Input";
import { Select } from "../components/forms/Select";
import { Textarea } from "../components/forms/Textarea";
import "@tailwindcss/ui/dist/tailwind-ui.css";

const CheckboxContainer = (props) => (
  <div className="container">
    <div className="flex flex-col">
      <div className="p-2">
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <Checkbox
              label="This is checked"
              className="h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              labelClassName="font-medium text-gray-700"
              value={true}
              onChange={(e) => {}}
            />
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <Checkbox
              className="h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              value={false}
              onChange={(e) => {}}
            />
          </div>
          <div className="ml-3 text-sm leading-5">
            <label for="candidates" className="font-medium text-gray-700">
              Checkbox with label
            </label>
            <p className="text-gray-500">This is the description</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <Checkbox
              error
              className="h-4 w-4 text-red-500 border-red-500 transition duration-150 ease-in-out"
              value={false}
              onChange={(e) => {}}
            />
          </div>
          <div className="ml-3 text-sm leading-5">
            <label for="candidates" className="font-medium text-red-500">
              Checkbox error
            </label>
            <p className="text-red-500">This is the description</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <Checkbox
              disabled
              className="h-4 w-4 text-red-500 border-gray-100 transition duration-150 ease-in-out"
              value={false}
              onChange={(e) => {}}
            />
          </div>
          <div className="ml-3 text-sm leading-5">
            <label for="disabled" className="font-medium text-gray-400">
              Checkbox error
            </label>
            <p className="text-gray-400">This is the description</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SwitchContainer = (props) => (
  <div className="container">
    <div className="flex flex-col">
      <div className="p-2">
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <Switch
              label="Off"
              className="h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              labelClassName="font-medium text-gray-700"
              value={false}
              onChange={(e) => {}}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      <div className="p-2">
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <Switch
              label="On"
              className="h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              labelClassName="font-medium text-gray-700"
              activeClassName="bg-indigo-600"
              value={true}
              onChange={(e) => {}}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RadioContainer = (props) => (
  <div className="container">
    <div className="flex">
      <div className="p-2">
        <div className="flex items-center">
          <Radio
            value={true}
            label="Radio Value 1"
            labelClassName="text-sm leading-5 font-medium text-gray-700"
            onChange={(e) => {}}
            className="h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
          />
        </div>
      </div>
      <div className="p-2">
        <div className="flex items-center">
          <Radio
            value={false}
            onChange={(e) => {}}
            className="h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
          />
          <label for="push_everything" className="ml-3">
            <span className="block text-sm leading-5 font-medium text-gray-700">
              Radio with Label
            </span>
          </label>
        </div>
      </div>
      <div className="p-2">
        <div className="flex items-center">
          <Radio
            error
            value={false}
            onChange={(e) => {}}
            className="h-4 w-4 text-red-600 border-red-500 transition duration-150 ease-in-out"
          />
          <label for="push_everything" className="ml-3">
            <span className="block text-sm leading-5 font-medium text-gray-700">
              Radio Error 1
            </span>
          </label>
        </div>
      </div>
      <div className="p-2">
        <div className="flex items-center">
          <Radio
            error
            value={true}
            onChange={(e) => {}}
            className="h-4 w-4 text-red-600 border-red-500 transition duration-150 ease-in-out"
          />
          <label for="push_everything" className="ml-3">
            <span className="block text-sm leading-5 font-medium text-gray-700">
              Radio Error 2
            </span>
          </label>
        </div>
      </div>
      <div className="p-2">
        <div className="flex items-center">
          <Radio
            disabled
            value={true}
            onChange={(e) => {}}
            className="h-4 w-4 text-gray-300 border-gray-300 transition duration-150 ease-in-out"
          />
          <label for="push_everything" className="ml-3">
            <span className="block text-sm leading-5 font-medium text-gray-400">
              Radio Disabled
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>
);

class InputContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }
  render() {
    return (
      <div className="container">
        <div className="flex">
          <div className="p-2">
            <div>
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Type your input
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Input
                  className="block w-full sm:text-sm sm:leading-5"
                  placeholder="This is a default input"
                  value={this.state.value}
                  onChange={(e) => this.setState({ value: e })}
                />
              </div>
            </div>
          </div>
          <div className="p-2">
            <div>
              <label className="block text-sm font-medium leading-5 text-red-500">
                Input with errors
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Input
                  error
                  className="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red sm:text-sm sm:leading-5"
                  placeholder="This is a default input"
                  value={this.state.value}
                  onChange={(e) => this.setState({ value: e })}
                />
              </div>
              <p className="mt-2 text-xs text-red-600" id="email-error">
                This is an error message
              </p>
            </div>
          </div>
          <div className="p-2">
            <div>
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Input disabled
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Input
                  disabled
                  className="block w-full sm:text-sm sm:leading-5 bg-gray-100"
                  placeholder="This is a default input"
                  value={this.state.value}
                  onChange={(e) => this.setState({ value: e })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const TextareaContainer = (props) => (
  <div className="container">
    <div className="flex">
      <div className="p-2">
        <div>
          <label className="block text-sm leading-5 font-medium text-gray-700 pb-2">
            Enter your message
          </label>
          <Textarea
            className="block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            placeholder="This is a default textarea"
          />
        </div>
      </div>
      <div className="p-2">
        <div>
          <label className="block text-sm leading-5 font-medium text-red-500 pb-2">
            Textarea with error
          </label>
          <Textarea
            error
            className="block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 "
            placeholder="This is a default textarea"
          />
        </div>
      </div>
      <div className="p-2">
        <div>
          <label className="block text-sm leading-5 font-medium text-gray-700 pb-2">
            Textarea with disabled
          </label>
          <Textarea
            disabled
            className="block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 bg-gray-100 text-gray-400"
            placeholder="This is a default textarea"
          />
        </div>
      </div>
    </div>
  </div>
);


const SelectContainer = props => {
  const options = [
    {
      value: "first-item",
      label: "First Item"
    },
    {
      value: "second-item",
      label: "Second Item"
    },
    {
      value: "third-item",
      label: "Third Item",
      selected: true
    }
  ];

  return (
    <div className="container">
      <div className="flex">
        <div className="p-2">
          <div>
            <label className="block text-sm leading-5 font-medium text-gray-700">
              Choose an option
            </label>
            <Select
              defaultValue={"second-item"}
              options={options}
              placeholder="This is a default select"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        <div className="p-2">
          <div>
            <label className="block text-sm leading-5 font-medium text-red-500">
              Select with Error
            </label>
            <Select
              defaultValue={"second-item"}
              options={options}
              error
              placeholder="This is a default select"
              className="mt-1 block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        <div className="p-2">
          <div>
            <label className="block text-sm leading-5 font-medium text-gray-700">
              Select with disabled
            </label>
            <Select
              defaultValue={"second-item"}
              options={options}
              disabled
              placeholder="This is a default select"
              className="mt-1 block bg-gray-100 w-full pl-3 pr-10 py-2 text-gray-400 leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};



export default { title: 'Form Elements' };

export const WithInput = () => <InputContainer />;
export const WithSelect = () => <SelectContainer />;
export const WithCheckbox = () => <CheckboxContainer />;
export const WithSwitch = () => <SwitchContainer />;
export const WithRadio = () => <RadioContainer />;
export const WithTextArea = () => <TextareaContainer />;
