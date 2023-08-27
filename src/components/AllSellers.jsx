// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";

// function AllSellers() {
//   const [sellers, setSellers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const sellersPerPage = 5;
//   const dispatch = useDispatch();
//   const [searchQuery, setSearchQuery] = useState(""); // New state variable for search query
//   window.onbeforeunload = function () {
//     sessionStorage.setItem("origin", window.location.href);
//   };

//   window.onload = function () {
//     if (window.location.href == sessionStorage.getItem("origin")) {
//       dispatch({ type: "IsLoggedIn" });
//     }
//   };

//   useEffect(() => {
//     axios.get("http://localhost:8080/api/sellers").then((resp) => {
//       setSellers(resp.data.data);
//     });
//   }, []);

//   const deleteSeller = (id) => {
//     let response = window.confirm("Are you sure to delete this supplier?");
//     if (response) {
//       axios.delete("http://localhost:8080/api/sellers/" + id).then((resp) => {
//         axios.get("http://localhost:8080/api/sellers").then((resp) => {
//           setSellers(resp.data.data);
//         });
//       });
//     }
//   };
  

//   // Calculate indexes for pagination
//   const indexOfLastSeller = currentPage * sellersPerPage;
//   const indexOfFirstSeller = indexOfLastSeller - sellersPerPage;
// //   const currentSellers = sellers.slice(indexOfFirstSeller, indexOfLastSeller);

//  // Apply search query filter
//  const filteredSellers = sellers.filter((seller) =>
//  seller.name.toLowerCase().includes(searchQuery.toLowerCase())
// );

// const currentSellers = filteredSellers.slice(
//  indexOfFirstSeller,
//  indexOfLastSeller
// );

// // Change page
// const paginate = (pageNumber) => setCurrentPage(pageNumber);
// const nextPage = () => setCurrentPage(currentPage + 1);
// const prevPage = () => setCurrentPage(currentPage - 1);

// // Event handler for search input
// const handleSearch = (e) => {
//  setSearchQuery(e.target.value);
//  setCurrentPage(1); // Reset to first page when search query changes
// };
//   return (
//     <div className="container-fluid text-white">
//       <h4 className="p-2 text-center text-dark">All Sellers</h4>

//       <div class="input-group">
//   <div class="form-outline-dark">
//     <input type="text" id="form1" className="form-control" placeholder="Search by name" 
//     value={searchQuery}
//     onChange={handleSearch}
//     /></div>
//   <button type="button" class="btn btn-primary">
//     <i class="fas fa-search"></i>
//   </button>
// </div>

//       <table className="table table-bordered table-striped table-light table-hover mt-2">
//         <thead className="table-dark">
//           <tr className="text-center">
//             <th>Id</th>
//             <th>Name</th>
//             <th>City</th>
//             <th>Phone</th>
//             <th>Email</th>
//             {/* <th>Action</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {currentSellers.map((x) => (
//             <tr key={x.id} className="text-center">
//               <td>{x.id}</td>
//               <td>{x.name}</td>
//               <td>{x.city}</td>
//               <td>{x.phone}</td>
//               <td>{x.email}</td>
              
//             </tr>
//           ))}
//         </tbody>
       
//       </table>
//       {/* Pagination */}
//       <div className="pagination text-center">
//         <button
//           onClick={prevPage}
//           disabled={currentPage === 1}
//           className="pagination-btn mr-2"
//         >
//           Prev
//         </button>
//         <li class="page-item active" aria-current="page">
//       <a class="page-link" href="#">Page {currentPage} of {Math.ceil(sellers.length / sellersPerPage)}</a>
//             </li>
//         <button
//           onClick={nextPage}
//           disabled={currentPage === Math.ceil(sellers.length / sellersPerPage)}
//           className="pagination-btn ml-2"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AllSellers;



import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function AllSellers() {
  const [sellers, setSellers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const sellersPerPage = 5;
  const dispatch = useDispatch();

  window.onbeforeunload = function () {
    sessionStorage.setItem("origin", window.location.href);
  };

  window.onload = function () {
    if (window.location.href === sessionStorage.getItem("origin")) {
      dispatch({ type: "IsLoggedIn" });
    }
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/sellers").then((resp) => {
      setSellers(resp.data.data);
    });
  }, []);

  const deleteSeller = (id) => {
    let response = window.confirm("Are you sure you want to delete this supplier?");
    if (response) {
      axios.delete(`http://localhost:8080/api/sellers/${id}`).then(() => {
        axios.get("http://localhost:8080/api/sellers").then((resp) => {
          setSellers(resp.data.data);
        });
      });
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? "fa-sort-up" : "fa-sort-down";
    }
    return "";
  };
  const getSortClassName = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? "bg-success" : "bg-info";
    }
    return "";
  };

  // Apply search query and sorting filters
  const filteredSellers = sellers.filter((seller) =>
    seller.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedSellers = [...filteredSellers].sort((a, b) => {
    if (sortConfig.direction === "ascending") {
      return a[sortConfig.key].localeCompare(b[sortConfig.key]);
    } else if (sortConfig.direction === "descending") {
      return b[sortConfig.key].localeCompare(a[sortConfig.key]);
    }
    return 0;
  });

  // Calculate indexes for pagination
  const indexOfLastSeller = currentPage * sellersPerPage;
  const indexOfFirstSeller = indexOfLastSeller - sellersPerPage;
  const currentSellers = sortedSellers.slice(indexOfFirstSeller, indexOfLastSeller);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <div className="container-fluid text-white">
      <h4 className="p-2 text-center text-dark">All Sellers</h4>

      <div className="input-group">
        <div className="form-outline-dark">
          <input
            type="text"
            id="form1"
            className="form-control"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <button type="button" className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>
      </div>

      <table className="table table-bordered table-striped table-light table-hover mt-2">
        <thead className="table-dark">
          <tr className="text-center">
            <th >
              Id
              
            </th>
            <th onClick={() => handleSort("name")} className={getSortClassName("name")}>
              Name{" "}
              {sortConfig.key === "name" && (
                <i className={`fas ${getSortIcon("name")}`} />
              )}
            </th>
            <th onClick={() => handleSort("city")} className={getSortClassName("city")}>
              City{" "}
              {sortConfig.key === "city" && (
                <i className={`fas ${getSortIcon("city")}`} />
              )}
            </th>
            <th>
              Phone
            </th>
            <th onClick={() => handleSort("email")} className={getSortClassName("email")}>
              Email{" "}
              {sortConfig.key === "email" && (
                <i className={`fas ${getSortIcon("email")}`} />
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentSellers.map((x) => (
            <tr key={x.id} className="text-center">
              <td >{x.id}</td>
              <td>{x.name}</td>
              <td>{x.city}</td>
              <td>{x.phone}</td>
              <td>{x.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination text-center">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="pagination-btn mr-2"
        >
          Prev
        </button>
        <li className="page-item active" aria-current="page">
          <a className="page-link" href="#">
            Page {currentPage} of {Math.ceil(sortedSellers.length / sellersPerPage)}
          </a>
        </li>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(sortedSellers.length / sellersPerPage)}
          className="pagination-btn ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllSellers;
