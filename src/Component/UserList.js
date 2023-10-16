
// export default function App() {
//     const [todos, setTodos] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [filterCompleted, setFilterCompleted] = useState("");
  
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalTodos, setTotalTodos] = useState(0);
//     const todosPerPage = 10;
  
//     useEffect(() => {
//       axios
//         .get(`https://jsonplaceholder.typicode.com/todos`)
//         .then((response) => {
//           setTodos(response.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }, []);
  
    
//     const pageNumbers = [];
  
//     for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
//       pageNumbers.push(i);
//     }
  
  
//     const todosData = useMemo(() => {
//       let computedTodos = todos;
  
//       if (searchTerm) {
//           computedTodos = computedTodos.filter(
//               todo =>
//               todo.title.toLowerCase().includes(searchTerm.toLowerCase())
//           );
//       }
  
//       if (filterCompleted === "true") {
//         computedTodos = computedTodos.filter(
//             todo =>
//             filterCompleted === "true" && todo.completed === true
//         )
//     }
  
//     if (filterCompleted === "false") {
//       computedTodos = computedTodos.filter(
//           todo =>
//           filterCompleted === "false" && todo.completed === false
//       )
//     }
  
//       setTotalTodos(computedTodos.length);
  
//       //Current Page slice
//       return computedTodos.slice(
//           (currentPage - 1) * todosPerPage,
//           (currentPage - 1) * todosPerPage + todosPerPage
//       );
//   }, [todos, currentPage, searchTerm, filterCompleted]);
//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
//     const resetFilter = () => {
//       setSearchTerm("");
//       setFilterCompleted("");
//       setCurrentPage(1);
//     };
  
//     return (
//       <div className="container">
//         <h3>Filters</h3>
//         <div className="mb-3">
//           <label htmlFor="search" className="form-label">
//             Search
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="search"
//             placeholder="Search Title"
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setCurrentPage(1);
//             }}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="search" className="form-label">
//             Completed
//           </label>
//           <select
//             className="form-select"
//             value={filterCompleted}
//             onChange={(e) => {
//               setFilterCompleted(e.target.value);
//               setCurrentPage(1);
//             }}
//           >
//             <option defaultValue=""></option>
//             <option value="true">true</option>
//             <option value="false">false</option>
//           </select>
//         </div>
//         <div className="mb-3">
//           <button
//             type="button"
//             className="btn btn-danger btn-sm"
//             onClick={resetFilter}
//           >
//             Reset Filters
//           </button>
//         </div>