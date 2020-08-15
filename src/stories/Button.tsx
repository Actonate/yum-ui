import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../components/elements/Button';
import classNames from "classnames";
import "@tailwindcss/ui/dist/tailwind-ui.css";

const baseClassName = "hover:border-gray-400 font-semibold border border-gray-400 rounded shadow";
const defaultClassName = "bg-white hover:bg-gray-100 text-gray-800";
const primaryClassName = "bg-blue-500 hover:bg-blue-600 text-white";
const secondaryClassName = "bg-green-500 hover:bg-green-600 text-white";
const disabledClassName = "bg-gray-300 text-gray-800";
const mdClassName = "py-2 px-4";
const lgClassName = "py-4 px-6 text-lg";
const smClassName = "py-1 px-2 text-sm";

const DefaultButton = (props) => {
  return (
    <div className="container">
      <div className="flex">
        <div className="p-2">
          <Button
            title="Default"
            className={classNames(baseClassName, defaultClassName, mdClassName)}
          >
            Default
          </Button>
        </div>
      </div>
    </div>
  );
}


const DisabledButton = (props) => {
  return (
    <div className="container">
      <div className="flex">
        <div className="p-2">
           <Button
            disabled
            title="Disabled"
            className={classNames(
              baseClassName,
              disabledClassName,
              mdClassName
            )}
          >
            Disabled
          </Button>
        </div>
      </div>
    </div>
  );
}

export default { title: "Button" };
export const Default = () => <DefaultButton />;
export const Disabled = () => <DisabledButton />;
