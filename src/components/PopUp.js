import React from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";

const PopUp = ({ show, handleClose, item }) => {
  console.log("Item", item);
  const ticker = item.quotes[0].symbol;
  const name = item.quotes[0].shortname;
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>
              {name} (${ticker})
            </h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>News</h3>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Show news stories
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {item.news.map((article) => {
                return (
                  <Dropdown.Item key={article.uuid} href={article.link}>
                    {article.publisher}: {article.title}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopUp;
