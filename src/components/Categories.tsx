import React from 'react'
import '../styles/Categories.css';
import data from '../data/categories.json';
import { Container, Card } from 'react-bootstrap';
export default function Categories() {
    return (
        <Container className="mt-5 categories-con">
            <h2><strong>Browse</strong> Our Most Popular Categories</h2>
            <Container className="mt-4 categories">
                {data.categories.map((category,i) => {
                    return (
                        <Card key={i} style={{ width: '18rem' }}>
                            <div className="img-container">
                            <Card.Img src={category.image}/>
                            </div>
                            <Card.Body>
                                <Card.Title>{category.title}</Card.Title>
                                <Card.Text>{category.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Container>
        </Container>

    )
}
