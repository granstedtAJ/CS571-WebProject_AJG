import { Card, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function HomeCard({title, link, image}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardClassName = "d-flex flex-column justify-content-center align-items-center"
  const navigate = useNavigate();

  const cardStyle = {
    cursor: 'pointer',
    border: isHovered ? '5px solid #743089' : '5px solid rgba(0,0,0,.125)'
  };

  return (
    <>
    <Card
        as={Link}
        to={link}
        style={cardStyle}
        className={cardClassName}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
      <Card.Img  variant="top" src={image} alt={`A picture for the ${title} card`} style={{width: '100%', height: '800px', objectFit: 'cover'}}/>
      <Card.Title>{title}</Card.Title>
    </Card>
    </>
  )
}
