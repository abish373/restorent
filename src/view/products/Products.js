import useProducts from "../../hooks/api/useProducs";
import Skeleton from "react-loading-skeleton";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { ProductColumn } from "./ProductColumn";

const Products = () => {
  const { data: food = [], isLoading: foodLoading } = useProducts({});

  const {
    page,
    headerGroups,
    prepareRow,
    state: { globalFilter = "" },
    setGlobalFilter,
  } = useTable(
    { columns: ProductColumn, data: food },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div className="container-wrapper">
      <div>
        <input
          className="search-bar"
          placeholder="Search here..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <select
          defaultValue=""
          onChange={(e) => setGlobalFilter(e.target.value)}
        >
          <option value="" disabled>
            Filter By
          </option>
          <option value="tamil">Tamil</option>
        </select>
      </div>
      {foodLoading ? (
        <Skeleton height={300} count={5} margin={20} />
      ) : (
        <table className="table">
          <thead>
            {headerGroups.map((el) => (
              <tr className="list-table-row" {...el.getHeaderGroupProps()}>
                {el.headers.map((column) => {
                  return (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <span>
                        {column.canSort ? (
                          column.isSorted ? (
                            column.isSortedDesc ? (
                              " 🔽"
                            ) : (
                              "🔼"
                            )
                          ) : (
                            <img src="/images/icons/sort.svg" alt="↕️" />
                          )
                        ) : null}
                      </span>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody className="product-table-body">
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr>
                  {row.cells.map((cell, i) => {
                    return (
                      <td {...cell.getCellProps()} className="list-table-row">
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Products;
