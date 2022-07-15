import React from "react";
import styled from "styled-components";
import { getTableHeader, getTableRows } from "../utils/utils";
import dataObject from "../models/model";

const DataGrid = (dataGrid: dataObject[]) => {
  return (
    <StyledDataGrid>
      {dataGrid.length ? (
        <table>
          <thead>{getTableHeader(dataGrid)}</thead>
          <tbody>{getTableRows(dataGrid)}</tbody>
        </table>
      ) : (
        <h1 className="table-warning-text">YOUR DATA WILL APPEAR HERE</h1>
      )}
    </StyledDataGrid>
  );
};

export default DataGrid;

const StyledDataGrid = styled.div`
  max-height: 80vh;
  overflow: scroll;
  table {
    width: fit-content;
    border-right: 0.05rem solid black;
    border-left: 0.05rem solid black;
    border-spacing: 0rem;
  }

  thead {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    background-color: var(--clr-primaryBlue);
    color: var(--clr-primaryWhite);
    font-weight: 600;
    font-size: 1.4rem;
  }
  td,
  th {
    border: 0.05rem solid var(--clr-primaryGrey);
    text-align: left;
    padding: 0.8rem;
  }
  td {
    font-weight: 400;
    font-size: 1.2rem;
  }
  th {
    border-right: 0.05rem solid var(--clr-primaryGrey);
  }
  .table-warning-text {
    font-size: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    color: var(--clr-primaryBlue);
  }
`;
