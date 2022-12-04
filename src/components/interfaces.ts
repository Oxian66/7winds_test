export interface Entity {
    id: number;
    rowname: string;
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
    data: TableData
  }