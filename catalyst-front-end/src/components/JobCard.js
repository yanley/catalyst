import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function JobCard() {
    return (
      <CardGroup>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
      </CardGroup>
    );
  }
  
  export default JobCard;