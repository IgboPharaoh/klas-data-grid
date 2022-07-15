import dataObject from "../models/model";

const getTableHeader = (result: dataObject[]) => {
  const keys = Object.keys(result[0]);
  return (
    <tr>
      {keys.map((item, index) => {
        return <th key={index}>{item}</th>;
      })}
    </tr>
  );
};

const getTableRows = (result: dataObject[]) => {
  const keys = Object.keys(result[0]);
  return result.map((items, i) => {
    return (
      <tr key={i}>
        {keys.map((item) => {
          return <td key={items.customerID}>{(items as any)[item]}</td>;
        })}
      </tr>
    );
  });
};

const numOfColumns = (result: dataObject[]) => {
  return Object.keys(result[0]).length;
};

const numOfRows = (result: dataObject[]) => {
  return getTableRows(result).length;
};

export { getTableHeader, getTableRows, numOfRows, numOfColumns };
