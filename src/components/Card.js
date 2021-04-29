import React from 'react'
import Modal from '../components/Modal'

const Card = (props) => {
    const {item,addtoCard,count} = props
    return (
        <div className="col-sm-4">
          <div className="card">
            <img
              width="170"
              height="170"
              src={process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`}
              alt="citron"
            />
            <div className="card-body">
              <div className="row">
                <div className="col-sm-6">
                  <h4>{item.name}</h4>
                </div>
                <div className="col-sm-6">
                  <p>
                    €{item.price}/unit
                  </p>
                  <button className="btn btn-warning btn-sm" data-toggle="modal" data-target={`#${item.ref}`}>view product</button>
                </div>
              </div>
            </div>
          </div>
          <Modal item={item} addtoCard={addtoCard} count={count}/>
        </div>
      );
    };

    

export default Card