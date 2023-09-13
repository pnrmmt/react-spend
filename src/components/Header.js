import React from 'react'

function Header({ total, money }) {
  return (
    <>
  
        {total > 0 && money-total !==0 && (
          <div className='header'>
            Harcayacak {money - total} $ paranız kaldı.

          </div>
        )}

        {total ===0 && (
          <div className='header'>
            Harcamak için $ {money}  paranız var

          </div>
        )}

        {money-total===0 && (
          <div className='header'>Paran bitti</div>
        )}

        <style jsx>{` 
        .header{
          position:sticky;
          top:0;
          background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,107,1) 35%, rgba(0,212,255,1) 100%);
          height:50px;
          display:flex;
          justify-content:center;
          align-items:center;
          color:#ffff;
          font-size:20px;
        }
        
        `

        }

        </style>


    

    </>
  )
}

export default Header
