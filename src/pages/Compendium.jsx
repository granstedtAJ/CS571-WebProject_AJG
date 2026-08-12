import { useMemo, useState } from 'react'
import { Row,Col, Badge, Container, Form, Table } from 'react-bootstrap'
import itemData from '../Items.js'
import ItemCard from '../components/ItemCard'
// Dummy data. In a real client-side app this might come from a static JSON file
// bundled at build time or fetched from a public read-only API.

export default function Compendium() {
  const [query, setQuery] = useState('')

  // Controlled search input filtering the table — a small piece of local state
  // to show interactivity without any backend.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return itemData
    return itemData.filter((e) => e.name.toLowerCase().includes(q))
  }, [query])

  return (
    <Container className="py-5">
      <h1 className="mb-3" style={{textAlign: "center"}}>Compendium</h1>
      <Form.Control
            className="mb-3"
            aria-label='Item Search'
            placeholder="Search by name…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
      />
      <Row>
        
          {filtered.map((item) => {
            return <Col 
              key={item.name} 
              xs={12} md={6} lg={4} xl={3}
              >
             <ItemCard 
              name={item.name} 
              description={item.description} 
              stats={item.stats} 
              image={item.image}   
              />
            </Col> 
          })}
       
      </Row>
    </Container>
  )
}
