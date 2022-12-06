import React, { useState, useEffect } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import './Table.scss';
import axios from 'axios';
import { Entity, TableData } from '../interfaces';
import TableRowComponent from './TableRowComponent';


const TableComponent = (): React.ReactElement => {
  //стейт для id сущности
  //const [entityId, setEntityId] = useState<number>();

  const [tableData, setTableData] = useState<TableData[]>([]);

  //получение id сущности
  // const fetchEntity = async ():Promise<Entity> => {
  //     const entity = await axios.post(`${process.env.REACT_APP_BASE_URL}/create`);
  //     return entity.data;
  // };
  const fetchData = async (): Promise<TableData> => {
    const tableData = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_ENTITY_ID}/row/list`
    );
    return tableData.data;
  };

  useEffect(() => {
    //fetchEntity().then((res) => setEntityId(res.id));
    fetchData().then((res) => setTableData([res]));
  }, []);

  console.log(tableData);

  const createRow = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_ENTITY_ID}/row/create`, {}
      );
    }
    catch (e) {
      console.log(e);
    }
  };

  const updateRow = async () => {};

  const deleteRow = async (rowId: number):Promise<void> => {
    try {
      const newData = tableData.filter((row: TableData) => row.parentId !== rowId ? row : null);
      setTableData(newData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography sx={{pt: '12px', pb:'12px', pl: '15px'}}>СТРОИТЕЛЬНО-МОНТАЖНЫЕ РАБОТЫ</Typography>
      <Divider orientation="horizontal" flexItem  sx={{background: '#A1A1AA'}}/>
      <Table className="table-wrapper" >
        <TableHead className="table-wrapper">
          <TableRow >
            <TableCell className="cell" sx={{color: 'white'}}>Уровень</TableCell>
            <TableCell sx={{color: 'white'}}>Наименование работ</TableCell>
            <TableCell sx={{color: 'white'}}>Основная з/п</TableCell>
            <TableCell sx={{color: 'white'}}>Оборудование</TableCell>
            <TableCell sx={{color: 'white'}}>Накладные расходы</TableCell>
            <TableCell sx={{color: 'white'}}>Сметная прибыль</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((item) => (
            <TableRowComponent
              data={item}
              key={item.parentId}
              createRow={createRow}
              handleDelete={deleteRow}
              handleUpdate={updateRow}
              />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
export default TableComponent;