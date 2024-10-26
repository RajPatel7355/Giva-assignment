// src/app/products/page.tsx (if using TypeScript)
// "use client";  // Ensure this is the very first line

// import { useState, useEffect } from 'react';

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const res = await fetch('http://localhost:5000/api/products');
//         const data = await res.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       } finally {
//         setIsLoading(false);  // Set loading to false after data is fetched
//       }
//     }

//     fetchProducts();
//   }, []);

//   if (isLoading) {
//     return <p>Loading products...</p>;  // Show loading message while fetching data
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Product List</h1>
//       <table className="table-auto w-full">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Quantity</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.length > 0 ? (
//             products.map((product) => (
//               <tr key={product.id}>
//                 <td>{product.name}</td>
//                 <td>{product.description}</td>
//                 <td>${product.price}</td>
//                 <td>{product.quantity}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No products available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// src/app/products/page.js

// "use client";

// import { useState, useEffect } from 'react';
// import ProductTable from './ProductTable';

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     quantity: ""
//   });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/api/products');
//       const data = await res.json();
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const deleteProduct = async (id) => {
//     await fetch(`http://localhost:5000/api/products/${id}`, {
//       method: 'DELETE'
//     });
//     setProducts(products.filter(product => product.id !== id));
//   };

//   const startEditing = (product) => {
//     setEditingProduct(product);
//     setFormData({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       quantity: product.quantity
//     });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     if (editingProduct) {
//       // Update existing product
//       await fetch(`http://localhost:5000/api/products/${editingProduct.id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });
//       setEditingProduct(null);
//     } else {
//       // Add new product
//       await fetch('http://localhost:5000/api/products', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });
//     }
//     setFormData({ name: "", description: "", price: "", quantity: "" });
//     fetchProducts();
//   };

//   if (isLoading) {
//     return <p>Loading products...</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Product List</h1>
//       <ProductTable products={products} onDelete={deleteProduct} onEdit={startEditing} />

//       <form onSubmit={handleFormSubmit} className="mt-4">
//         <h3>{editingProduct ? "Edit Product" : "Add New Product"}</h3>
//         <div className="form-group">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             required
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             name="description"
//             placeholder="Description"
//             value={formData.description}
//             onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={formData.price}
//             onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//             required
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="number"
//             name="quantity"
//             placeholder="Quantity"
//             value={formData.quantity}
//             onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
//             required
//             className="form-control"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary mt-2">
//           {editingProduct ? "Update Product" : "Add Product"}
//         </button>
//       </form>
//     </div>
//   );
// }
// src/app/products/page.js

// "use client";

// import { useState, useEffect } from 'react';
// import ProductTable from './ProductTable';

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     quantity: ""
//   });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/api/products');
//       const data = await res.json();
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const deleteProduct = async (id) => {
//     try {
//       await fetch(`http://localhost:5000/api/products/${id}`, {
//         method: 'DELETE'
//       });
//       setProducts(products.filter(product => product.id !== id));
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   const startEditing = (product) => {
//     setEditingProduct(product);
//     setFormData({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       quantity: product.quantity
//     });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     if (editingProduct) {
//       try {
//         await fetch(`http://localhost:5000/api/products/${editingProduct.id}`, {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(formData)
//         });
//         setEditingProduct(null);
//       } catch (error) {
//         console.error("Error updating product:", error);
//       }
//     } else {
//       try {
//         await fetch('http://localhost:5000/api/products', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(formData)
//         });
//       } catch (error) {
//         console.error("Error adding product:", error);
//       }
//     }
//     setFormData({ name: "", description: "", price: "", quantity: "" });
//     fetchProducts();
//   };

//   if (isLoading) {
//     return <p>Loading products...</p>;
//   }

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center text-primary mb-4">Product Management</h1>
      
//       <ProductTable products={products} onDelete={deleteProduct} onEdit={startEditing} />

//       <form onSubmit={handleFormSubmit} className="mt-4 border p-4 rounded bg-light">
//         <h3>{editingProduct ? "Edit Product" : "Add New Product"}</h3>
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             required
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Description</label>
//           <input
//             type="text"
//             name="description"
//             placeholder="Description"
//             value={formData.description}
//             onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Price</label>
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={formData.price}
//             onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//             required
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Quantity</label>
//           <input
//             type="number"
//             name="quantity"
//             placeholder="Quantity"
//             value={formData.quantity}
//             onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
//             required
//             className="form-control"
//           />
//         </div>
//         <button type="submit" className="btn btn-success mt-3">
//           {editingProduct ? "Update Product" : "Add Product"}
//         </button>
//         {editingProduct && (
//           <button
//             type="button"
//             onClick={() => setEditingProduct(null)}
//             className="btn btn-secondary mt-3 ml-3"
//           >
//             Cancel
//           </button>
//         )}
//       </form>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from 'react';
import ProductTable from './ProductTable';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: ""
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch all products from the backend
  const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/products');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Delete product and update state
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setProducts(products.filter(product => product.id !== id));
      } else {
        console.error("Failed to delete product:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Start editing and populate form data
  const startEditing = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity
    });
  };

  // Submit form data for add/edit functionality
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        // Update existing product
        const response = await fetch(`http://localhost:5000/api/products/${editingProduct.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          const updatedProduct = { ...editingProduct, ...formData };
          setProducts(products.map(product =>
            product.id === editingProduct.id ? updatedProduct : product
          ));
          setEditingProduct(null);
        } else {
          console.error("Failed to update product:", response.statusText);
        }
      } else {
        // Add new product
        const response = await fetch('http://localhost:5000/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          const newProduct = await response.json();
          setProducts([...products, newProduct]);
        } else {
          console.error("Failed to add product:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      // Reset form data
      setFormData({ name: "", description: "", price: "", quantity: "" });
    }
  };

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Product Management</h1>
      
      <ProductTable products={products} onDelete={deleteProduct} onEdit={startEditing} />

      <form onSubmit={handleFormSubmit} className="mt-4 border p-4 rounded bg-light">
        <h3>{editingProduct ? "Edit Product" : "Add New Product"}</h3>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success mt-3">
          {editingProduct ? "Update Product" : "Add Product"}
        </button>
        {editingProduct && (
          <button
            type="button"
            onClick={() => setEditingProduct(null)}
            className="btn btn-secondary mt-3 ml-3"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}
