import { useState } from "react";
import Modal from "../../components/Modal";

export const ProductColumn = [
  {
    Header: "Name",
    accessor: "img",
    disableSortBy: true,
    Cell: ({ cell: { value }, row }) => {
      const rowValue = row.original;
      return (
        <div className="name-card">
          <img className="item-image" src={value} id={value} alt={value} />
          <span>{rowValue?.name}</span>
        </div>
      );
    },
  },
  {
    Header: "Ratings",
    accessor: "rating",
    sortMethod: (a, b) => Number(a) - Number(b),
    manualSortBy: true,
    Cell: ({ cell: { value }, row }) => {
      const rowValue = row.original;
      return (
        <div className="rating-card">
          <span>Rating: {value}</span>
          <br />
          <span className="text-hidden">{rowValue?.description}</span>
        </div>
      );
    },
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Cuisine",
    accessor: "cuisine",
    disableSortBy: true,
  },
  {
    Header: "",
    accessor: "id",
    disableSortBy: true,
    Cell: ({ row }) => {
      const rowValue = row.original;
      const [modal, setModal] = useState(false);

      return (
        <div>
          <button className="btn-primary" onClick={() => setModal(!modal)}>
            View Details
          </button>
          <Modal isOpen={modal} isClosable={true} close={() => setModal(false)}>
            <div>
              <div className="d-flex">
                <img
                  className="item-image"
                  src={rowValue?.img}
                  alt={rowValue?.name}
                />
                <div>
                  <h3>{rowValue.name}</h3>
                  <p>{rowValue.description}</p>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      );
    },
  },
];
