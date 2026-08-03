import { Card, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

export default function ItemCard({title, detailsLink, image, statsImage}) {
  return (
    <>
    <Card onClick={() => navigate(detailsLink)}>
      <img 
      className = "d-block w-100"
      src = {image}
      />
      <Card.Title>{title}</Card.Title>
      <img 
      className = "d-block w-100"
      src = {image}
      />
    </Card>
    </>
  )
}
