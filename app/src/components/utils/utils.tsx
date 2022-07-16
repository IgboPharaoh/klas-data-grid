import DataObject from "../models/model";

const getTableHeader = ({ dataGrid: result, handleSort}: {dataGrid: DataObject[]; [key: string]: any}) => {
  const keys = Object.keys(result[0]);
  return (
    <tr>
      {keys.map((item, index) => {
        return <th key={index} onClick={handleSort(item)}>{item}</th>;
      })}
    </tr>
  );
};

const getTableRows = ({ dataGrid: result }: {dataGrid: DataObject[]; [key: string]: any}) => {
  const keys = Object.keys(result[0]);
  return result.map((items, i) => {
    return (
      <tr key={i}>
        {keys.map((item, i) => {
          return (
            <td key={i} onClick={handleDoubleClick} onBlur={handleBlur}>
              {(items as any)[item]}
            </td>
          );
        })}
      </tr>
    );
  });
};

const handleDoubleClick = (e: any) => {
  e.target.contentEditable = true;
};

const handleBlur = (e: any) => {
  e.target.contentEditable = false;
};

export { getTableHeader, getTableRows };
