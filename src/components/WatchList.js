import React, { useState } from "react";
import { ListGroup, Button, Modal } from "react-bootstrap";
import PopUp from "./PopUp";

const WatchList = ({ watchList, handleRemove }) => {
  console.log("WatchList", watchList);
  let [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  console.log("WatchList Show: ", show);
  return (
    <div className="border border-success">
      <h2>Watch List</h2>
      <ListGroup as="ul">
        {watchList.length > 0
          ? watchList.map((item) => {
              return (
                <>
                  <ListGroup.Item
                    as="li"
                    className="border border-primary"
                    key={item.quotes[0].score}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-sm">{item.quotes[0].shortname}</div>
                        <div className="col-sm d-flex justify-content-end">
                          <Button
                            type="button"
                            onClick={() => {
                              handleShow();
                            }}
                          >
                            Show More
                          </Button>
                          <Button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => {
                              handleRemove(item.quotes[0].score);
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <PopUp show={show} handleClose={handleClose} item={item} />
                </>
              );
            })
          : null}
      </ListGroup>
    </div>
  );
};

export default WatchList;
