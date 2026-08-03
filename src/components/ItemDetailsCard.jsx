import { Card, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

export default function ItemDetailsCard(image,title,details) {
  return (
    <>
    <Card onClick={() => navigate(link)}>
      <img 
      className = "d-block w-100"
      src = {image}
      />
      <Card.Title>{title}</Card.Title>
      <Card.Text>{details}</Card.Text>
    </Card>
    </>
  )
}
