// App.js ou App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import BookDetail from './pages/BookDetail';

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/livro/:nome" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}
