import { Row, Col, Card, Container } from "react-bootstrap"
import city1 from '../assets/LoreImages/city1.png'
import city2 from '../assets/LoreImages/city2.png'
import dragon1 from '../assets/LoreImages/dragon1.png'
import dragon2 from '../assets/LoreImages/dragon2.png'



export default function Lore() {
  return (
    <Container className="py-5">
      <h1 style={{textAlign: 'center'}}>The Pillars of the Setting</h1>
      <Row>
        <Col>
          <Card>
            <Card.Img src={dragon1} alt="A picture of a dragon" 
              style={{width: '100%', height: '400px', objectFit: 'cover'}}
            />
          </Card>
        

          <Card>
            <Card.Img src={city1} alt="A picture of a cyberpunk style city" 
              style={{width: '100%', height: '400px', objectFit: 'cover'}}
            />
          </Card>
        </Col>

        <Col>
        <br />
        <Card>
          <Card.Body>
            <ul>
              <li>
                The Sixth World: History diverged from our reality in the late 20th century. 
                According to Mayan prophecy, the world moves through cyclical ages of magical energy. 
                The return of magic in 2011 marked the transition from our mundane Fifth World into the 
                magical Sixth World. 
              </li>
              <br />
              <li>
              The Awakening: On December 24, 2011, a sudden spike in global mana sparked "The Awakening". 
              Ley lines flared, ancient dragons woke from centuries of slumber, and magic became a usable, 
              scientific resource. 
              </li>
              <br />
              <li>
                Metahumanity: Shortly after the Awakening, human genetics mutated globally. Some children 
                were born as Elves and Dwarves. In 2021, an event called Goblinization caused 10% of the world’s 
                adult population to painfully transform into Orks and Trolls overnight, sparking severe racial tension.
              </li>
              <br />
              <li>
                Megacorporations: Governments crumbled due to plagues and wars. In their place arose massive, multi-national 
                megacorporations. Thanks to legal precedents like the Shiawase Decision, they possess extraterritoriality—meaning 
                corporate land is corporate sovereign territory, completely exempt from local laws.
              </li>
            </ul>
          </Card.Body>
        </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img src={dragon2} alt="A picture of a dragon" 
              style={{width: '100%', height: '400px', objectFit: 'cover'}}
            />
          </Card>

          <Card>
            <Card.Img src={city2} alt="A picture of a cyberpunk style city" 
              style={{width: '100%', height: '400px', objectFit: 'cover'}}
            />
          </Card>
        </Col>

      </Row>
    </Container>
  )
}
