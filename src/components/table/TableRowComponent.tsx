import React from "react";
import { Props } from "../interfaces";
import { TableRow, TableCell, SpeedDial, SpeedDialAction, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const actions = [
    { icon: <DescriptionTwoToneIcon />, name: 'Document' },
    { icon: <DeleteIcon />, name: 'Delete' },
  ];
  

const TableRowComponent = (props: Props) => {
  return (
  <TableRow>
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
  </TableRow>
  );
};
export default TableRowComponent;
