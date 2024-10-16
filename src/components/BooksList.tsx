import { Link } from "react-router-dom"
import { Livro } from "../mock/livros"
import LivroCard from "./Livro"
import Filter from "./Filter"
import { useState } from "react"

type Props = {
  livros: Livro []
  label?: string
}

export default function BooksList({livros, label}: Props) {
  const [books, setBooks] = useState(livros);

  return (
    <div>
      <Filter books={books} setBooks={setBooks}/>

      {label ? <h3 style={{paddingLeft: "30px"}}>{label}</h3> : ""}
      <div className='books-container'>
        {books.map((livro, index) => (
          <Link key={index} to={`/livro/${livro.nome.toLowerCase().replace(/\s+/g, "")}`}>
            <LivroCard nome={livro.nome} imagem={livro.imagem}/>
          </Link>
        ))}
      </div>
    </div>
  )
}