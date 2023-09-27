import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MovieCard.css';
import ReactStars from 'react-stars';

//{name,posterurl,description,rating}
function MovieCard({el}) {

  const ratingChanged = (newRating) => {
  console.log(newRating)
}
    function truncate(str, maxlength) {
        return (str.length > maxlength) ?
             str.slice(0, maxlength - 1) + '…' : str;
    }
  return (
    <div className='moviecard'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height="150px" min-height="100%" src={el.posterurl} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
            {truncate(el.description, 59)}
        </Card.Text>
        

        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'} 
            value={el.rating}
            edit={false}
        />


        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard