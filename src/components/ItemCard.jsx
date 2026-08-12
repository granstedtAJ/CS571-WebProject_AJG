import { Card, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function ItemCard({name, description, stats, image}) {
  const [showMoreToggled,setShowMoreToggled] = useState(false);
  const [isHovered,setIsHovered]=useState(false);
  const cardStyle = {
    cursor: 'pointer',
    border: isHovered ? '5px solid #743089' : '5px solid rgba(0,0,0,.125)',
    alignItems: 'stretch',
    width: '100%'
  };

  const imageStyle ={
    height: '200px',
    width: '200px'
  }

  const headerStyle={
    fontWeight: 'bold',
    textDecoration: 'underline'
  }
  
  return (
    <>
    <Card
        as="button"
        type="button"
        style={cardStyle}
        onClick={() => setShowMoreToggled(!showMoreToggled)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-controls={name}
    >
      <Card.Title>{name}</Card.Title>
      <img 
      className = "d-block w-100"
      src = {image}
      alt = {`A picture of ${name}`}
      style = {imageStyle}
      />
      {showMoreToggled && 
      <Card.Body>
        <Card.Text style = {headerStyle}>
          Description
        </Card.Text>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text style={headerStyle}>
          Statistics
        </Card.Text>
        {Object.entries(stats).map(([key, value]) => {
          return <Card.Text key={key} style={{textTransform: 'capitalize'}}>
            {key}: {value}
          </Card.Text>
        })}
      </Card.Body>}
    </Card>
    </>
  )
}
