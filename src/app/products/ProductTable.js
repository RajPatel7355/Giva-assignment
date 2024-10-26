// src/app/products/ProductTable.js or defined directly in page.js

// function ProductTable({ products, onDelete, onEdit }) {
//     return (
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.name}</td>
//               <td>{product.description}</td>
//               <td>${product.price}</td>
//               <td>{product.quantity}</td>
//               <td>
//                 <button
//                   className="btn btn-warning btn-sm"
//                   onClick={() => onEdit(product)}
//                 >
//                   Edit
//                 </button>{" "}
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => onDelete(product.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }
  
//   export default ProductTable;
  // src/app/products/ProductTable.js

function ProductTable({ products, onDelete, onEdit }) {
    return (
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm mr-2"
                    onClick={() => onEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  
  export default ProductTable;
  