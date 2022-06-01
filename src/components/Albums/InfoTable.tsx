import React, { ReactElement } from 'react';
import { Table } from 'react-bootstrap';
import { AlbumDetail } from '../discography';

const InfoTable: React.FC<AlbumDetail> = ({...props}): ReactElement  => {

    let contentToBeRenderedInModal: JSX.Element = 
        <Table variant="dark table-striped table-sm" className='text-center'>
            <tbody>
                <tr key="modalAlbum">
                <th>{ props.type.charAt(0).toUpperCase() + props.type.slice(1)} Album by</th>
                    <td>{props.band}</td>
                </tr>
                {props.dateRelease.toString() !== "Invalid Date"  && <tr key="modalDateRelease">
                <th>Released on</th>
                    <td>{props.dateRelease.toLocaleString('en-US', {
                                                                        day: 'numeric', 
                                                                        year: 'numeric', 
                                                                        month: 'long',
                                                                    })}
                    </td>
                </tr>}
                {props.dateRecorded.toString() !== "Invalid Date" && <tr key="modalDateRecorded">
                <th>Recorded on</th>
                    <td>{props.dateRecorded.toLocaleString('en-US', {
                                                                        year: 'numeric', 
                                                                        month: 'long', 
                                                                    })}
                    </td>
                </tr>}
                
                <tr key="modalGenre">
                <th>Genre(s)</th>
                    <td className='text-center'>
                    <Table variant="dark table-sm" style={{marginBottom: '0'}}>
                        <tbody>
                        {props.genre.map((g,index) => 
                                                    <tr key={"genre"+index}>
                                                    <td style={{borderBottom: 'none', backgroundColor: 'rgba(210,130,240, 0.0)'}}>
                                                        <small>
                                                        {g.charAt(0).toUpperCase() + g.slice(1)}
                                                        </small> 
                                                    </td>
                                                    </tr>  
                        )}
                        </tbody>
                    </Table>
                    </td>
                </tr>
                <tr key="modalLength">
                <th>Total runtime</th>
                    <td>{props.length}</td>
                </tr>
                <tr key="modalLabel">
                <th>Label(s)</th>
                    <td>{props.label}</td>
                </tr>
                <tr key="modalProducer">
                <th>Produced by</th>
                    <td>{props.producer}</td>
                </tr>
            </tbody>
        </Table>;
  return contentToBeRenderedInModal;
}

export default InfoTable