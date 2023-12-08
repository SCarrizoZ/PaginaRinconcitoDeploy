import { useState } from 'react';

const Heart = ({borderColor, bgColor}) => {
  const [isOpen, setIsOpen] = useState(false);

  const iconStyle = {
    cursor: 'pointer',
    fill: isOpen ? `${bgColor}` : 'none',
    transition: 'fill 0.3s',
  };

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className=' '
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-heart"
        width="2rem"
        height="2rem"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke={borderColor}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={iconStyle}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
    </div>
  );
};

export default Heart;
