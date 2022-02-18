import { Pagination } from "react-bootstrap";

const MyPagination = ({ page, setPage, dataLength }) => {
  let active = page;
  let items = [];
  const dataLimit = 50;

  for (let number = 1; number <= dataLength / dataLimit + 1; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="pag-container">
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
};

export default MyPagination;
