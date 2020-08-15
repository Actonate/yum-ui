import * as React from 'react';
import { Component } from 'react';
import classnames from 'classnames';
import '../../../css/Switch.css';

interface ISwitchProps{
    value:boolean
    size:number
    onChange:Function
    label:string
    disabled:boolean
    error:string
    className:string
    activeClassName:string,
}


export class Switch extends Component <ISwitchProps> {
  static defaultProps = {
    onChange: () => { },
    activeClassName: 'bg-blue-600'
  }

  onChange= (e) =>{
    const { onChange } = this.props;
    onChange(e.target.checked)
  }

  render() {
    const {
      value,
      size,
      onChange,
      label,
      disabled,
      error,
      className,
      activeClassName,
    } = this.props;

    const resolvedClassName = classnames(
      "yum-ui-form-switch",
      "form-switch",
      "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline",
      { "error": error },
      { disabled: disabled },
      size,
      className,
      value ? 'active' : '',
      value ? activeClassName : "bg-gray-200",
    );

    const toggleClassName = classnames(
      {'translate-x-0': !value },
      {'translate-x-5': value },
      'inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200'
    );

    return (
      <>
        <span
          role="checkbox"
          aria-checked={value}
          className={resolvedClassName}
        >
          <span aria-hidden="true" className={toggleClassName}></span>
        </span>
      </>
    );
  }
}
