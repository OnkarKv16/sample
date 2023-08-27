// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

// function MyProducts() {
//   const sellerId = sessionStorage.getItem("id");
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(5);
//   const [searchTerm, setSearchTerm] = useState("");
//   const dispatch = useDispatch();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/api/products?sellerId=${sellerId}`)
//       .then((resp) => {
//         console.log(resp.data);
//         setProducts(resp.data.data);
//         console.log(products);
//       });
//   }, [sellerId]);

//   window.onbeforeunload = function () {
//     sessionStorage.setItem("origin", window.location.href);
//   };

//   window.onload = function () {
//     if (window.location.href === sessionStorage.getItem("origin")) {
//       dispatch({ type: "IsLoggedIn" });
//     }
//   };

//   const deleteProduct = (productId) => {
//     let resp = window.confirm("Are you sure to delete this product?");
//     if (resp) {
//       axios
//         .delete(`http://localhost:8080/api/products/${productId}`)
//         .then((resp) => {
//           alert("Product deleted successfully");
//           axios
//             .get(`http://localhost:8080/api/products?sellerId=${sellerId}`)
//             .then((resp) => {
//               console.log(resp.data);
//               setProducts(resp.data.data);
//               console.log(products);
//             });
//         });
//     }
//   };

//   // Pagination Logic
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const nextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const prevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const filteredProducts = currentProducts.filter((product) =>
//     product.pname.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mt-4">
//       <div className="card shadow bg-light text-white">
//         <div className="card-body">
//           <h4 className="text-dark text-center">My Products</h4>
//           <div className="input-group">
//         <div className="form-outline-dark">
//           <input
//             type="text"
//             id="form1"
//             className="form-control"
//             placeholder="Search by name"
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>
//         <button type="button" className="btn btn-primary">
//           <i className="fas fa-search"></i>
//         </button>
//       </div>
//           <table className="table table-bordered table-dark table-striped table-hover mt-2">
//             <thead className="table-dark">
//               <tr className="text-center">
//                 <th>Name</th>
//                 <th>Category</th>
//                 <th>Brand Name</th>
//                 <th>Price</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredProducts.map((x) => (
//                 <tr key={x.productId} className="text-center">
//                   <td>
//                     <img
//                       width="100"
//                       src={"http://localhost:8080/" + x.photo}
//                       className="img-thumnail float-left text-center"
//                       alt={x.pname}
//                     />
//                     {x.pname}
//                   </td>
//                   <td>{x.categoryName}</td>
//                   <td>{x.brand}</td>
//                   <td>{x.price}</td>
//                   <td>
//                     <Link
//                       to={"/edit/" + x.productId}
//                       className="btn btn-primary btn-sm mr-2"
//                     >
//                       Edit
//                     </Link>
//                     <button
//                       onClick={() => deleteProduct(x.productId)}
//                       className="btn btn-danger btn-sm"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {/* Pagination */}
//           <div className="pagination text-center ">
//             <button
//               onClick={prevPage}
//               disabled={currentPage === 1}
//               className="pagination-btn mr-2"
//             >
//               Previous
//             </button>
//             {/* <span className="pagination-text bg-primary">
             
//             </span> */}
//             <li class="page-item active" aria-current="page">
//               <a class="page-link" href="#">
//                 {" "}
//                 Page {currentPage} of {Math.ceil(products.length / productsPerPage)}
//               </a>
//             </li>
//             <button
//               onClick={nextPage}
//               disabled={currentPage === Math.ceil(products.length / productsPerPage)}
//               className="pagination-btn ml-2"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyProducts;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

// function MyProducts() {
//   const sellerId = sessionStorage.getItem("id");
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(5);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortColumn, setSortColumn] = useState("");
//   const [sortDirection, setSortDirection] = useState("asc");
//   const dispatch = useDispatch();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/api/products?sellerId=${sellerId}`)
//       .then((resp) => {
//         console.log(resp.data);
//         setProducts(resp.data.data);
//         console.log(products);
//       });
//   }, [sellerId]);

//   window.onbeforeunload = function () {
//     sessionStorage.setItem("origin", window.location.href);
//   };

//   window.onload = function () {
//     if (window.location.href === sessionStorage.getItem("origin")) {
//       dispatch({ type: "IsLoggedIn" });
//     }
//   };

