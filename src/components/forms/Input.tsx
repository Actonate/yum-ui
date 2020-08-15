import * as React from 'react';
import { Component } from 'react';
import classnames from "classnames";
import "../../../css/Input.css";

interface InputProps {
    value?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    type?: string;
    placeholder?: string;
    error?: string;
    className?: string;
    min?: number;
    max?: number;
    maxLength?: number;
    onChange?: Function;
    onBlur?: Function;
}

export class Input extends Component<InputProps> {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        autoFocus: false,
        onChange: () => {},
        onBlur: () => {}
    };

    onEventChange = (e) =>{
        const { props } = this;
        const { type, onChange } = props;

        if (type == "number") {
            onChange(e.target.value ? parseFloat(e.target.value) : "");
            return;
        }

        onChange(e.target.value);
        return;
    }

    onEventBlur = (e) => {
        const { props } = this;
        const { type, onBlur } = props;

        if (type == "number") {
            onBlur(e.target.value ? parseFloat(e.target.value) : "");
            return;
        }

        onBlur(e.target.value);
        return;
    }

    render() {
        const {
            value,
            disabled,
            type,
            placeholder,
            autoFocus,
            error,
            className,
            min,
            max,
            maxLength
        } = this.props;

        const resolvedClassName = classnames(
            "form-input yum-ui-form-input",
            { "error": error },
            { disabled: disabled },
            className
        );

        return (
            <input
                className={resolvedClassName}
                type={type || "text"}
                placeholder={placeholder}
                disabled={disabled}
                autoFocus={autoFocus}
                value={value}
                min={min}
                max={max}
                maxLength={maxLength}
                onChange={this.onEventChange}
                onBlur={this.onEventBlur}
            />
        );
    }
}
