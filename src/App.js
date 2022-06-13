import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Category from './components/Category';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from './components/Product';
import Dashboard from './components/Dashboard'
import ProductCreate from './components/ProductCreate';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
          <Routes>
            <Route path='/' element={<Dashboard /> } />
            <Route path='/product' element={<Product /> } />
            <Route path='/category' element={<Category /> } />
            <Route path='/product/create' element={<ProductCreate /> } />
          </Routes>
        </Router>
    </QueryClientProvider>
  );
}

export default App;