
import * as React from 'react';
import { Component } from 'react';
import classnames from 'classnames';
import '../../../css/Checkbox.css';

interface ICheckboxProps {
  value:boolean
  onChange:Function
  label:string
  disabled:boolean
  className:string
  labelClassName:string
  error:string
}

export class Checkbox extends Component <ICheckboxProps>{
  static defaultProps = {
    onChange: () => { },
  }

  onChange = (e) => {
    const { onChange } = this.props;
    onChange(e.target.checked)
  }

  render() {
    const {
      value,
      onChange,
      label,
      disabled,
      className,
      error,
      labelClassName,
    } = this.props;

    const resolvedClassName = classnames(
      'yum-ui-form-checkbox',
      'form-checkbox',
      { 'error': error },
      { 'disabled': disabled },
      className,
    );

    const resolvedLabelClassName = classnames("form-label", "block", labelClassName);
  
    return (
      <>
        <input
          className={resolvedClassName}
          type="checkbox"
          role="checkbox"
          checked={value}
          aria-checked={value}
          disabled={disabled}
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
