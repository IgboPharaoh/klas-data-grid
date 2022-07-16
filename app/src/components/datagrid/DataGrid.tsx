import React from "react";
import { getTableHeader, getTableRows } from "../utils/utils";
import DataObject from "../models/model";
import "./styles.css";

type Props = {
  dataGrid: DataObject[];
  handleSort: (item: string) => () => void;
};

const DataGrid: React.FC<Props> = ({ dataGrid, handleSort }) => {
  return (
    <div className="datagrid-wrapper">
      {dataGrid.length ? (
        <table>
          <thead>{getTableHeader({ dataGrid, handleSort })}</thead>
          <tbody>{getTableRows({ dataGrid })}</tbody>
        </table>
      ) : (
        <h1 className="table-warning-text">YOUR DATA WILL APPEAR HERE</h1>
      )}
    </div>
  );
};

export default DataGrid;