//   const deleteProduct = (productId) => {
//     let resp = window.confirm("Are you sure to delete this product?");
//     if (resp) {
//       axios
//         .delete(`http://localhost:8080/api/products/${productId}`)
//         .then((resp) => {
//           alert("Product deleted successfully");
//           axios
//             .get(`http://localhost:8080/api/products?sellerId=${sellerId}`)
//             .then((resp) => {
//               console.log(resp.data);
//               setProducts(resp.data.data);
//               console.log(products);
//             });
//         });
//     }
//   };

//   // Pagination Logic
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const nextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const prevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const handleSort = (column) => {
//     if (column === sortColumn) {
//       setSortDirection(sortDirection === "asc" ? "desc" : "asc");
//     } else {
//       setSortColumn(column);
//       setSortDirection("asc");
//     }
//   };

//   const sortedProducts = [...currentProducts].sort((a, b) => {
//     if (sortColumn === "name") {
//       return a.pname.localeCompare(b.pname);
//     } else if (sortColumn === "category") {
//       return a.categoryName.localeCompare(b.categoryName);
//     } else if (sortColumn === "brand") {
//       return a.brand.localeCompare(b.brand);
//     } else if (sortColumn === "price") {
//       return a.price - b.price;
//     }
//     return 0;
//   });

//   const sortedAndFilteredProducts = sortedProducts.filter((product) =>
//     product.pname.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mt-4">
//       <div className="card shadow bg-light text-white">
//         <div className="card-body">
//           <h4 className="text-dark text-center">My Products</h4>
//           <div className="input-group">
//             <div className="form-outline-dark">
//               <input
//                 type="text"
//                 id="form1"
//                 className="form-control"
//                 placeholder="Search by name"
//                 value={searchTerm}
//                 onChange={handleSearch}
//               />
//             </div>
//             <button type="button" className="btn btn-primary">
//               <i className="fas fa-search"></i>
//             </button>
//           </div>
//           <table className="table table-bordered table-dark table-striped table-hover mt-2">
//             <thead className="table-dark">
//               <tr className="text-center">
//                 <th>
//                   <button
//                     className="btn btn-link text-info"
//                     onClick={() => handleSort("name")}
//                   >
//                     Name
//                   </button>
//                 </th>
//                 <th>
//                   <button
//                     className="btn btn-link text-white"
//                     onClick={() => handleSort("category")}
//                   >
//                     Category
//                   </button>
//                 </th>
//                 <th>
//                   <button
//                     className="btn btn-link text-white"
//                     onClick={() => handleSort("brand")}
//                   >
//                     Brand Name
//                   </button>
//                 </th>
//                 <th>
//                   <button
//                     className="btn btn-link text-white"
//                     onClick={() => handleSort("price")}
//                   >
//                     Price
//                   </button>
//                 </th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sortedAndFilteredProducts.map((x) => (
//                 <tr key={x.productId} className="text-center">
//                   <td>
//                     <img
//                       width="100"
//                       src={"http://localhost:8080/" + x.photo}
//                       className="img-thumnail float-left text-center"
//                       alt={x.pname}
//                     />
//                     {x.pname}
//                   </td>
//                   <td>{x.categoryName}</td>
//                   <td>{x.brand}</td>
//                   <td>{x.price}</td>
//                   <td>
//                     <Link
//                       to={"/edit/" + x.productId}
//                       className="btn btn-primary btn-sm mr-2"
//                     >
//                       Edit
//                     </Link>
//                     <button
//                       onClick={() => deleteProduct(x.productId)}
//                       className="btn btn-danger btn-sm"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {/* Pagination */}
//           <div className="pagination text-center ">
//             <button
//               onClick={prevPage}
//               disabled={currentPage === 1}
//               className="pagination-btn mr-2"
//             >
//               Previous
//             </button>
//             {/* <span className="pagination-text bg-primary">
             
//             </span> */}
//             <li className="page-item active" aria-current="page">
//               <a className="page-link" href="#">
//                 {" "}
//                 Page {currentPage} of{" "}
//                 {Math.ceil(products.length / productsPerPage)}
//               </a>
//             </li>
//             <button
//               onClick={nextPage}
//               disabled={
//                 currentPage === Math.ceil(products.length / productsPerPage)
//               }
//               className="pagination-btn ml-2"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyProducts;



import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function MyProducts() {
  const sellerId = sessionStorage.getItem("id");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products?sellerId=${sellerId}`)
      .then((resp) => {
        console.log(resp.data);
        setProducts(resp.data.data);
        console.log(products);
      });
  }, [sellerId]);

  window.onbeforeunload = function () {
    sessionStorage.setItem("origin", window.location.href);
  };

  window.onload = function () {
    if (window.location.href === sessionStorage.getItem("origin")) {
      dispatch({ type: "IsLoggedIn" });
    }
  };

  const deleteProduct = (productId) => {
    let resp = window.confirm("Are you sure to delete this product?");
    if (resp) {
      axios
        .delete(`http://localhost:8080/api/products/${productId}`)
        .then((resp) => {
          alert("Product deleted successfully");
          axios
            .get(`http://localhost:8080/api/products?sellerId=${sellerId}`)
            .then((resp) => {
              console.log(resp.data);
              setProducts(resp.data.data);
              console.log(products);
            });
        });
    }
  };

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection((prevDirection) =>
        prevDirection === "asc" ? "desc" : "asc"
      );
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedProducts = [...currentProducts].sort((a, b) => {
    if (sortColumn === "name") {
      return a.pname.localeCompare(b.pname);
    } else if (sortColumn === "category") {
      return a.categoryName.localeCompare(b.categoryName);
    } else if (sortColumn === "brand") {
      return a.brand.localeCompare(b.brand);
    } else if (sortColumn === "price") {
      return a.price - b.price;
    }
    return 0;
  });

  const sortedAndFilteredProducts = sortedProducts.filter((product) =>
    product.pname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="card shadow bg-light text-white">
        <div className="card-body">
          <h4 className="text-dark text-center">My Products</h4>
          <div className="input-group">
            <div className="form-outline-dark">
              <input
                type="text"
                id="form1"
                className="form-control"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <button type="button" className="btn btn-primary">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <table className="table table-bordered table-dark table-striped table-hover mt-2">
            <thead className="table-dark">
              <tr className="text-center">
                <th>
                  <button
                    className={`btn btn-link text-info ${
                      sortColumn === "name" ? "sorted" : ""
                    }`}
                    onClick={() => handleSort("name")}
                  >
                    Name{" "}
                    {sortColumn === "name" && (
                      <i
                        className={`fas ${
                          sortDirection === "asc"
                            ? "fa-sort-up"
                            : "fa-sort-down"
                        }`}
                      ></i>
                    )}
                  </button>
                </th>
                <th>
                  <button
                    className={`btn btn-link text-info ${
                      sortColumn === "category" ? "sorted" : ""
                    }`}
                    onClick={() => handleSort("category")}
                  >
                    Category{" "}
                    {sortColumn === "category" && (
                      <i
                        className={`fas ${
                          sortDirection === "asc"
                            ? "fa-sort-up"
                            : "fa-sort-down"
                        }`}
                      ></i>
                    )}
                  </button>
                </th>
                <th>
                  <button
                    className={`btn btn-link text-info ${
                      sortColumn === "brand" ? "sorted" : ""
                    }`}
                    onClick={() => handleSort("brand")}
                  >
                    Brand Name{" "}
                    {sortColumn === "brand" && (
                      <i
                        className={`fas ${
                          sortDirection === "asc"
                            ? "fa-sort-up"
                            : "fa-sort-down"
                        }`}
                      ></i>
                    )}
                  </button>
                </th>
                <th>
                  <button
                    className={`btn btn-link text-info ${
                      sortColumn === "price" ? "sorted" : ""
                    }`}
                    onClick={() => handleSort("price")}
                  >
                    Price{" "}
                    {sortColumn === "price" && (
                      <i
                        className={`fas ${
                          sortDirection === "asc"
                            ? "fa-sort-up"
                            : "fa-sort-down"
                        }`}
                      ></i>
                    )}
                  </button>
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedAndFilteredProducts.map((x) => (
                <tr key={x.productId} className="text-center">
                  <td>
                    <img
                      width="100"
                      src={"http://localhost:8080/" + x.photo}
                      className="img-thumnail float-left text-center"
                      alt={x.pname}
                    />
                    {x.pname}
                  </td>
                  <td>{x.categoryName}</td>
                  <td>{x.brand}</td>
                  <td>{x.price}</td>
                  <td>
                    <Link
                      to={"/edit/" + x.productId}
                      className="btn btn-primary btn-sm mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteProduct(x.productId)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="pagination text-center ">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="pagination-btn mr-2"
            >
              Previous
            </button>
            {/* <span className="pagination-text bg-primary">
             
            </span> */}
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">
                {" "}
                Page {currentPage} of{" "}
                {Math.ceil(products.length / productsPerPage)}
              </a>
            </li>
            <button
              onClick={nextPage}
              disabled={
                currentPage === Math.ceil(products.length / productsPerPage)
              }
              className="pagination-btn ml-2"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProducts;




