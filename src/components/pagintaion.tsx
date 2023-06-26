type PaginationProps = {
  onPaginate: (page: number) => void;
};

const Pagination = ({ onPaginate }: PaginationProps) => {
  return (
    <div className="pagination">
      {Array(3)
        .fill("")
        .map((page, index) => {
          return (
            <span
              key={index}
              onClick={() => onPaginate(index + 1)}
              className="pagination__item isActive"
            >
              {index + 1}
            </span>
          );
        })}
    </div>
  );
};

export default Pagination;
