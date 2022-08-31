import HomeScreen from "./screens/HomeScreen"
import ProductsScreen from "./screens/ProdutcsScreen"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="products" element={<ProductsScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
  )
}

export default App
