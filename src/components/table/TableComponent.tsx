import React, { useState, useEffect, useCallback } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Divider,
  Box,
  Stack,
} from '@mui/material';
import './Table.scss';
import axios from 'axios';
import { Entity, TableData, UserInput } from './interfaces';
import TableRowComponent from './TableRowComponent';
import { fetchData } from './utils';

export default function TableComponent(): React.ReactElement {
  //стейт для  сущности
  //const [entity, setEntity] = useState<number>();

  const [tableData, setTableData] = useState<TableData[]>([]);
  const [parentId, setParentId] = useState<number | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);

  //получение id сущности
  // const fetchEntity = async ():Promise<Entity> => {
  //     const entity = await axios.post(`${process.env.REACT_APP_BASE_URL}/create`);
  //     return entity.data;
  // };

  useEffect(() => {
    //fetchEntity().then((res) => setEntity(res));
    fetchData().then((res) => setTableData([...res]));
  }, []);

  console.log('tableData', tableData);

  const createRow = useCallback(async (userInput?: UserInput) => {
    try {
      
      //setEditMode(true);
      // if (!tableData.length) {
      //   const res = await axios.post(
      //     `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_ENTITY_ID}/row/create`,
      //     {
      //       equipmentCosts: 0,
      //       estimatedProfit: 0,
      //       machineOperatorSalary: 0,
      //       mainCosts: 0,
      //       materials: 0,
      //       mimExploitation: 0,
      //       overheads: 0,
      //       parentId: null,
      //       rowName: '',
      //       salary: 0,
      //       supportCosts: 0,
      //     }
      //   );
      //   setTableData(res.data);
      // } else {
      //   const res = await axios.post(
      //     `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_ENTITY_ID}/row/create`,
      //     {
      //       equipmentCosts: 0,
      //       estimatedProfit: 0,
      //       machineOperatorSalary: 0,
      //       mainCosts: 0,
      //       materials: 0,
      //       mimExploitation: 0,
      //       overheads: 0,
      //       parentId: 0,
      //       rowName: '',
      //       salary: 0,
      //       supportCosts: 0,
      //     }
      //   );
        //setTableData(res.data);
      //}
      setEditMode(true);
      let depth = 0;
        switch (depth) {
          case 1: 
            const res = await axios.post(
              `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_ENTITY_ID}/rowww/create`,
              {
                ...userInput,
                parentId: parentId,
              }
            );
            setTableData(res.data);
            break;
          case 2:
            const result = await axios.post(
              `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_ENTITY_ID}/row/create`,
              {
                ...userInput,
                parentId: setParentId(1),
              }
            );
            setTableData(result.data);
            break;
        }
    } catch (e) {
      console.log(e);
    }
  }, [parentId]);

  const updateRow = useCallback(async (rowId: number, input?: UserInput): Promise<void> => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_ENTITY_ID}/row/${rowId}/update`, {});
      setTableData(res.data)
    } catch (e) {
      console.log(e);
    }
  }, []);

  const deleteRow = useCallback(async (rowId: number): Promise<void> => {
    try {
      const newData = tableData.filter((row: TableData) => row.id !== rowId ? row : null);
      setTableData(newData);
      console.log('test');
    } catch (e) {
      console.log(e);
    }
  }, [tableData]);

  return (
    <Box sx={{ width: "100%", }}>
      <Stack direction="row" spacing={1}>
        <Typography sx={{ pt: "12px", pb: "12px", pl: "15px" }}>
          СТРОИТЕЛЬНО-МОНТАЖНЫЕ РАБОТЫ
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ background: "#A1A1AA" }}
        />
      </Stack>
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
          {tableData.map((item) => (
            <React.Fragment key={item.id}>
              <TableRowComponent
                data={item}
                depth={1}
                createRow={() => createRow()}
                handleDelete={deleteRow}
                handleUpdate={updateRow}
              />
              {item.child.length &&
                item.child.map((children) => (
                  <React.Fragment key={children.id}>
                    <TableRowComponent
                      data={children}
                      depth={2}
                      createRow={() => createRow()}
                      handleDelete={deleteRow}
                      handleUpdate={updateRow}
                    />
                    {children.child.length &&
                      children.child.map((descendant) => (
                        <React.Fragment key={descendant.id}>
                          <TableRowComponent
                            data={descendant}
                            depth={3}
                            createRow={() => createRow()}
                            handleDelete={deleteRow}
                            handleUpdate={updateRow}
                          />
                        </React.Fragment>
                      ))}
                  </React.Fragment>
                ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
