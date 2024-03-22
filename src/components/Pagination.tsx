import "./Pagination.css"

interface PaginationProps{
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, setCurrentPage }: PaginationProps){

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const lastPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="pagination">
      <button onClick={lastPage}>-</button>
      <h3>{currentPage}</h3>
      <button onClick={nextPage}>+</button>
    </section>
  );
}