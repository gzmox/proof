import { formatDateTime } from '../js/utils';
import { getCityFromAddress } from '../js/utils';
import React from 'react';
import { IoEyeSharp } from "react-icons/io5";

const Card = ({ order }) => {

  
  return (

    <>


    <div className='order'>

      <p className='orderNumber'>
      <span>Order: </span>
      {order.order_number}
      {order.description}
      </p>

    

    <div className="card">

    

      <div className='cardHeader'>
        <p>{order.type}</p> <p></p>
      </div>

      <div className='cardbody'>

          <div className='destination'>

              <div className='nicknameDes'>
                <p className='pDest'>{order.destinations[0].nickname}</p>
              </div>
                  
            <div className='locationDes'>
                  <h5 className='city'>{getCityFromAddress(order.destinations[0].address)}</h5><p className='dateDes'>{formatDateTime(order.destinations[0].start_date).date}</p>
            </div>
                  
            <div className='dataDes'>
                  <p className='address'>{order.destinations[0].address}</p><p className='timeDes'>{formatDateTime(order.destinations[0].start_date).time}</p>
           </div>
           
           </div>


           <div className='destination'>

              <div className='nicknameDes'>
                <p className='pDest'>{order.destinations[1].nickname}</p>
              </div>
                  
            <div className='locationDes'>
                  <h5 className='city'>{getCityFromAddress(order.destinations[1].address)}</h5><p className='dateDes'>{formatDateTime(order.destinations[1].start_date).date}</p>
            </div>
                  
            <div className='dataDes'>
                  <p className='address'>{order.destinations[1].address}</p><p className='timeDes'>{formatDateTime(order.destinations[1].start_date).time}</p>
           </div>
           
           </div>
       
       </div>
       <div className='cardFooter'>

        
          <button id='pickup'>Start pickup in: </button>
        
       
        <button id='resume'>Resume  <IoEyeSharp/></button> 
        
        </div>
    

      

      


    </div>
    </div>
</>
  );
};

export default Card;
