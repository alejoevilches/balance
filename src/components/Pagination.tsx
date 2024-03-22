import "./Pagination.css"

interface PaginationProps{
  setCurrentPage:(page:number)=>void,
  currentPage:number,
  totalPages:number
}

export function Pagination({setCurrentPage, currentPage, totalPages}: PaginationProps){

  const nextPage=()=>{
    if (currentPage !== totalPages){
      setCurrentPage(currentPage+1)
    }
  }

  const lastPage=()=>{
    if (currentPage !== 1){
      setCurrentPage(currentPage-1)
    }
  }

  return (
    <section className="pagination">
      <button onClick={nextPage}>+</button>
      <h3>{currentPage}</h3>
      <button onClick={lastPage}>-</button>
    </section>
  )
}