import React, { Component } from 'react';
import {  Col, Container, Row,
 Button, Card, CardImg, CardTitle,
  CardSubtitle, CardBody, CardDeck } from 'reactstrap';





class SimilarItems extends Component {
  render() {
    return (
      <div className='catagory'>
        <Container>
          <h2 className='headers'>Similar Items</h2>
          <CardDeck >
            <Card className='item-card rounded-0 text-left'>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Title</CardTitle>
                <CardSubtitle>Subtitle</CardSubtitle>
                <br></br>
              </CardBody>
            </Card >
            <Card className='item-card rounded-0 text-left'>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Title</CardTitle>
                <CardSubtitle>Subtitle</CardSubtitle>
                <br></br>
              </CardBody>
            </Card >
            <Card className='item-card rounded-0 text-left'>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Title</CardTitle>
                <CardSubtitle>Subtitle</CardSubtitle>
                <br></br>
              </CardBody>
            </Card >
            <Card className='item-card rounded-0 text-left'>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Title</CardTitle>
                <CardSubtitle>Subtitle</CardSubtitle>
                <br></br>
              </CardBody>
            </Card >

          </CardDeck>
        </Container>
      </div>

    );
  }
}

export default SimilarItems;
