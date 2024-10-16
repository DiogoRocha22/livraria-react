// App.js ou App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import BookDetail from './pages/BookDetail';
import Favorites from './pages/Favorites';

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livro/:nome" element={<BookDetail />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
    </Router>
  );
}
