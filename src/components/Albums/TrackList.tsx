import React, {ReactElement, useState} from 'react';
import { Button, Collapse, Table } from 'react-bootstrap';
import { Track } from '../discography';

const TrackList:React.FC<{tracks: Track[]}> = ({tracks}): ReactElement => {
    //for the collapse
  const [open, setOpen] = useState(false);
  return (
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
                {tracks.map((track,index) => 
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
  )
}

export default TrackList