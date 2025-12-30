import React from 'react';

export default function Button({
    label = 'Click me',
    onClick,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    className = '',
    children,
}) {
    const variantStyles = {
        succes: 'bg-green-500 hover:bg-green-600 text-white',
        primary: 'bg-blue-500 hover:bg-blue-600 text-white',
        secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
        danger: 'bg-red-500 hover:bg-red-600 text-white',
        transparent: 'bg-transparent text-black border border-gray-300 hover:bg-gray-100',
        dark: 'bg-black text-white'
    };

    const sizeStyles = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-md',
        large: 'px-6 py-3 text-lg',
    };

    const content = children !== undefined && children !== null ? children : label;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`rounded font-semibold transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        >
            {content}
        </button>
    );
}