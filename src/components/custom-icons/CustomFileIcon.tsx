import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';

interface IconProps {
  depth: number;
}

export default function CustomFileIcon(props: IconProps) {
  return (
    <>
        <FolderIcon style={{
          marginLeft: props.depth === 3 ? "2rem" : 0,
          }}/>
    </>
  );
}