import React, { Component } from 'react';
import { Row, Container, Card, CardImg, CardImgOverlay } from 'reactstrap';
import Sign from '../media/sign.jpg';
import Sport from '../media/sports.jpg';
import Musician from '../media/musician.jpg'





class FeaturedProducts extends Component {
  render() {
    return (
      <Container>

      <div className='featuredCatagories'>
        <div className = "centeredCards">
        <Container>
          <div className='featured-text'>
            <h4>Browse By Catagory</h4>
            <p>We collect and sell valuable items with memorable stories.</p>
          </div>

          <Row>

            <Card className='featuredcards' inverse>
          <CardImg width="100%" src='https://s20.postimg.org/vxm47q5ql/fullsizeoutput_6ba.jpg' alt="Card image cap" />
          <CardImgOverlay className='overlay'>
            <div className='text-center'>Sports</div>
          </CardImgOverlay>
        </Card>
        <Card className='featuredcards' inverse>
        <CardImg  src={`${Musician}`} alt="Card image cap" />
        <CardImgOverlay className='overlay'>
          <div className='text-center'>Musicians</div>


        </CardImgOverlay>
      </Card>
      </Row>
      <Row>
      <Card className='featuredcards' inverse>
        <CardImg className='cardImg' src={`${Sign}`} alt="Card image cap" />
        <CardImgOverlay className='overlay'>
          <div className='text-center'>Autographed</div>


        </CardImgOverlay>
      </Card>
      <Card className='featuredcards' inverse>
        <CardImg  className='cardImg' src={`${Sign}`} alt="Card image cap" />
        <CardImgOverlay className='overlay'>
          <div className='text-center'>Sale</div>


        </CardImgOverlay>
      </Card>
      </Row>
        </Container>
      </div>
    </div>


      </Container>
    );
  }
}

export default FeaturedProducts;
