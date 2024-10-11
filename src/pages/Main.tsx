import InputSearch from '../components/InputSearch'
import { livros } from '../mock/livros'
import { useState } from 'react'
import LivroCard from '../components/Livro';
import { Link } from 'react-router-dom';

export default function Main() {
  const [inputValue, setInputValue] = useState('')
  const [books, setBooks] = useState(livros);
  console.log(inputValue)

  const filter = (value: string) => {
    const filtered = livros.filter(livro => livro.nome.toLowerCase().includes(value));
    setBooks(filtered)
    console.log(books)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    filter(inputValue.toLowerCase());
  };

  return (
    <main >
      <form onSubmit={handleSubmit} className="search" action="">
        <h1>Pesquise seu livro</h1>
        <InputSearch placeholder='Nome do livro' value={inputValue} setValue={setInputValue} />
      </form>

      <div className='books-container'>
        {books.map(livro => (
          <Link to={`/livro/${livro.nome.toLowerCase().replace(/\s+/g, "")}`}>
            <LivroCard nome={livro.nome} imagem={livro.imagem}/>
          </Link>
        ))}
      </div>
    </main>
  )
}
