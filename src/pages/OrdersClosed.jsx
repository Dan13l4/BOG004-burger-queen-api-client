import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getOrder, updateOrder } from '../api/Products';
import styles from '../components/stylesheets/Waiter.module.css';
import NavBar from '../components/NavBar';

const OrdersClosed = () => {

const [ordersClosed, setOrdersClosed] = useState([]);

const getOrdersClosed = () => {
    getOrder()
    .then((res) => {
        console.log('resdata',res.data)
        setOrdersClosed((res.data).filter((item)=> item.status.includes('closed')))
        console.log('ordersClosed', ordersClosed);
      })
    .catch()
    }

    useEffect(() => {
      getOrdersClosed();
    }, [])

    const timeToDeliver = (info) => {
        const dateNow = info.dateProcessed;
        const dateOrder = info.dateEntry;
        const restTime = (Date.parse(dateNow) - Date.parse(dateOrder))/1000/60;
        return restTime;
      }


    if (ordersClosed !== undefined && ordersClosed[0] !== undefined)
    return (
        <>
        <NavBar></NavBar>
        <h1 className={styles.h1}>Orders Closed</h1>
        <section className='container d-flex justify-content-center align-items-center h-100'>
        <div className='card-deck'>
            {ordersClosed.map((order) => (
            <section className='col-md-4' key={order.id}>
                <div className='card' style={{ marginBottom: 30 }}>
                    <div className='card-body'>
                    <h3 className={styles.Orderstext}>ORDER #{order.id}</h3>
                        <h6 className={styles.Orderstext}>Client: {order.client}</h6>
                        <p className={styles.Closed}>{order.status}</p>
                        <p className={styles.Closed}>Delivered: {order.dateProcessed}<br/>Cooking time: {timeToDeliver(order)} min</p>
                        <p className={styles.Orderstext}>Created: {order.dateEntry}</p>
                        <ul className="list-group list-group-flush">
                        <h6 className={styles.Orderstext}>Products</h6>
                            {order.products.map((item) => (
                            <li className="list-group-item">{item.product.name} {item.amount} Un ${item.product.price}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            ))}
            <div className={styles.SectionTotal}>
            <button className='btn btn-info btn-lg' style={{width:300, alignSelf:'center'}}><Link className={styles.Link} to="/">Sign Out</Link></button>
          </div>
        </div>
        </section>
        </>
        );
}

export default OrdersClosed;