//BOOTSTRAP
import { Container } from 'react-bootstrap';
//OBJECTS
import { AlbumDetail, discography } from './components/discography';
//CSS
import 'react-tiny-fab/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//COMPONENTS
import Header from './components/Header/Header';
import Album from './components/Albums/Album';


const App: React.FC = () => 
{
  const contentToBeRendered:JSX.Element[] = [];
           
  for (const key in discography) 
  {
    if (Object.prototype.hasOwnProperty.call(discography, key)) 
    {
      contentToBeRendered.push
      (
        <h4 style={{
          textAlign: 'center',  
          display: 'block'}}
          key={key+"h4"}>
            <small>{key}</small>
        </h4>,

        <hr style={{
          margin: 'auto',
          marginBottom: '30px',
          color: 'white',
          height: 1,
          width: '50%'
        }}
        key={key+"hr"}/>,

        <div className={(discography[key].length < 4)? 'row justify-content-center' : 'row'} key={key+"row"}>
          {
              discography[key].map((album: AlbumDetail) =>
                  <Album
                  album= {album}
                  />)
          }
        </div>
      );
    }
  }

  return (
    <Container>
      <Header/>
      {contentToBeRendered}
    </Container>
  );
}

export default App;

