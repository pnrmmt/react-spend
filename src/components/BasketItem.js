import React from 'react'

function BasketItem({item,product}) {
  return (
    <>
     <li className='basket-li'>
        {product.title}<span>x{item.amount}</span>
      
    </li>

    <style jsx>{`
    .basket-li span{
      font-weight:lighter;

    }
    .basket-li{
      font-weight:bold
    }
    
    
    `
    }

    </style>
    </>
  )
    
   
   
}

export default BasketItem
