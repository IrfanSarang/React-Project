import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

interface ButtonProps {
    to?: string;
    href?: string;
    size?: 'default' | 'small' | 'big';
    inverse?: boolean;
    danger?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    const classNames = [
        'button',
        `button--${props.size || 'default'}`,
        props.inverse && 'button--inverse',
        props.danger && 'button--danger',
        props.className
    ].filter(Boolean).join(' ');

    if (props.href) {
        return (
            <a className={classNames} href={props.href}>
                {props.children}
            </a>
        );
    }

    if (props.to) {
        return (
            <Link className={classNames} to={props.to}>
                {props.children}
            </Link>
        );
    }

    return (
        <button
            className={classNames}
            type={props.type || 'button'}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
