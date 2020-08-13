import * as React from 'react';
import { Component } from 'react';
import classnames from 'classnames';
import '../../../css/Input.css';

interface ITextareaProps{
    value:string
    disabled:boolean
    rows:number
    placeholder:string
    onChange:Function
    error:string
    className:string
}

export class Textarea extends Component <ITextareaProps>{
  static defaultProps = {
    onChange: () => { },
  }
  onChange= (e) =>{
    const { onChange } = this.props;
    onChange(e.target.value)
  }
  render() {
    const {
      value,
      disabled,
      rows,
      placeholder,
      error,
      className,
    } = this.props;

    const resolvedClassName = classnames(
      'yum-ui-form-textarea',
      'form-input',
      'form-textarea',
      { 'is-error': error },
      { 'disabled': disabled },
      className,
    );

    return (
      <textarea
        disabled={disabled}
        className={resolvedClassName}
        placeholder={placeholder}
        value={value}
        onChange={this.onChange}
        rows={rows || 4}
      />
    );
  }
}
