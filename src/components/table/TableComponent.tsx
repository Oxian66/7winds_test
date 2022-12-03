import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import './Table.scss';
import axios from 'axios';
import { Entity } from '../interfaces';


const TableComponent = ():React.ReactElement => {

    const [entityId, setEntityId] = useState<number>();
    
    const fetchData = async ():Promise<Entity> => {
        const entity = await axios.post('http://185.244.172.108:8081/v1/outlay-rows/entity/create');
        //id = 31267
        return entity.data;
    }
    useEffect(() =>{
        //fetchData().then((res) => setEntityId(res.id));
    }, [] );
    console.log(entityId);
    return (
        <main>
            <Table className='table-wrapper'>
            <TableHead>
                <TableCell>Уровень</TableCell>
                <TableCell>Наименование работ</TableCell>
                <TableCell>Основная з/п</TableCell>
                <TableCell>Оборудование</TableCell>
                <TableCell>Накладные расходы</TableCell>
                <TableCell>Сметная прибыль</TableCell>
            </TableHead>
        </Table>
        </main>
        
    )
};
export default TableComponent;