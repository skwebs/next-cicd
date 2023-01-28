import React from 'react'

const ConstantWideLayout = ({ children, className = "" }) => {
    return (
        <div className={`${className} max-w-7xl mx-auto `}>{children}</div>
    )
}

export default ConstantWideLayout
