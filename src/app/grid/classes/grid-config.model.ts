import { GridColumn } from "./grid-column.model";
import { GridRowAction } from "./grid-row-action.enumeration";

export class GridConfig {
  constructor(
    columns: GridColumn[], 
    rowActions: GridRowAction[] = [], 
    enableExport: boolean = false, 
    exportFileNameCategory: string = null
  ) {
    this.columns = columns;
    this.rowActions = rowActions;
    this.enableExport = enableExport;
    this.exportFileNameCategory = exportFileNameCategory;
  }
  columns: GridColumn[];
  rowActions: GridRowAction[];
  enableExport = false; //default value so its never nullable we either want export or don't null doesnt make sense
  exportFileNameCategory?: string;
}