import React from 'react'
import BasketItem from './BasketItem'

function Basket({ basket, resetBasket, products, total }) {
    return (
        <>
            <div className='basket-container container'>
                <h3>Sepet</h3>
                <ul>
                    {basket.map(item => (
                        <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)} />
                    ))}


                </ul>


                <div className='total'>
                    Toplam: ${total}
                </div>
                <button className='basket-reset-btn' onClick={resetBasket}>Sepeti Sıfırla</button>

            </div>

            <style jsx>{`
            .basket-container{
                padding:20px;
                background :#fff;
            
            }
            .basket-container .total{
                margin-top:10px;
                font-weight:bold;
                text-align:right;
                color:green;
            }
            .basket-reset-btn{
                height:40px;
                padding:10px;
                background:purple;
                color:white;
                cursor:pointer;
                border-radius:20px
            }

            .basket-container h3{
                color:grey
            }
        
        `}




            </style>






        </>
    )
}

export default Basket
