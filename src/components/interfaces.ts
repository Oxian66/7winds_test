export interface Entity {
    id: number;
    rowName: string;
}

export interface TableData {
    parentId: number;
    rowName: string;
    salary: number;
    equipmentCosts: number;
    overheads: number;
    estimatedProfit: number;
  }

  export interface Props {
    data: TableData;
    createRow: () => {}
    handleUpdate: () => {};
    handleDelete: (rowId: number) => Promise<void>;
  }

  export interface UserInput {

  }