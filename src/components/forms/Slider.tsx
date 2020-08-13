import * as React from 'react';
import { Component } from 'react';
import '../../../css/Slider.css';

interface ISliderProps{
    disabled:boolean
    value:string
    min?:number
    max?:number
}

export class Slider extends Component <ISliderProps> {
  static defaultProps = {
    onChange: () => { },
  }

  render() {
    const { disabled, value, min, max } = this.props;

    return (
      <div className="yum-ui-form-slider">
        <input role="slider" 
        value={value} 
        className="slider" 
        type="range" 
        min={min || 0} 
        max={max || 100}
        aria-valuemax={max || 100}
        aria-valuemin={min || 0}
        aria-valuenow={parseInt(value)}></input>
      </div>
    );
  }
}
