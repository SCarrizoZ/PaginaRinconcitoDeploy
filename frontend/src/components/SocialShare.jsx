import React from 'react'

import { 
  FacebookIcon, 
  TwitterIcon, 
  WhatsappIcon, 

  FacebookShareButton, 
  TwitterShareButton,
  WhatsappShareButton,
  
  
} from 'react-share'


export const SocialShare = () => {
  return (
    <>

      <div className=' flex container p-2  text-center'>
        
        {/* i want to share products by url . Only for whatsapp and ffacebook */}
        <div className='p-1 '>
          <div className='font-medium'>
            Compartir en redes sociales
          </div>
          <div className='flex  justify-center gap-2'>
            <FacebookShareButton className='order-2'  url={"https://www.rinconcitomusical.com/product-page/guitarra-el%C3%A9ctrica-ibanez-ps60-iceman-black"} quote={"Check out this product"}>
              <FacebookIcon size={36} className='rounded-lg hover:scale-105 transition-transform duration-300' />
            </FacebookShareButton>
            <WhatsappShareButton className='order-1' url={window.location.href} quote={"Check out this product"}>
              <WhatsappIcon size={36} className='rounded-lg hover:scale-105 transition-transform duration-300' />
            </WhatsappShareButton>
            <TwitterShareButton className='order-3' url={window.location.href} quote={"Check out this product"}>
              <TwitterIcon size={36} className='rounded-lg hover:scale-105 transition-transform duration-300' />
            </TwitterShareButton>
          </div>
        </div>
        


      


      </div>
    </>
  )
}
