import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../components/elements/Button';

const ButtonColors = (props) => {
  return (
    <div className="container">
      <div className="columns p-16">
        <div className="mr-8">
          <Button>Default</Button>
        </div>
        <div className="mr-8">
          <Button primary>Primary</Button>
        </div>
        <div className="mr-8">
          <Button secondary>Secondary</Button>
        </div>
        <div className="mr-8">
          <Button disabled>Disabled</Button>
        </div>
        <div className="mr-8">
          <Button success>Success</Button>
        </div>
        <div className="mr-8">
          <Button error>Error</Button>
        </div>
      </div>
    </div>
  )
}

const ButtonSizes = (props) => {
  return (
    <div className="container">
      <div className="columns p-16">
        <div className="mr-8">
          <Button primary size="sm">Primary</Button>
        </div>
        <div className="mr-8">
          <Button>Default</Button>
        </div>
        <div className="mr-8">
          <Button secondary size="lg">Secondary</Button>
        </div>
      </div>
    </div>
  )
}


export default { title: "Button" };

export const WithColorVariations = () => <ButtonColors />;
export const WithSizeVariations = () => <ButtonSizes />;

