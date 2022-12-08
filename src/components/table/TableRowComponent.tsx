import React, { useState } from 'react';
import { Props, TableData, UserInput } from '../interfaces';
import './Table.scss';
import {
  TableRow,
  TableCell,
  SpeedDial,
  SpeedDialAction,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FolderIcon from '@mui/icons-material/Folder';

export default function TableRowComponent(props: Props):React.ReactElement {

  console.log('props', props);
  
  const ClientInput: Partial<UserInput> = {};

  const [userInput, setUserInput] = useState <typeof ClientInput> ({
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    supportCosts: 0,
  });
  const [editMode, setEditMode] = useState<boolean>(false);

  const actions = [
    {
      icon: <FolderIcon color='success' />,
      name: 'Level 2',
      action: props.createRow,
    },
    {
      icon: <DescriptionOutlinedIcon />,
      name: 'Document',
      action: props.createRow,
    },
    {
      icon: <DeleteIcon color='error' />,
      name: 'Delete',
      action: props.handleDelete,
    },
  ];
  const actionSize = {
    width: 0,
    height: 0,
    m: '1em',
  };

  const handleEditRow = () => {
    setEditMode(!editMode);
    console.log(editMode);
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [e.target.name as string]: e.target.value
    });
  };
  console.log('props', props);

  return (
    <>
      {editMode ? (
        <TableRow
          sx={{
            '& label.Mui-focused': {
              color: '#71717A',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#71717A',
              },
              '&:hover fieldset': {
                borderColor: '#71717A',
              },
            },
          }}
        >
          <TableCell sx={{ color: 'white', pt: 0, pb: 0 }}>
            <SpeedDial
              ariaLabel='level'
              icon={<FolderIcon color='primary' />}
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
          </TableCell>
          <TableCell sx={{ color: 'white', pt: 0, pb: 0 }}>
            <TextField size='small' name='rowName'/>
          </TableCell>
          <TableCell sx={{ color: 'white', pt: 0, pb: 0 }}>
            <TextField size='small' name='salary'/>
          </TableCell>
          <TableCell sx={{ color: 'white', pt: 0, pb: 0 }}>
            <TextField size='small' name='equipmentCosts'/>
          </TableCell>
          <TableCell sx={{ color: 'white', pt: 0, pb: 0 }}>
            <TextField size='small' name='overheads'/>
          </TableCell>
          <TableCell sx={{ color: 'white', pt: 0, pb: 0 }}>
            <TextField size='small' name='estimatedProfit'/>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow onDoubleClick={handleEditRow}>
          <TableCell sx={{ pt: 0, pb: 0 }}>
            <SpeedDial
              ariaLabel='level'
              icon={<FolderIcon color='primary' />}
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
          </TableCell>
          <TableCell sx={{ color: 'white', pt: 0, pb: 0 }}>
            {props.data.rowName}
          </TableCell>
          <TableCell sx={{ color: 'white', pt: 0, pb: 0 }}>
            {props.data.salary}
          </TableCell>
          <TableCell sx={{ color: 'white', pt: 0, pb: 0 }}>
            {props.data.equipmentCosts}
          </TableCell>
          <TableCell sx={{ color: 'white', pt: 0, pb: 0 }}>
            {props.data.overheads}
          </TableCell>
          <TableCell sx={{ color: 'white', pt: 0, pb: 0 }}>
            {props.data.estimatedProfit}
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
