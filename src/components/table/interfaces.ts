
export interface Entity {
    id: number;
    rowName: string;
}

export interface TableData {
    id: number;
    child: TableData[];
    parentId: number;
    rowName: string;
    salary: number;
    equipmentCosts: number;
    overheads: number;
    estimatedProfit: number;
  }

  export interface Props {
    data: TableData;
    depth: number;
    createRow: () => {}
    handleUpdate: (rowId: number, input?: UserInput) => {};
    handleDelete: (rowId: number) => Promise<void>;
  }

  export interface UserInput {
    equipmentCosts: number;
    estimatedProfit: number;
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    mimExploitation: number;
    overheads: number;
    parentId: number;
    rowName: string;
    salary: number;
    supportCosts: number;
  }