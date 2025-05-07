
// import Cards from "./components/cards"
import { Routes,Route } from "react-router"
import DataFetching from "./components/nav-bar"
import Table from "./components/table"



function App() {
   

  return (
    <>
    <Routes>
    <Route path="/" element={< DataFetching/>} />
    <Route path="/table" element={< Table/>} />
   </Routes>

     {/* <DataFetching></DataFetching> */}
     {/* <Cards></Cards> */}
    </>
  )
}

export default App
