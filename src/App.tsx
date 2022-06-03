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

  discography.forEach(element => 
  {
    contentToBeRendered.push
      (
        <h4 style={{textAlign: 'center', display: 'block'}} key={element.band+"h4"}>
            <small>{element.band}</small>
        </h4>,
        <hr style={{margin: 'auto',marginBottom: '30px',color: 'white',height: 1,width: '50%'}} key={element.band+"hr"}/>,
        <div className={(element.albums.length < 4)? 'row justify-content-center' : 'row'} key={element.band+"row"}>
          {element.albums.map((album: AlbumDetail) => <Album album= {album} key={album.title} />)}
        </div>
      );
  });

  return (
    <Container>
      <Header/>
      {contentToBeRendered}
    </Container>
  );
}

export default App;

