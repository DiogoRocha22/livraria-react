import { useParams } from 'react-router-dom';
import { livros } from '../mock/livros';

export default function BookDetail() {
  const { nome } = useParams();
  const livro = livros.find(livro => livro.nome.toLowerCase().replace(/\s+/g, "") === nome); 

  if (!livro) {
    return <div>Livro não encontrado</div>;
  }

  return (
    <div className='book-detail'>
      <div className='book-data'>
        <img src={livro.imagem} alt={livro.nome} />
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
            <button className='btn-primary'>Ja li</button>
            <button className='btn-primary'>Quero ler</button>
            <button className='btn-primary'>Favoritos</button>
          </div>
        </div>
      </div>
    </div>
  );
}