import { useContext } from 'react';
import { PersonContext } from '../contextapi.js/context';


function ProductList() {
  // const { products } = useContext(PersonContext);

  return (
    <div style={{ display: "flex", padding: "20px 20px 20px 0" }}>
      {/* {
        products.map((product, i) => (
          <div key={i} style={{ width: "400px", marginLeft: "20px" }}>
            <div className="card h-100 text-center p-4">
              <img src={product?.image} className="card-img-top" alt="title" height="250px" />
              <div className="card-body">
                <h5 className="card-title mb-0">{product?.title}</h5>
                <p className="card-text lead fw-bold">
                  <strong>Price: ${product?.price}</strong>
                </p>
              </div>
            </div>
          </div>
        ))
      } */}
    </div>
  );
}

export default ProductList;
