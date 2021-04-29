import React,{useState} from 'react'

const Modal = ({item,addtoCard,count}) => {
    const [quantity, setQuantity] = useState(1);
    return (
      <div
        className="modal fade "
        id={item.ref}
        data-backdrop="static"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Citrons</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-4">
                  <img
                    width="170"
                    height="170"
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/${item.category}/${item.image}`
                    }
                    alt="Citron"
                  />
                </div>
  
                <div className="col-sm">
                  <p className="lead">
                     {item.name}
                  </p>
                  <h3 className="price">€{item.price}/unit</h3> <br />
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      onClick={ () => setQuantity((quantity >1 )? count - 1:1)}
                      type="button"
                      className="btn btn-secondary">
                      -
                    </button>
                    <span className="btn btn-light qty">{quantity}</span>
                    <button
                      type="button"
                      onClick={ () => setQuantity(count + 1)}
                      className="btn btn-secondary">
                      +
                    </button>
                  </div>
                  <br />
                </div>
              </div>
            </div>
  
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={ () => addtoCard(quantity + 1) }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Modal