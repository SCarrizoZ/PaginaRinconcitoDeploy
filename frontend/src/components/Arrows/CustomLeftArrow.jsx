import {RiArrowRightSLine} from 'react-icons/ri';

export function CustomLeftArrow(onClick, ...rest) {
  // const {carouselState: { currentSlide, deviceType }} = rest;

  return (
    <button onClick={onClick.onClick}
      className='hover:bg-gray-100 cursor-pointer w-8 h-8 flex justify-center items-center  absolute top-1/2 left-4 max-w-4  bg-white rounded-lg shadow-xl py-10'>
      <RiArrowRightSLine className='text-2xl text-red-500 transform rotate-180' />
    </button>
  )
}