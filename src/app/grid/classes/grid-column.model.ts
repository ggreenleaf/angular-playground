import { ColumnDataType } from './column-data-type.enumeration';

export class GridColumn {
  propertyName: string;
  displayName?: string;
  dataType: ColumnDataType;
  showWhenDefault?: boolean;

  constructor (
    propertyName: string,
    dataType: ColumnDataType,
    showWhenDefault: boolean = true,
    displayName: string = null,
  ) {
    this.propertyName = propertyName;
    this.dataType = dataType;
    this.displayName = displayName;
    this.showWhenDefault = showWhenDefault;
  }

  get dxDataType(): string {
    return (this.dataType ===  ColumnDataType.DECIMAL || this.dataType === ColumnDataType.INTEGER) ?
      'number' : 
      this.dataType;
  
  }

  // Dev extreme uses the term caption 
  // so we will use it as well for easier readability in the template
  get caption(): string {
    return this.displayName ? this.displayName : this.propertyName;
  }
}

