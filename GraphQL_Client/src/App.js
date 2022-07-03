import ProductList from "./components/productList";
import ProductAddEdit from "./components/productAddEdit";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
// import { GlobalProvider, PersonContext } from "./contextapi.js/context";
// import { useQuery } from "@apollo/client";
// import { GET_ALL_PRODUCTS } from "./gqlOperation/queries";
// import { useContext } from "react";

function App() {
  // const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  // let { setProducts } = useContext(PersonContext);
  // if(loading) return <strong>please wait..</strong>
  // if (!loading) {
  //   setProducts(data.products);
  // }
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="/" element={ <ProductList />} />
          <Route path="/ProductAddEdit" element={<ProductAddEdit />} />
          <Route path="*" element={<center><br /><h3>Page not found: 404!</h3></center>} />
        </Routes>
    </>
  )
}

export default App;
