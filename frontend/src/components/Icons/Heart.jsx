import { useState } from 'react';

const Heart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconStyle = {
    cursor: 'pointer',
    fill: isOpen ? 'red' : 'none',
    transition: 'fill 0.3s',
  };

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className='flex relative hidden md:block'
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-heart"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="red"
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