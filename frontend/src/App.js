import HomeScreen from "./screens/HomeScreen"
import ProductsScreen from "./screens/ProdutcsScreen"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import styles from "./App.module.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="products" element={<ProductsScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
