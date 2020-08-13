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
}


export class Switch extends Component <ISwitchProps> {
  static defaultProps = {
    onChange: () => { },
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
    } = this.props;

    const resolvedClassName = classnames(
      'yum-ui-form-switch',
      'form-switch',
      { 'is-error': error },
      { 'disabled': disabled },
      size,
      className,
    );

    return (
      <label className={resolvedClassName}>
        {/* IMPORTANT: Known issue with tslint, refer - https://github.com/microsoft/tslint-microsoft-contrib/issues/749 */}
        {/* tslint:disable-next-line:react-a11y-input-elements */}
        <input
          placeholder={label}
          role="checkbox"
          type="checkbox"
          aria-checked={value}
          checked={value}
          disabled={disabled}
          onChange={this.onChange}
        />
        <i className="form-icon"></i>
        {label && <span>{label}</span>}
      </label>
    );
  }
}
