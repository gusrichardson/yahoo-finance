import React from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";

function SearchForm({ handleInput, handleRegion, handleSubmit }) {
  return (
    <Form
      className="border rounded mt-4 bg-white p-4"
      id="search-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h2>Stock Search</h2>
      <Form.Label htmlFor="stock-ticker">Enter stock ticker</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="stock-addon">Name</InputGroup.Text>
        <FormControl
          placeholder="Enter stock name"
          aria-label="Enter stock name"
          aria-describedby="stock-addon"
          id="stock-ticker"
          onChange={(e) => handleInput(e.target.value)}
        />
      </InputGroup>
      <Form.Label htmlFor="stock-ticker">Enter company region</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="region-addon">Region</InputGroup.Text>
        <FormControl
          placeholder="Enter region"
          aria-label="Enter region"
          aria-describedby="region-addon"
          id="region"
          onChange={(e) => handleRegion(e.target.value)}
        />
      </InputGroup>
      <Button type="submit" variant="primary">
        Submit
      </Button>
      {/* <input type="submit" value="Submit" /> */}
    </Form>
  );
}

export default SearchForm;
