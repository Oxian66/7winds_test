import React from 'react';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import { IconProps } from './interfaces';

export default function CustomFileIcon({depth, level}: IconProps) {
  return (
    <>
        <DescriptionTwoToneIcon style={{
          marginLeft: depth === 3 ? "3.5rem" : "0.5rem",
          color: "gray",
          }}/>
    </>
  );
}