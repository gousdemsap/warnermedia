import { Button } from 'react-bootstrap';
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetTitles, SearchTitle } from '../services/titles';
import { EditTitleModal } from './TitleModal';


export const TitlesTable = () => {
    
    const titles =  useSelector(state => state.titlesReducer.titles);
    const dispatch = useDispatch();

    useEffect(() => {
        GetTitles(dispatch);

    }, []);

    return <table className='table table-dark'>
        <tbody>
            {
                titles.map(n => 
                    <tr>
                        <td style={{width: '3rem'}}>
                            <EditTitleModal title={n.value}/>
                        </td>
                        <td style={{width: '3rem'}}>
                            <Button className='btn btn-danger' onClick={() => SearchTitle(dispatch, n)}>Delete</Button>
                        </td>
                        <td style={{ textAlign: 'left'}}>{n.value}</td>
                    </tr>
                    )
            }
        </tbody>
    </table>



}