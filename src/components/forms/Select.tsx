import * as React from 'react';
import { Component } from 'react';
import classnames from "classnames";
import "../../../css/Select.css";

interface ISelectProps{
    icon:string
    value:any[]
    options:any[]
    disabled:boolean
    placeholder:string
    error:string
    defaultValue?: any
    onChange:Function
    className:string
}

export class Select extends Component<ISelectProps>{
  static defaultProps = {
    onChange: () => {},
    onBlur: () => {}
  };

  onEventChange = (e) => {
    const { props } = this;
    props['onChange'](e.target.value);
    return;
  }
  onEventBlur = (e) => {
    const { props } = this;
    props['onBlur'](e.target.value);
    return;
  }


  render() {
    const {
      icon,
      value,
      options,
      defaultValue,
      disabled,
      placeholder,
      error,
      onChange,
      className
    } = this.props;

    const resolvedClassName = classnames(
      "yum-ui-form-select",
      "form-select",
      { "has-icon-left": icon },
      { "is-error": error },
      { disabled: disabled },
      className
    );



    return (
      <select
        className={resolvedClassName}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        value={value}
        onChange={this.onEventChange}
        onBlur={this.onEventBlur}
      >
        {placeholder ? (
          <option  role="option" key="_placeholder" value={null} aria-selected={null}>
            {placeholder}
          </option>
        ) : null}
        {(options || []).map(option => {
          const optionValue = option.value || option.key;
          return (<option
            role="option"
            disabled={option.disabled}
            key={optionValue}
            value={optionValue}
            aria-selected={optionValue}
          >
            {option.label}
          </option>
        )})}
      </select>
    );
  }
}
