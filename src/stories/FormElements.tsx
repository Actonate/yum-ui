import React, { Component } from "react";
import { Checkbox } from "../components/forms/Checkbox";
import { Radio } from "../components/forms/Radio";
import { Switch } from "../components/forms/Switch";
import { Input } from "../components/forms/Input";
import { Select } from "../components/forms/Select";
import { Textarea } from "../components/forms/Textarea";

const CheckboxContainer = props => (
  <div className="container">
    <div className="columns">
      <div className="column col-12">
        <Checkbox label="This is checked" value={true} onChange={e => {}} />
        <Checkbox label="This is unchecked" value={false} onChange={e => {}} />
        <Checkbox
          label="This has an error"
          error={true}
          value={true}
          onChange={e => {}}
        />
        <Checkbox
          label="This has an error"
          error={true}
          value={false}
          onChange={e => {}}
        />
        <Checkbox
          label="This is disabled"
          disabled={true}
          value={true}
          onChange={e => {}}
        />
        <Checkbox
          label="This is disabled"
          disabled={true}
          value={false}
          onChange={e => {}}
        />
      </div>
    </div>
  </div>
);

const RadioContainer = props => (
  <div className="container">
    <div className="columns">
      <div className="column col-12">
        <Radio label="This is selected" value={true} onChange={e => {}} />
        <Radio label="This is not selected" value={false} onChange={e => {}} />
        <Radio
          label="This has an error"
          error={true}
          value={true}
          onChange={e => {}}
        />
        <Radio
          label="This has an error"
          error={true}
          value={false}
          onChange={e => {}}
        />
        <Radio
          label="This is disabled"
          disabled={true}
          value={true}
          onChange={e => {}}
        />
        <Radio
          label="This is disabled"
          disabled={true}
          value={false}
          onChange={e => {}}
        />
      </div>
    </div>
  </div>
);

const SwitchContainer = props => (
  <div className="container">
    <div className="columns">
      <div className="column col-3">
        <Switch label="This is enabled" value={true} onChange={e => {}} />
        <Switch label="This is not enabled" value={false} onChange={e => {}} />
        <Switch
          label="This has an error"
          error={true}
          value={false}
          onChange={e => {}}
        />
        <Switch
          label="This has an error"
          error={true}
          value={true}
          onChange={e => {}}
        />
        <Switch
          label="This is disabled"
          disabled={true}
          value={true}
          onChange={e => {}}
        />
        <Switch
          label="This is disabled"
          disabled={true}
          value={false}
          onChange={e => {}}
        />
      </div>
      <div className="column col-3">
        <Switch
          label="This is enabled"
          value={true}
          onChange={e => {}}
          size="mini"
        />
        <Switch
          label="This is not enabled"
          value={false}
          onChange={e => {}}
          size="mini"
        />
        <Switch
          label="This has an error"
          error={true}
          value={false}
          onChange={e => {}}
          size="mini"
        />
        <Switch
          label="This has an error"
          error={true}
          value={true}
          onChange={e => {}}
          size="mini"
        />
        <Switch
          label="This is disabled"
          disabled={true}
          value={true}
          onChange={e => {}}
          size="mini"
        />
        <Switch
          label="This is disabled"
          disabled={true}
          value={false}
          onChange={e => {}}
          size="mini"
        />
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
      <div className="container p-16">
        <div className="columns pb-16">
          <div className="column col-3">
            <Input
              placeholder="This is a default input"
              value={this.state.value}
              onChange={e => this.setState({ value: e })}
            />
          </div>
        </div>
        <div className="columns pb-16">
          <div className="column col-3">
            <Input
              placeholder="This is a default input (with value)"
              value="Hello World"
            />
          </div>
        </div>
        <div className="columns pb-16">
          <div className="column col-3">
            <Input
              placeholder="This has an error"
              error={true}
              value="Hello World"
            />
          </div>
        </div>
        <div className="columns pb-16">
          <div className="column col-3">
            <Input
              placeholder="This is a disabled input"
              disabled={true}
              value="Hello World"
            />
          </div>
        </div>
        <div className="columns pb-16">
          <div className="column col-3">
            <Input
              placeholder="This is a number input"
              type="number"
              min={1}
              max={100}
              value="Hello World"
            />
          </div>
        </div>
      </div>
    );
  }
}

const TextareaContainer = props => (
  <div className="container p-16">
    <div className="columns pb-16">
      <div className="column col-3">
        <Textarea placeholder="This is a default textarea" />
      </div>
    </div>
    <div className="columns pb-16">
      <div className="column col-3">
        <Textarea error={true} placeholder="This is a bigger textarea" />
      </div>
    </div>
    <div className="columns pb-16">
      <div className="column col-3">
        <Textarea disabled placeholder="This is a bigger textarea" />
      </div>
    </div>
    <div className="columns pb-16">
      <div className="column col-3">
        <Textarea rows={10} placeholder="This is a bigger textarea" />
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
    <div className="container p-16">
      <div className="columns pb-16">
        <div className="column col-3">
          <Select defaultValue={'second-item'} options={options} placeholder="This is a default select" />
        </div>
      </div>
      <div className="columns pb-16">
        <div className="column col-3">
          <Select
            options={options}
            placeholder="This is a default select (with value)"
            value="first-item"
          />
        </div>
      </div>
      <div className="columns pb-16">
        <div className="column col-3">
          <Select
            options={options}
            placeholder="This has an error"
            error={true}
            value="first-item"
          />
        </div>
      </div>
      <div className="columns pb-16">
        <div className="column col-3">
          <Select
            options={options}
            placeholder="This is a disabled select"
            disabled={true}
            value="first-item"
          />
        </div>
      </div>
    </div>
  );
};



export default { title: 'Form Elements' };

export const WithInput = () => <InputContainer />;
export const WithSelect = () => <SelectContainer />;
export const WithCheckbox = () => <CheckboxContainer />;
export const WithRadio = () => <RadioContainer />;
export const WithSwitch = () => <SwitchContainer />;
export const WithTextArea = () => <TextareaContainer />;
