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
      title,
      children,
      disabled,
    } = this.props;

    const resolvedClassName = classnames(
      "btn yum-ui-button",
      "hover:border-gray-400 font-semibold border border-gray-400 rounded shadow px-4 py-2",
      className
    );

    return (
      <button
        title={title || ""}
        className={resolvedClassName}
        onClick={this.onClickAction}
        disabled={disabled}
      >
      {children}
      </button>
    );
 }
}
