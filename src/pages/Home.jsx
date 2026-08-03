import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import compendiumImage from '../assets/HomeImages/compendiumImage.png'
import loreImage from '../assets/HomeImages/loreImage.png'
import rulesImage from '../assets/HomeImages/rulesImage.png'
import HomeCard from '../components/HomeCard'

// Each card links to one of the main sections. This page demonstrates the
// React Bootstrap grid (Row/Col) plus programmatic navigation with useNavigate.
const SECTIONS = [
  { to: '/rules', title: 'Rules', image: rulesImage },
  { to: '/lore', title: 'Lore', image: loreImage },
  { to: '/compendium', title: 'Compendium', image: compendiumImage },
]

export default function Home() {
  const navigate = useNavigate()
  const cardClassName = "d-flex flex-column justify-content-center align-items-center"
  return (
    <Container className="py-5">
      <Row xs={1} md={3} className="g-4">
        {SECTIONS.map((s) => (
          <Col key={s.to}>
            <HomeCard title={s.title} link={s.to} image={s.image}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
