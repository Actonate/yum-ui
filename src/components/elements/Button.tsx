import * as React from 'react';
import { Component } from 'react';
import classnames from 'classnames';
import "../../../css/Button.css";

interface IButtonProps {
    className?:string,
    onClick?:any,
    title?:string,
    children?:any,
    primary?:string,
    secondary?:string,
    disabled?:boolean,
    size?:string,
    success?:string
    error?:string
}

export class Button extends Component <IButtonProps> {

  constructor(props) {
    super(props);
  }
  
  static defaultProps = {
    onClick: () => {}
  };
  onClickAction = e => {

    const { disabled, onClick } = this.props;
    if (disabled) {
      return;
    }
      onClick(e);
    };


  render() {
    const {
      className,
      onClick,
      title,
      children,
      primary,
      secondary,
      disabled,
      size,
      success,
      error
    } = this.props;

    const resolvedClassName = classnames(
    "btn",
    "yum-ui-button",
    { "btn-primary": primary },
    { "btn-secondary": secondary },
    { "btn-disabled": disabled },
    { "btn-success": success },
    { "btn-error": error },
    { "btn-lg": size === "lg" },
    { "btn-sm": size === "sm" },
    className
    );

    return (
      <button
      title={title || ""}
      className={resolvedClassName}
      onClick={this.onClickAction}
      >
      {children}
      </button>
    );
 }
}


