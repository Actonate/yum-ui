
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
      error
    } = this.props;

    const resolvedClassName = classnames(
      'yum-ui-form-checkbox',
      'form-checkbox',
      { 'is-error': error },
      { 'disabled': disabled },
      className,
    );

    return (
      <label className={resolvedClassName}>
        {/* IMPORTANT: Known issue with tslint, refer - https://github.com/microsoft/tslint-microsoft-contrib/issues/749 */}
        {/* tslint:disable-next-line:react-a11y-input-elements */}
        <input
          placeholder=""
          type="checkbox"
          role="checkbox"
          checked={value}
          aria-checked={value}
          disabled={disabled}
          onChange={this.onChange}
        />
        <i className="form-icon"></i>
        {label && <span>{label}</span>}
      </label>
    );
  }
}

