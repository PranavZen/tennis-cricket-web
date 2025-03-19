import React from 'react'

interface ClaimButtonProps {
    text: string;
    onClick: () => void;
  }

const ClaimButton: React.FC<ClaimButtonProps> = ({ text, onClick }) => {
  return (
    <>
    <button type='button'>
        {text}
    </button>
    </>
  )
}

export default ClaimButton