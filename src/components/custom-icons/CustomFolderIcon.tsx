import React from "react";
import { Badge } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

interface IconProps {
  depth: number;
  level: number;
}

export default function CustomFolderIcon({ depth, level }: IconProps) {
  return (
    <>
      
        <>
          <Badge
            badgeContent={level}
            sx={{
              "& .MuiBadge-badge": {
                color: "black",
                right: 12,
                top: 12,
                fontWeight: "bold",
              },
            }}
          >
            <FolderIcon
              style={{
                color: level === 1 ? "#5F98F5" : "#95FFAC",
                //marginLeft: props.depth === 2 ? "1rem" : 0,
              }}
            />
          </Badge>
        </>
    
    </>
  );
}
