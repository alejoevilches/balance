interface PaginationProps{
  setCurrentPage:(page:number)=>void,
  currentPage:number,
  totalPages:number
}

export function Pagination({setCurrentPage, currentPage, totalPages}:PaginationProps){
  const nextPage=()=>{
    if (currentPage!==totalPages){
      return setCurrentPage(currentPage++)
    }
  }

  return (
    <section className="pagination">
      <p onClick={nextPage}>+</p>
      <h3>{currentPage}</h3>
      <p>-</p>
    </section>
  )
}