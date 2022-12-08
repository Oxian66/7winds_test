import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './Sidebar.style.scss';

export default function SideBar():React.ReactElement {

  return (
    <Box sx={{height: '100vh'}}>
    <aside className='sidebar'>
      <Accordion
        sx={{
          borderRadius: 0,
          backgroundColor: '#27272A',
          color: '#A1A1AA',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          sx={{mB: '0'}}
    
        > 
          <Typography className='typography'>Название проекта</Typography> 
       </AccordionSummary> 
        <AccordionDetails> 
          <Typography className='typography'>Абриевиатура</Typography>
         </AccordionDetails>
      </Accordion>
      <Divider orientation='horizontal' flexItem  sx={{background: '#A1A1AA'}}/>
      <ul>
        <li>По проекту</li>
        <li>Обьекты</li>
        <li>РД</li>
        <li>МТО</li>
        <li>СМР</li>
        <li>График</li>
        <li>МиМ</li>
        <li>Рабочие</li>
        <li>Капвложения</li>
        <li>Бюджет</li>
        <li>Финансирование</li>
        <li>Панорамы</li>
        <li>Камеры</li>
        <li>Поручения</li>
        <li>Контрагенты</li>
      </ul>
    </aside>
    </Box>
  );
};
