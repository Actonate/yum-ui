import * as React from 'react';
import { Component } from 'react';
import classnames from "classnames";
import '../../../css/Radio.css';

interface IRadioProps{
    name:string
    label:string
    disabled:boolean
    value:boolean
    error:string
    onChange:Function
    className:string
}


export class Radio extends Component <IRadioProps>{

  onChange= (e) =>{
    const { onChange } = this.props;
    onChange(e.target.checked)
  }

  render() {
    const {
      name,
      label,
      disabled,
      value,
      error,
      onChange,
      className,
    } = this.props;

    const resolvedClassName = classnames(
      'yum-ui-form-radio',
      'form-radio',
      { 'is-error': error },
      { 'disabled': disabled },
      className,
    );

    return (
      <label className={resolvedClassName}>
        {/* IMPORTANT: Known issue with tslint, refer - https://github.com/microsoft/tslint-microsoft-contrib/issues/749 */}
        {/* tslint:disable-next-line:react-a11y-input-elements */}
        <input
          placeholder={label}
          role="radio"
          name={name}
          type="radio"
          disabled={disabled}
          checked={value}
          aria-checked={value}
          onChange={this.onChange}
        />
        <i className="form-icon"></i>
        {label && <span>{label}</span>}
      </label>
    );
  }
}

