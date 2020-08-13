import * as React from 'react';
import { Component } from 'react';
import classnames from 'classnames';

interface IIconProps {
    icon?:string,
    size?:number,
    color?:string,  
    onClick?:any,
    className?:string 
    fontSize?:number,
}

export class Icon extends Component <IIconProps> {
  constructor(props) {
    super(props);
  }
  
  static defaultProps = {
      size: 14
  };

  render() {
    const {
      icon,
      size,
      fontSize,
      color,
      className,
      onClick,
    } = this.props;

    const resolvedClassName = classnames(
      'icon',
      `icon--${icon}`,
      className,
    );

    return (
      <i role="link"
        style={{ fontSize: size, color }}
        className={resolvedClassName}
        onClick={onClick}
      />
    );
  }
}
