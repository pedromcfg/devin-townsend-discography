//REACT
import React, { useState } from 'react';
//BOOTSTRAP
import { Container } from 'react-bootstrap';
//react-tiny-fab
import { Fab, Action } from 'react-tiny-fab';
//FONT AWESOME
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faSortUp, faSortDown, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
//OBJECTS
import { AlbumDetail, discography } from './components/discography';
//CSS
import 'react-tiny-fab/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//COMPONENTS
import Header from './components/Header/Header';
import Album from './components/Albums/Album';
//LODASH
import _ from 'lodash';

interface GroupBy
{
  [x: string]: AlbumDetail[];
}

const App: React.FC = () => 
{
  const contentToBeRendered:JSX.Element[] = [];
  
  /* const "order" will decide if what is presented in each group is
  ascending or descending */
  const [order, setOrder] = useState(true);
  let orderDescription:"asc" | "desc" | boolean;
  orderDescription = order? 'asc' : 'desc';

  /* const "byYear" will decide if what is presented is grouped by year */
  const [byYear, setByYear] = useState(false);

  let groupedBy:GroupBy;
  if(byYear)
    groupedBy = _.mapValues(_.groupBy(discography, function(item) {
                      return item.dateRelease.getFullYear();
                    }), 
                    sort => _.orderBy(sort, ['dateRelease'], [orderDescription]));
  else
    groupedBy = _.mapValues(_.groupBy(discography, function(item) {
                      return item.band;
                    }), 
                    sort => _.orderBy(sort, ['dateRelease'], [orderDescription]));

                    console.log(groupedBy)
  
  //This is where contentToBeRendered gets filled with content               
  for (const key in groupedBy) 
  {
    if (Object.prototype.hasOwnProperty.call(groupedBy, key)) 
    {
      contentToBeRendered.push(
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

                              <div className={(groupedBy[key].length < 4)? 'row justify-content-center' : 'row'} key={key+"row"}>
                                {
                                    groupedBy[key].map((album: AlbumDetail) =>
                                        <Album
                                        title= {album.title}
                                        type= {album.type}
                                        band= {album.band}
                                        dateRecorded= {album.dateRecorded}
                                        dateRelease= {album.dateRelease}
                                        studio= {album.studio}
                                        genre= {album.genre}
                                        length= {album.length}
                                        label= {album.label}
                                        producer= {album.producer}
                                        imgCovername= {album.imgCovername}
                                        tracks= {album.tracks}
                                        key={album.title}
                                        />)
                                }
                              </div>);
    }
  }

  return (
    <Container>
      
      <Header/>

      {contentToBeRendered}

      {/* FLOATING BUTTON */}
      <Fab
        style={{ bottom: 0, right: 0}}
        event="hover"
        alwaysShowTitle={true}
        mainButtonStyles={{
                            backgroundColor: "whitesmoke",
                            color: 'black',
                          fontFamily: 'Overlock',
                        fontSize: '20px'}}
        icon={<FontAwesomeIcon icon={faEye} />}>
        <Action
          className='floatingButton'
          onClick={() => setOrder(!order)}>
          {order? <FontAwesomeIcon icon={faSortDown} /> : <FontAwesomeIcon icon={faSortUp} />}
        </Action>
        <Action
          className='floatingButton'
          onClick={() => setByYear(!byYear)}>
          <FontAwesomeIcon icon={faCalendarDays} />
        </Action>
      </Fab>

    </Container>
  );
}

export default App;
