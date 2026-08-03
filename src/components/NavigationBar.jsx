import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

// Using React Router's NavLink via React Bootstrap's `as` prop lets clicks
// navigate through the router (no full page reload) while NavLink adds the
// "active" class to the current route — which Bootstrap styles for free.
export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Shadowrun
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            {/* `end` makes "/" active only on the exact home path. */}
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/compendium">
              Compendium
            </Nav.Link>
            <Nav.Link as={NavLink} to="/lore">
              Lore
            </Nav.Link>
            <Nav.Link as={NavLink} to="/rules">
              Rules
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
