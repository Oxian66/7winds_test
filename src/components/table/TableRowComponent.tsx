import React, { useState } from 'react';
import { Props, TableData, UserInput } from './interfaces';
import './Table.scss';
import {
  TableRow,
  TableCell,
  SpeedDial,
  SpeedDialAction,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import CustomFolderIcon from "../custom-icons/CustomFolderIcon";
import axios from 'axios';

export default function TableRowComponent(props: Props):React.ReactElement {

  console.log("props", props);
  
  const ClientInput: Partial<UserInput> = {};

  const [userInput, setUserInput] = useState <typeof ClientInput> ({
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    supportCosts: 0,
  });
  const [editMode, setEditMode] = useState<boolean>(false);
  const [rowId, setRowId] = useState<number>(0)

  const actions = [
    {
      icon: props.depth < 2 ? <CustomFolderIcon depth={props.depth} level={2} /> : null,
      name: "Level2",
      action: props.createRow,
    },
    {
      icon: props.depth < 3 ? <DescriptionTwoToneIcon sx={{fontSize: "20px", color: "#7890B2"}} /> : null,
      name: "Document",
      action: props.createRow,
    },
    {
      icon: <DeleteIcon color="error" sx={{fontSize: "20px"}} />,
      name: "Delete",
      action: props.handleDelete,
    },
  ];
  const actionSize = {
    width: 0,
    height: 0,
    m: "1em",
  };

  const updateRow = async (rowId: number, input?: UserInput): Promise<void> => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_ENTITY_ID}/row/${rowId}/update`, {...input});
    } catch (e) {
      console.log(e);
    }
  };

  const handleEditRow = () => {
    setEditMode(!editMode);
    setRowId(6);
    console.log(editMode); 
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserInput({
      ...userInput,
      [e.target.name as string]: e.target.value
    });
    //updateRow(rowId, userInput);
  };

  return (
    <>
      {editMode ? (
        <TableRow
          sx={{
            "& label.Mui-focused": {
              color: "#71717A",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#71717A",
              },
              "&:hover fieldset": {
                borderColor: "#71717A",
              },
            },
          }}
        >
          <TableCell sx={{ color: "white", pt: 0, pb: 0 }}>
            <SpeedDial
              ariaLabel="level"
              icon={<CustomFolderIcon depth={props.depth} level={1}/>}
              direction="right"
              sx={{ "& .MuiFab-primary": { width: 0, height: 0 } }}          
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  sx={actionSize}
                  onClick={() => action.action(props.data.id)}
                />
              ))}
            </SpeedDial>
          </TableCell>
          <TableCell sx={{ color: "white", pt: 0, pb: 0 }}>
            <TextField size="small" name="rowName" onChange={handleUserInput}/>
          </TableCell>
          <TableCell sx={{ color: "white", pt: 0, pb: 0 }}>
            <TextField size="small" name="salary" onChange={handleUserInput}/>
          </TableCell>
          <TableCell sx={{ color: "white", pt: 0, pb: 0 }}>
            <TextField size="small" name="equipmentCosts"/>
          </TableCell>
          <TableCell sx={{ color: "white", pt: 0, pb: 0 }}>
            <TextField size="small" name="overheads" onChange={handleUserInput}/>
          </TableCell>
          <TableCell sx={{ color: "white", pt: 0, pb: 0 }}>
            <TextField size="small" name="estimatedProfit" onChange={handleUserInput}/>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow onDoubleClick={handleEditRow}>
          <TableCell sx={{ pt: 0, pb: 0 }}>
            <SpeedDial
              ariaLabel="level"
              className="tree-line"
              icon={
                props.depth === 1 ?  <CustomFolderIcon depth={props.depth} level={1}/> : <CustomFolderIcon depth={props.depth} level={2} />
                //  : <>{props.depth < 3 ? <CustomFolderIcon depth={props.depth} level={2}/>
                //  : <DescriptionTwoToneIcon/>}</>
                }
              direction="right"
              sx={{ "& .MuiFab-primary": { width: 0, height: 0 } }}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  sx={actionSize}
                  onClick={() => action.action(props.data.id)}
                />
              ))}
            </SpeedDial>
          </TableCell>
          <TableCell sx={{ color: "white", pt: 0, pb: 0 }} >
            {props.data.rowName}
          </TableCell>
          <TableCell sx={{ color: "white", pt: 0, pb: 0 }}>
            {props.data.salary}
          </TableCell>
          <TableCell sx={{ color: "white", pt: 0, pb: 0 }}>
            {props.data.equipmentCosts}
          </TableCell>
          <TableCell sx={{ color: "white", pt: 0, pb: 0 }}>
            {props.data.overheads}
          </TableCell>
          <TableCell sx={{ color: "white", pt: 0, pb: 0 }}>
            {props.data.estimatedProfit}
          </TableCell>
        </TableRow>
      )}
    </>
  );
}
