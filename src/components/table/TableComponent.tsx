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
import { Entity, TableData, UserInput } from '../interfaces';
import TableRowComponent from './TableRowComponent';
import { Console } from 'console';

export default function TableComponent(): React.ReactElement {
  //стейт для  сущности
  //const [entity, setEntity] = useState<number>();

  const [tableData, setTableData] = useState<TableData[]>([]);

  //получение id сущности
  // const fetchEntity = async ():Promise<Entity> => {
  //     const entity = await axios.post(`${process.env.REACT_APP_BASE_URL}/create`);
  //     return entity.data;
  // };
  const fetchData = async (): Promise<TableData[]> => {
    const tableData = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_ENTITY_ID}/row/list`
    );
    return tableData.data;
  };

  useEffect(() => {
    //fetchEntity().then((res) => setEntity(res));
    fetchData().then((res) => setTableData([...res]));
  }, []);

  console.log('tableData', tableData);

  const createRow = async () => {
    try {
      //need another condition
      if (!tableData.length) {
        const res = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_ENTITY_ID}/row/create`,
          {
            equipmentCosts: 0,
            estimatedProfit: 0,
            machineOperatorSalary: 0,
            mainCosts: 0,
            materials: 0,
            mimExploitation: 0,
            overheads: 0,
            parentId: null,
            rowName: '',
            salary: 0,
            supportCosts: 0,
          }
        );
        setTableData(res.data);
      } else {
        const res = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_ENTITY_ID}/row/create`,
          {
            equipmentCosts: 0,
            estimatedProfit: 0,
            machineOperatorSalary: 0,
            mainCosts: 0,
            materials: 0,
            mimExploitation: 0,
            overheads: 0,
            parentId: 0,
            rowName: '',
            salary: 0,
            supportCosts: 0,
          }
        );
        setTableData(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateRow = async (eId: number, rowId: number, input?: UserInput): Promise<void> => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_ENTITY_ID}/row/${rowId}/update`, {});
      setTableData(res.data)
    } catch (e) {
      console.log(e);
    }
  };

  const deleteRow = async (eId: number, rowId: number): Promise<void> => {
    try {
      const newData = tableData.filter((row: TableData) =>
        row.id !== rowId ? row : null
      );
      setTableData(newData);
      console.log('test');
    } catch (e) {
      console.log(e);
    }
  };

  // const mappedTree = (node: TableData):any => {
  //   // return node.map((node: TableData) => {
  //     if (!node.child.length)
  //       return (
  //         <TableRowComponent
  //           data={node}
  //           key={Math.random() + 1}
  //           createRow={createRow}
  //           handleDelete={deleteRow}
  //           handleUpdate={updateRow}
  //         />
  //       );
  //     else {
  //       return node.child.forEach(item => mappedTree(item));
  //       //mappedTree(node.child)
  //     }
  //   //});
  // };

const buildRow = (node: TableData) => (
  <TableRowComponent
    data={node}
    key={Math.random() + 1}
    createRow={createRow}
    handleDelete={deleteRow}
    handleUpdate={updateRow}
  />
);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{ pt: "12px", pb: "12px", pl: "15px" }}>
        СТРОИТЕЛЬНО-МОНТАЖНЫЕ РАБОТЫ
      </Typography>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{ background: "#A1A1AA" }}
      />
      <Table className="table-wrapper">
        <TableHead className="table-wrapper">
          <TableRow>
            <TableCell sx={{ color: "white", w: "110px" }}>Уровень</TableCell>
            <TableCell sx={{ color: "white" }}>Наименование работ</TableCell>
            <TableCell sx={{ color: "white" }}>Основная з/п</TableCell>
            <TableCell sx={{ color: "white" }}>Оборудование</TableCell>
            <TableCell sx={{ color: "white" }}>Накладные расходы</TableCell>
            <TableCell sx={{ color: "white" }}>Сметная прибыль</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           <>{tableData.map((item) =>
            (
              <>
            <TableRowComponent
              data={item}
              key={Math.random() + 1}
              createRow={createRow}
              handleDelete={deleteRow}
              handleUpdate={updateRow}
            />
            {item.child && item.child.length ? 
              item.child.map(child => (
                <>
              <TableRowComponent
                data={child}
                key={Math.random() + 1}
                createRow={createRow}
                handleDelete={deleteRow}
                handleUpdate={updateRow}
              />
              {child.child.length && child.child ?
                child.child.map(anchestor => (
                  <TableRowComponent
              data={anchestor}
              key={Math.random() + 1}
              createRow={createRow}
              handleDelete={deleteRow}
              handleUpdate={updateRow}
            />
                )) : null
            }
              </>
              ))
             : null
             }
            </>
          )
          )}</>

        </TableBody>
      </Table>
    </Box>
  );
};
