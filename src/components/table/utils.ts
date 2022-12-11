import TableRowComponent from './TableRowComponent';
import axios from 'axios';
import { Entity, TableData, UserInput } from './interfaces';

export const  fetchData = async (): Promise<TableData[]> => {
    const tableData = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_ENTITY_ID}/row/list`
    );
    return tableData.data;
  };

// const createRow = async () => {
//     try {
//       //need another condition
//       if (!tableData.length) {
//         const res = await axios.post(
//           `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_ENTITY_ID}/row/create`,
//           {
//             equipmentCosts: 0,
//             estimatedProfit: 0,
//             machineOperatorSalary: 0,
//             mainCosts: 0,
//             materials: 0,
//             mimExploitation: 0,
//             overheads: 0,
//             parentId: null,
//             rowName: '',
//             salary: 0,
//             supportCosts: 0,
//           }
//         );
//         setTableData(res.data);
//       } else {
//         const res = await axios.post(
//           `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_ENTITY_ID}/row/create`,
//           {
//             equipmentCosts: 0,
//             estimatedProfit: 0,
//             machineOperatorSalary: 0,
//             mainCosts: 0,
//             materials: 0,
//             mimExploitation: 0,
//             overheads: 0,
//             parentId: 0,
//             rowName: '',
//             salary: 0,
//             supportCosts: 0,
//           }
//         );
//         setTableData(res.data);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const updateRow = async (eId: number, rowId: number, input?: UserInput): Promise<void> => {
//     try {
//       const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_ENTITY_ID}/row/${rowId}/update`, {});
//       setTableData(res.data)
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const deleteRow = async (eId: number, rowId: number): Promise<void> => {
//     try {
//       const newData = tableData.filter((row: TableData) =>
//         row.id !== rowId ? row : null
//       );
//       setTableData(newData);
//       console.log('test');
//     } catch (e) {
//       console.log(e);
//     }
//   };

// const buildRow = (node: TableData) => (
//     <TableRowComponent
//       data={node}
//       key={Math.random() + 1}
//       createRow={createRow}
//       handleDelete={deleteRow}
//       handleUpdate={updateRow}
//     />
//   );