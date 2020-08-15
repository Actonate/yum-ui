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
    labelClassName:string
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
      labelClassName,
    } = this.props;

    const resolvedClassName = classnames(
      'yum-ui-form-radio',
      'form-radio',
      { 'is-error': error },
      { 'disabled': disabled },
      className,
    );

    const resolvedLabelClassName = classnames(
      'form-label',
      'block',
      labelClassName
    );

    return (
      <>
        <input
          placeholder={label}
          role="radio"
          name={name}
          className={resolvedClassName}
          type="radio"
          disabled={disabled}
          checked={value}
          aria-checked={value}
          onChange={this.onChange}
        />
        {label && (
          <label for="push_everything" className="ml-3">
            <span className={resolvedLabelClassName}>{label}</span>
          </label>
        )}
      </>
    );
  }
}
