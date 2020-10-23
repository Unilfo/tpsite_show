import React       from "react";
import './production.scss'
import {CardGroup, Card} from 'react-bootstrap'

function Production() {
  return (
    <div className='production'>
      <CardGroup>
        <Card className='production__card'>
          <Card.Img variant="top" src="tpsite_show/2.png" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card className='production__card'>
          <Card.Img variant="top" src="tpsite_show/2.png" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card className='production__card'>
          <Card.Img variant="top" src="tpsite_show/2.png" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Production;
