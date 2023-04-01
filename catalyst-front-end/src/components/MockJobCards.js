import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { mockData } from './mockData';

// function mockDataCard() {
//     return (
//       <Card style={{ width: '18rem' }}>
//         <Card.Body>
//           <Card.Title>{mockData.items[0].title}</Card.Title>
//           <Card.Subtitle className="mb-2 text-muted">{mockData.items[0].summary}</Card.Subtitle>
//           <Card.Text>
//           <ul>
//         {mockData.items[0].bulletPoints.map((point, index) => (
//           <li key={index}>{point}</li>
//         ))}
//         </ul>
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     );
//   }
  
//   export default mockDataCard;

//   function MockDataCards() {
//     return (
//       <>
//         {mockData.items.map((job) => (
//         <CardGroup>
//           <Card className="my-card" style={{ width: '18rem' }} key={job.adId}>
//             <Card.Body>
//               <Card.Title>{job.title}</Card.Title>
//               <Card.Subtitle className="mb-2 text-muted">{job.summary}</Card.Subtitle>
//               <Card.Text>
//                 <ul>
//                   {job.bulletPoints.map((point, index) => (
//                     <li key={index}>{point}</li>
//                   ))}
//                 </ul>
//               </Card.Text>
//               <Card.Link href="#">More details</Card.Link>
//             </Card.Body>
//           </Card>
//           </CardGroup>
//         ))}
//       </>
//     );
//   }
  
//   export default MockDataCards;

  function MockJobCards() {
    return (
      <>
        <Row xs={1} md={2} lg={3} className="g-4">
          {mockData.items.map((job) => (
            <Col key={job.adId}>
              <Card className="my-card">
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{job.summary}</Card.Subtitle>
                  <Card.Text>
                    <ul>
                      {job.bulletPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </Card.Text>
                  <Card.Link href={job.links.ui.self} target="_blank">More details</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
  
  export default MockJobCards;
  