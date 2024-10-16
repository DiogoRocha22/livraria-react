import React, { useState } from 'react'
import { Livro } from '../mock/livros';
import InputSearch from './InputSearch';

type Props = {
  books: Livro[],
  setBooks: (value: Livro[]) => void
}

export default function Filter({books, setBooks}: Props) {
  const [inputValue, setInputValue] = useState('')
  
  const filter = (value: string) => {
    const filtered = books.filter(livro => livro.nome.toLowerCase().includes(value));
    setBooks(filtered)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    filter(inputValue.toLowerCase());
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search" action="">
        <h1>Pesquise seu livro</h1>
        <InputSearch placeholder='Nome do livro' value={inputValue} setValue={setInputValue} />
      </form>
    </div>
  )
}