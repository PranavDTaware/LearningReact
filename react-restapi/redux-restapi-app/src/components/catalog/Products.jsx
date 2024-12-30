import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Details } from '../../redux/actions';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products); // Adjust according to your state structure

  useEffect(() => {
    if (products.length === 0) {
      dispatch(Details());
    }
  }, [dispatch, products.length]);

  return (
    <div>
      <h1>Product Management</h1>
      <h2>Product Information</h2>
      <Link to="/insert">Insert New Product</Link>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            Product: {product.title} |{' '}
            <Link to={`/products/${product.id}`}>Details</Link> |{' '}
            <Link to={`/update/${product.id}`}>Update</Link> |{' '}
            <Link to={`/delete/${product.id}`}>Delete</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
