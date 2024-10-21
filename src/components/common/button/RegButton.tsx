import React from 'react'
import './regButton.css'

interface RegButtonProps {
    text: string;         // Prop to accept the button text
    icon?: JSX.Element;    // Prop to accept the image source (optional)
}

const RegButton: React.FC<RegButtonProps> = ({ text, icon }) => {
  return (
    <div className="regButton" style={{ position: 'relative', cursor: 'pointer' }}>
    <span>{text}</span>
    {icon && <div className="button-icon">{icon}</div>}
</div>
  )
}

export default RegButton;