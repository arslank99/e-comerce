import React from "react";

const Pagination = (props) => {
  const { postPerPage, totalPost, paginate } = props;
  const PageNumbers = [];
  const int = Math.ceil(totalPost / postPerPage);
  if (int === 1) {
    return null;
  }
  for (let i = 1; i <= int; i++) {
    PageNumbers.push(i);
  }

  return (
    <div>
      <nav aria-label="..." className="mt-3">
        <ul className="pagination">
          {PageNumbers.map((item, index) => (
            <li className="page-item" key={index}>
              <a className="page-link" href="#" onClick={() => paginate(item)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
