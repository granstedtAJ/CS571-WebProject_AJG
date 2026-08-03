import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <Container className="py-5 text-center">
      <h1 className="display-4">404</h1>
      <p className="lead text-muted">Page Not Found</p>
      <Button variant="primary" onClick={() => navigate('/')}>
        Back to Home
      </Button>
    </Container>
  )
}
