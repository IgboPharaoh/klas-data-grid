import React, { useEffect, useState } from "react";
import DataGrid from "../datagrid/DataGrid";
import DataObject from "../models/model";
import "./styles.css";

const Main: React.FC = () => {
  const [dataArray, setDataArray] = useState<DataObject[]>([]);
  useEffect(() => {
    const fetchAllData = async () => {
      fetch(`http://localhost:8000`)
        .then((res) => res.json())
        .then((result) => setDataArray(result))
        .catch(console.log);
    };
    fetchAllData();
  }, []);

  useEffect(()=>{}, [dataArray])

  const handleSort = (key: any) => {
    return () => {
        let dataSort = [...dataArray] as unknown as Record<string, any>[]
        dataSort.sort((a, b) => {
            let aData = a[key];
            let bData = b[key];
            if (aData < bData) {
                return -1
            } else if (aData > bData) {
                return 1
            }
            return 0
        })
        setDataArray([...dataSort as DataObject[]])
    }
  }

  return (
    <div className="main-wrapper">
      <DataGrid dataGrid={dataArray} handleSort={handleSort}/>
    </div>
  );
};

export default Main;
