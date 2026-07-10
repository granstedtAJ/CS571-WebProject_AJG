import { Accordion, Container } from 'react-bootstrap'

const CHAPTERS = [
  {
    title: 'The Founding',
    body: 'Long before the compendium was written, the first scholars gathered scattered knowledge into a single archive.',
  },
  {
    title: 'The Great Expansion',
    body: 'As explorers charted new regions, the archive grew to hold creatures and artifacts from every corner of the world.',
  },
  {
    title: 'The Present Age',
    body: 'Today the compendium lives on as a shared, ever-growing record maintained by its community of readers.',
  },
]

export default function Lore() {
  return (
    <Container className="py-5">
      <h1 className="mb-3">Lore</h1>
      <p className="text-muted mb-4">Expand a chapter to read more.</p>
      <Accordion defaultActiveKey="0" alwaysOpen>
        {CHAPTERS.map((c, i) => (
          <Accordion.Item eventKey={String(i)} key={c.title}>
            <Accordion.Header>{c.title}</Accordion.Header>
            <Accordion.Body>{c.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  )
}
