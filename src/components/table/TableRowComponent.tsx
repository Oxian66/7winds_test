import React, { useState } from "react";
import { Props, TableData } from "../interfaces";
import {
  TableRow,
  TableCell,
  SpeedDial,
  SpeedDialAction,
  Stack,
  TextField
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const actions = [
    { icon: <DescriptionTwoToneIcon />, name: 'Document' },
    { icon: <DeleteIcon />, name: 'Delete' },
  ];
  

const TableRowComponent = (props: Props) => {
  const [editMode, setEditMode] = useState<boolean>(true);
  const [userInput, setUserInput] = useState({});


  const handleChangeRow = (e: any) => {

  };

  return (
    <>
    {
      editMode ? (
        <TableRow>
      <TableCell></TableCell>
      </TableRow>
      ) 
      : (<TableRow>    
      <TableCell>
        <Stack direction='row' spacing={1}>    
        <SpeedDial
          ariaLabel='level'
          icon={<DriveFolderUploadOutlinedIcon />}
          direction='right'
          sx={{backgroundColor: 'inherit'}}
        >
          {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
            {props.data.rowName}
        </SpeedDial>
        </Stack>
      </TableCell>
      <TableCell>{props.data.salary}</TableCell>
      <TableCell>{props.data.equipmentCosts}</TableCell>
      <TableCell>{props.data.overheads}</TableCell>
      <TableCell>{props.data.estimatedProfit}</TableCell>
      </TableRow>
      )
    }
    </>
  );
};
export default TableRowComponent;
