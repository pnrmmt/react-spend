import React from 'react'

function Product({ product, total, money, basket, setBasket }) {

  const basketItem = basket.find(item => item.id === product.id)


  const addBasket = () => {
    const checkBasket = basket.find(item => item.id === product.id)
    //  ürün daha önce eklenmiş
    if (checkBasket) {
      checkBasket.amount += 1
      setBasket([...basket.filter(item => item.id !== product.id), checkBasket])

    } else {
      setBasket([...basket, {
        id: product.id,
        amount: 1,
      }])
    }
  }

  const removeBasket = () => {
    const currentBasket = basket.find(item => item.id === product.id)
    const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
    currentBasket.amount -= 1
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent])

    } else {
      setBasket([...basketWithoutCurrent, currentBasket])

    }


  }
  return (
    <div className='product'>
      <img src={product.image} />
      <h6>{product.title}</h6>
      <div className='price'>${product.price}</div>
      <div className='actions'>
        <button className='sell-btn' disabled={!basketItem} onClick={removeBasket} >Sat</button>
        <span className='amount'>{(basketItem && basketItem.amount) || 0}</span>
        <button className='buy-btn' disabled={total + product.price > money} onClick={addBasket}>Satın Al</button>
      </div>

      <style jsx>{`
        .product{
            padding:10px;
            background:#fff;
            border:1px solid #ddd;
            margin-bottom:20px;
            width:24%
           
        }
        .product img{
          width:100%;
          
        }

        .product h6{
          font-size:15px;
          margin-bottom:10px;
        }

        .product .actions{
          display:flex;
          align-items:center;
        }

        .product .price{
          font-size:14px;
          color:green
        }

        .actions button{
          height:40px;
          padding:0 15px;
          cursor:pointer
     
        }
        .actions button[disabled]{
          opacity:.3;
          cursor:not-allowed;
     
        }

        .actions .amount{
          width:50px;
          text-align:center;
        }

        .actions .buy-btn{
          background:green;
          border-radius:10px;
          color:white;
          margin-top:10px
        }
        .actions .sell-btn{
          background:red;
          border-radius:10px;
          color:white;
          margin-top:10px
        }
        
        
        `}</style>


    </div>
  )
}

export default Product
