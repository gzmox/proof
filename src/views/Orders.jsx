
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import fetchDataUpcoming from '../js/orders'; 

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const data = await fetchDataUpcoming();
      setOrders(data);
    };

    fetchDataFromApi();
  }, []);

  return (
    <div className="orders-list">
      {orders.map((order) => (
        <Card key={order._id} order={order} />
      ))}
    </div>
  );
};

export default Orders;
