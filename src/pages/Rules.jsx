import { Row, Col, Card, Container } from 'react-bootstrap'
import diceRoll from '../assets/Rules/diceRoll.png'
import prisonBreak from '../assets/Rules/prisonBreak.png'

const cardStyle ={
  fontWeight: 'bold', 
  textAlign: 'center', 
  textDecoration: 'underline'
}

export default function Rules() {
  return (
    <Container className="py-5">
          <h1 style={{textAlign: 'center'}}>Rules</h1>
          <Row>
            <Col>
             <Card>
                <Card.Title style={cardStyle}>Core Mechanics</Card.Title>
                <Card.Body>
                    Shadowrun is a table top roleplaying game of tests organized by the GameMaster.
                    Every test is resolved by rolling a handful of six-sided dice (d6). 
                  <ul>
                    <li>
                      Building the Pool: Add your Attribute rating to your Skill rating. For example, 
                      6 Agility + 6 Pistols equals a 12-dice pool.
                    </li>
                    <li>
                      Counting Hits: Every die that rolls a 5 or 6 counts as a "hit".
                    </li>
                    <li>
                      Success and Thresholds: To succeed, your total number of hits must 
                      meet or exceed a target threshold set by the GM.
                    </li>
                  </ul>
                  <Card.Img  variant="top" src={diceRoll} alte="A picture of shadowrun characters rolling dice"
                    style={{width: '100%', height: '500px', objectFit: 'cover'}}
                  />
                </Card.Body>
            </Card>
            </Col>
    
            <Col>
              <Card style={{marginTop: '10rem'}}>
                  <Card.Title style={cardStyle}>Turn Structure</Card.Title>
                  <Card.Body>
                  Shadowrun is structured around Combat Turns, Initiative Passes, and Actions.

                  <ul> Initiative Phase
                    <li>
                      Roll Initiative: Players roll their Initiative dice and add their base stats to 
                      determine the order.
                    </li>
                  </ul>
                  <ul> Initiative Passes
                    <li>
                      The Countdown: Combat goes through passes in descending order of initiative score. 
                      After everyone acts, subtract 10 from all initiative scores. End after all initiative 
                      scores hit 0 or lower.
                    </li>
                  </ul>
                  <ul> Action Economy
                    <li>
                      Major Actions: Attacking, casting spells, or hacking.
                    </li>
                    <li>
                      Minor Actions: Moving, dropping prone, reloading, or aiming.
                    </li>
                  </ul>
                  </Card.Body>
              </Card>
            </Col>
    
            <Col>
              <Card>
                <Card.Img  variant="bottom" src={prisonBreak} alt="a picture of a prison break"
                  style={{width: '100%', height: '500px', objectFit: 'cover'}}
                />
                <Card.Title style={cardStyle}>Win Condition</Card.Title>
                <Card.Body>
                    Complete the mission assigned by your GameMaster while keeping your character 
                    alive through sequential turns of combat. 

                  <ul> Examples of missions include the following:
                    <li>
                      Extraction: Infiltrating a facility and safely escorting a VIP or corporate asset out.
                    </li>
                    <li>
                      Data Theft: Hacking into a secure server to steal proprietary corporate data.
                    </li>
                    <li>
                      Sabotage: Physically or electronically destroying competitor property.
                    </li>
                    <li>
                      Protection: Defending a client or location from rival syndicates.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
  )
}
