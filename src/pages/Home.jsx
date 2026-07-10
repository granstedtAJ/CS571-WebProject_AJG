import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

// Each card links to one of the main sections. This page demonstrates the
// React Bootstrap grid (Row/Col) plus programmatic navigation with useNavigate.
const SECTIONS = [
  { to: '/compendium', title: 'Compendium', text: 'Browse creatures, items, and characters.' },
  { to: '/lore', title: 'Lore', text: 'Read the history and stories of the world.' },
  { to: '/rules', title: 'Rules', text: 'Learn how everything fits together.' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <Container className="py-5">
      <h1 className="mb-3">Welcome to the CS571 Compendium</h1>
      <p className="lead text-muted mb-4">
        A fully client-side React app hosted on GitHub Pages. Pick a section to explore.
      </p>
      <Row xs={1} md={3} className="g-4">
        {SECTIONS.map((s) => (
          <Col key={s.to}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{s.title}</Card.Title>
                <Card.Text className="flex-grow-1">{s.text}</Card.Text>
                <Button variant="primary" onClick={() => navigate(s.to)}>
                  Open {s.title}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
