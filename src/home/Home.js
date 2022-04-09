import React from 'react'
import { Form , Button} from 'react-bootstrap'
export default function Home() {
  return (
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Search</Form.Label>
    <Form.Control  placeholder="Enter Home team name" />
    <Form.Text className="text-muted">
    If you want to search for a football match enter a team name, for a fight --fighter's name, a race --the race name, etc.
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  )
}
