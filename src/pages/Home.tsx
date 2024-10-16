import { livros } from '../mock/livros'
import BooksList from '../components/BooksList';

export default function Home() {

  return (
    <main >
      <BooksList livros={livros}/>
    </main>
  )
}
