import React, { useState } from 'react';
import { Props, TableData, UserInput } from '../interfaces';
import {
  TableRow,
  TableCell,
  SpeedDial,
  SpeedDialAction,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';


const TableRowComponent = (props: Props) => {
  const [userInput, setUserInput] = useState<UserInput | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);

  const actions = [
    { icon: <FolderOpenOutlinedIcon color='success' />, name: 'Level 2', action: props.createRow },
    { icon: <DescriptionOutlinedIcon />, name: 'Document', action: props.createRow },
    { icon: <DeleteIcon color='error'/>, name: 'Delete', action: props.handleDelete },
  ];
  const actionSize = {
    width: 0,
    height: 0,
    m: '1em',
  }

  const handleEditRow = () => {
    setEditMode(true);
    console.log(editMode);
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setUserInput{
    //   ...userInput,
    //   [e.target.name as string]:[e.target.value]
    // });
  };
  console.log('props', props);
  
  return (
    <>
      {editMode ? (
        <TableRow>
          <TableCell>
            <SpeedDial
              ariaLabel='level'
              icon={<FolderOpenOutlinedIcon />}
              direction='right'
              sx={{ '& .MuiFab-primary': { width: 0, height: 0 } }}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  sx={{width: 0, height: 0}}
                  onClick={() => action.action(props.data.id)}
                />
              ))}
            </SpeedDial>
          </TableCell>
          <TableCell >
            <TextField />
          </TableCell>
          <TableCell>
            <TextField />
          </TableCell>
          <TableCell>
            <TextField />
          </TableCell>
          <TableCell>
            <TextField />
          </TableCell>
          <TableCell>
            <TextField />
          </TableCell>
        </TableRow>
      ) : (
        <TableRow onDoubleClick={handleEditRow} >
          <TableCell sx={{pt: 0, pb: 0}}>
              <SpeedDial
                ariaLabel='level'
                icon={<FolderOpenOutlinedIcon color='primary' />}
                direction='right'
                sx={{ '& .MuiFab-primary': { width: 0, height: 0 } }}
              >
                {actions.map((action) => (
                  <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    sx={actionSize}
                    onClick={() => action.action(props.data.id)}
                  />
                ))}
              </SpeedDial>
          </TableCell >
          <TableCell sx={{color: 'white', pt: 0, pb: 0 }}>{props.data.rowName}</TableCell>
          <TableCell sx={{color: 'white', pt: 0, pb: 0}}>{props.data.salary}</TableCell>
          <TableCell sx={{color: 'white', pt: 0, pb: 0}}>{props.data.equipmentCosts}</TableCell>
          <TableCell sx={{color: 'white', pt: 0, pb: 0}}>{props.data.overheads}</TableCell>
          <TableCell sx={{color: 'white', pt: 0, pb: 0}}>{props.data.estimatedProfit}</TableCell>
        </TableRow>
      )}
    </>
  );
};
export default TableRowComponent;
