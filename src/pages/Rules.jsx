import { Alert, Container, ListGroup } from 'react-bootstrap'

const RULES = [
  'Every entry in the compendium must cite its source.',
  'Lore chapters are read in order for newcomers.',
  'Rarity determines how often an entry appears in play.',
  'Community edits are reviewed before they are published.',
]

export default function Rules() {
  return (
    <Container className="py-5">
      <h1 className="mb-3">Rules</h1>
      <Alert variant="info">
        These rules keep the compendium consistent for everyone.
      </Alert>
      <ListGroup as="ol" numbered>
        {RULES.map((rule) => (
          <ListGroup.Item as="li" key={rule}>
            {rule}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  )
}
