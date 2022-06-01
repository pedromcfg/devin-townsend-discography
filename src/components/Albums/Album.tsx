import React, { ReactElement,useState } from 'react';
import { Button, Collapse, Table, Image } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

//OBJECTS
import { AlbumDetail } from '../discography';
import albumCovers from './AlbumCovers';
import InfoTable from './InfoTable';


const Album: React.FC<AlbumDetail> = ({...props}): ReactElement => 
{
  //album info to be presented in modal
  let contentToBeRenderedInModal: JSX.Element = <InfoTable title= {props.title}
                                                    type= {props.type}
                                                    band= {props.band}
                                                    dateRecorded= {props.dateRecorded}
                                                    dateRelease= {props.dateRelease}
                                                    studio= {props.studio}
                                                    genre= {props.genre}
                                                    length= {props.length}
                                                    label= {props.label}
                                                    producer= {props.producer}
                                                    imgCovername= {props.imgCovername}
                                                    tracks= {props.tracks}
                                                    key={props.title+"modal"}/>

  //for the modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setShow(true);
  };

  //for the collapse
  const [open, setOpen] = useState(false);

  return (
    <div className='col-md-3'>

      {/* THE MODAL */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="text-center">
          <Modal.Title className='w-100'>{props.title} ({props.dateRelease.getFullYear()})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="table-responsive">
            {contentToBeRenderedInModal}
          </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Image 
        src={albumCovers[props.imgCovername]}
        className="btn img-rounded center-block img-fluid" 
        onClick={handleShow} 
        alt={props.imgCovername}/>

      <div className="text-center">
        <h6>{props.title}<small> ({props.dateRelease.getFullYear()})</small></h6>
      </div>
        
      <div className="text-center">
        <Button 
          className='btn btn-primary'
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}>
          {open? "Close" : "Track List"}
        </Button>
        <Collapse in={open}>
          <div className="well">
            <Table variant="dark table-striped">
              <tbody>
                {props.tracks.map((track,index) => 
                  <tr key={track.trackTitle}>
                    <td>{index+1}</td>
                    <td>{track.trackTitle}</td>
                    <td>{track.trackLength}</td>
                </tr>
                )} 
              </tbody>
            </Table>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Album