import { useParams } from 'react-router-dom';
import { Livro, livros } from '../mock/livros';
import Badge from '../components/Badge';
import { FaStar } from "react-icons/fa6";
import { useEffect, useState } from 'react';

export default function BookDetail() {
  const { nome } = useParams();
  const livro = livros.find(livro => livro.nome.toLowerCase().replace(/\s+/g, "") === nome);
  const [starColor, setStarColor] = useState("#ffffff");
  const [favoritos, setFavoritos] = useState<Livro[]>([]);

  useEffect(() => {
    const storedFavoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
    setFavoritos(storedFavoritos);
  }, []); 

  useEffect(() => {
    if (livro && favoritos.some((item: Livro) => item.id === livro.id)) {
      setStarColor("rgb(255, 217, 4)");
    } else {
      setStarColor("#ffffff");
    }
  }, [livro, favoritos]);

  if (!livro) {
    return <div>Livro não encontrado</div>;
  }

  function toggleFavorites() {
    if (livro) {
      if (!favoritos.some((item: Livro) => item.id === livro.id)) {
        const novosFavoritos = [...favoritos, livro];
        localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
        
        setFavoritos(novosFavoritos);
      } else {
        const novosFavoritos = favoritos.filter(item => item.id !== livro.id);
        localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
        
        setFavoritos(novosFavoritos);
      }
    }
  }
  
  return (
    <div className='book-detail'>
      <div className='book-data'>
        <div className='book-face'>
          <Badge icon={<FaStar fill={starColor} className='star-icon' size={25} stroke='#0000' strokeWidth="2"/>} action={toggleFavorites} />
          <img src={livro.imagem} alt={livro.nome} />
        </div>
        <div className='description'>
          <div>
            <h1>{livro.nome}</h1>
            <h4>Autor: {livro.autor}</h4>
            <h4>Categoria: {livro.categoria}</h4>
          </div>

          <div>
            <h4>Descrição:</h4>
            <p>{livro.descricao}</p>
          </div>

          <div className='actions'>
            <button className='btn-primary'>Já li</button>
            <button className='btn-primary'>Quero ler</button>
            <button className='btn-primary'>Favoritos</button>
          </div>
        </div>
      </div>
    </div>
  );
}
