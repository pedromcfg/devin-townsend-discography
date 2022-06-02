//BOOTSTRAP
import { Row } from 'react-bootstrap';
//IMAGES
import devin from "../img/devin.png"

function Header() {
  return (
    <div>
        <Row>
        <img src={devin} className='img-fluid' style={{
          display: 'block', 
          marginRight: 'auto', 
          marginLeft: 'auto', 
          marginBottom: '30px',
          width: 'auto'}} alt="Devin"></img>
      </Row>

      <h1 style={{
        textAlign: 'center', 
        display: 'block'}}> 
        Devin Townsend 
      </h1>

      <h2 style={{
        textAlign: 'center',  
        display: 'block', 
        marginBottom: '30px'}}>
          <small>Discography</small>
      </h2>
      
      <hr style={{
            margin: 'auto',
            borderColor: 'white',
            height: 3,
            width: '75%',
        }}/>
    </div>
  )
}

export default Header