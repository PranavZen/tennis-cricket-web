import React from 'react'
import './RegButton.css'

interface RegButtonProps {
    text: string;         // Prop to accept the button text
    icon?: JSX.Element;    // Prop to accept the image source (optional)
    onClick: () => void;  // Function to handle the button click
}

const RegButton: React.FC<RegButtonProps> = ({ text, icon, onClick }) => {
  return (
    <div className="regButton" onClick={onClick} style={{ position: 'relative', cursor: 'pointer' }}>
    {icon && <div className="button-icon">{icon}</div>}
    <span>{text}</span>
    {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="right-arrow"
        style={{ width: '20px', height: '20px', marginLeft: '8px' }} // Adjust the arrow size and spacing
    >
        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg> */}
</div>
  )
}

export default RegButton;