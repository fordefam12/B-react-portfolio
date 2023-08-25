import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function Contact() {
  return (
    <Form>
      <h1>Contact</h1>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label htmlFor="inlineFormInput">Name:</Form.Label>
          <Form.Control className="mb-2" id="inlineFormInput" placeholder="Jane Doe"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="username@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <br />

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Submit</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}
