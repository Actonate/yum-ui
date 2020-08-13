import * as React from 'react';
import { Component } from 'react';
import classnames from "classnames";
import "../../../css/Input.css";

interface InputProps {
    icon?: string;
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
        const { type } = props;

        if (type == "number") {
            props["onChange"](e.target.value ? parseFloat(e.target.value) : "");
            return;
        }

        props["onChange"](e.target.value);
        return;
    }

    onEventBlur = (e) => {
        const { props } = this;
        const { type } = props;

        if (type == "number") {
            props["onBlur"](e.target.value ? parseFloat(e.target.value) : "");
            return;
        }

        props["onBlur"](e.target.value);
        return;
    }

    render() {
        const {
            icon,
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
            "yum-ui-form-input",
            "form-input",
            { "has-icon-left": icon },
            { "is-error": error },
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
