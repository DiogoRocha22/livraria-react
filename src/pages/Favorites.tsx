import BooksList from "../components/BooksList";

export default function Favorites() {
  const favoritesBooks = JSON.parse(localStorage.getItem("favoritos")!) || []

  return (
    <div>
      <BooksList label="Livros Favoritos:" livros={favoritesBooks}/>
    </div>
  )
}