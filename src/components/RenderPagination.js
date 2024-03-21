export function RenderPagination(currentPage, setCurrentPage, totalPages) {
    const pagesToShow = 5;
    const pages = [];
  
    const scrollToTop = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        window.scrollTo(0, scrollTop - Math.min(scrollTop, 300));
        requestAnimationFrame(scrollToTop);
      }
    };

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + pagesToShow - 1);
  
    if (totalPages > pagesToShow && currentPage > totalPages - 2) {
      startPage = totalPages - pagesToShow + 1;
      endPage = totalPages;
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => {
            setCurrentPage(i);
            scrollToTop()
          }}
          className={i === currentPage 
            ? "bg-[#7D33FF] px-1 s:px-2 text-white rounded border" 
            : "s:px-2 px-1 border rounded"
          }
        >
          {i}
        </button>
      );
    }
    const lastPage = (
      <button key={totalPages} 
        onClick={() => {
          setCurrentPage(totalPages)
          scrollToTop()
        }}
      >
        ... <span className="border s:px-2 px-1 rounded">{totalPages}</span>
      </button>
    );
  
    return (
      <>
      <div className="text-black">

        <div className="flex gap-2 items-center">
          {currentPage > 1 && (
            <button
              className="text-white font-roboto text-base leading-4 font-normal w-10 h-6 rounded bg-[#7D33FF] flex items-center justify-center"
              onClick={() => {
                setCurrentPage(currentPage - 1);
                scrollToTop()
              }}
            >
            <span className="-mt-[1.5px]">
              &#x2190; 
            </span>
            </button>
          )}
          <div className="flex items-end gap-1">
            {pages}
            {currentPage < totalPages - 2 && totalPages > 5 && lastPage}
          </div>
          {currentPage < totalPages && (
            <button
              className=" text-white font-roboto leading-4 text-base font-normal w-10 h-6 rounded bg-[#7D33FF] flex items-center justify-center"
              onClick={() => {
                setCurrentPage(currentPage + 1);
                scrollToTop()
              }}
            >
              <span className="-mt-[1.5px]">
                &#x2192;
              </span>
            </button>
          )}
        </div>
        </div>

      </>
    );
  }
  