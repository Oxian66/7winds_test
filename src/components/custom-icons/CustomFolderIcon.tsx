import React from 'react';
import { Badge } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import { IconProps } from './interfaces';
import '../table/Table.scss';

export default function CustomFolderIcon({ depth, level }: IconProps) {
  return (
    <>
      <>
        <Badge
          badgeContent={level}
          invisible={depth > 2}
          sx={{
            "& .MuiBadge-badge": {
              color: "black",
              right: 10,
              top: 10,
              fontWeight: "bold",
            },
          }}
        >
          {depth < 3 ? (
            <FolderIcon
              style={{
                color: level === 1 ? "#5F98F5" : "#95FFAC",
                marginLeft: depth === 2 ? "4rem" : "0rem",
                fontSize: "20px",
              }}
            />
          ) : (
            <DescriptionTwoToneIcon
              style={{
                marginLeft: depth === 3 ? "7rem" : "0.5rem",
                color: "#7890B2",
                fontSize: "20px",
              }}
            />
          )}
        </Badge>
      </>
    </>
  );
}
