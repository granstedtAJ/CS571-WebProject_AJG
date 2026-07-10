import { useMemo, useState } from 'react'
import { Badge, Container, Form, Table } from 'react-bootstrap'

// Dummy data. In a real client-side app this might come from a static JSON file
// bundled at build time or fetched from a public read-only API.
const ENTRIES = [
  { name: 'Ember Drake', type: 'Creature', rarity: 'Rare' },
  { name: 'Frost Sigil', type: 'Item', rarity: 'Uncommon' },
  { name: 'Lyra the Bold', type: 'Character', rarity: 'Legendary' },
  { name: 'Bog Sprite', type: 'Creature', rarity: 'Common' },
  { name: 'Healing Draught', type: 'Item', rarity: 'Common' },
]

const RARITY_VARIANT = {
  Common: 'secondary',
  Uncommon: 'success',
  Rare: 'primary',
  Legendary: 'warning',
}

export default function Compendium() {
  const [query, setQuery] = useState('')

  // Controlled search input filtering the table — a small piece of local state
  // to show interactivity without any backend.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return ENTRIES
    return ENTRIES.filter((e) => e.name.toLowerCase().includes(q))
  }, [query])

  return (
    <Container className="py-5">
      <h1 className="mb-3">Compendium</h1>
      <Form.Control
        className="mb-3"
        placeholder="Search by name…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Rarity</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((e) => (
            <tr key={e.name}>
              <td>{e.name}</td>
              <td>{e.type}</td>
              <td>
                <Badge bg={RARITY_VARIANT[e.rarity]}>{e.rarity}</Badge>
              </td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center text-muted">
                No entries match “{query}”.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  )
}
