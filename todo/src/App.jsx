import { Route, Router, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import Card from "./components/Card";



function App() {
  return (
    <>
<Routes>
  <Route path="/" element={<Card/>}/>
  <Route path="/add" element={<AddTodo/>}/>
</Routes>
      {/* <Card/> */}
      {/* <AddTodo/> */}
    </>
  )
}

export default App
