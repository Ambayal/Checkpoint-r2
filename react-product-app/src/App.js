import React from 'react';
import './App.css';
import product from './product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import Card from 'react-bootstrap/Card';

const firstName = "YourFirstName"; // Replace with your first name

function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
      <div className="message">
        <p>Hello, {firstName ? firstName : "there!"}</p>
        {firstName && <Image image={product.image} />}
      </div>
    </div>
  );
}

export default App;
