import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import SideBar from './components/sidebar/Sidebar';
import TableComponent from './components/table/TableComponent';

function App() {
  return (
    <div className='container_app'>
      <Header/>
      <SideBar />
      <TableComponent />
    </div>
  );
}

export default App;
