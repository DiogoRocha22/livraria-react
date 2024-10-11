type LivroCard = {
  nome: string,
  imagem: string
}

export default function LivroCard({nome, imagem}: LivroCard) {
  return (
    <div className="book">
      <img src={imagem} alt="capa" />
      <h4>{nome}</h4>
    </div>
  )
}
