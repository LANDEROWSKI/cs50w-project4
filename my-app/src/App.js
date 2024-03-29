import { Container,Col,Row } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'


import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'


function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
        <h1>WELCOME TO JOJO-MARKET</h1>
        <Routes>
          <Route path='/' Component={HomeScreen} exact />
          <Route path="/product/:id" Component={ProductScreen} />
          <Route path="/carrito/:id?" Component={CartScreen} />
        </Routes>

        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
