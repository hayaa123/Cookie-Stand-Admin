import React from "react";
import hours from "../data";
export default function ReportTable(props) {
  const stand = props.stand;
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  let totals = 0
  const calculateTotals = () => {
    let total = [];
    for (let i = 0; i < hours.length; i++) {
      let hour_total = 0;
      for (let j = 0; j < stand.length; j++) {
        hour_total += stand[j].sales[i];
      }
      total.push(hour_total);
    }
    return total;
  };

  return (
    <>
      {stand.length == 0 ? (
        <h2>No Cookie Stands Available</h2>
      ) : (
        <>
          <table className="table-auto m-auto mt-10 " >
            <thead className="bg-amber-500">
              <th>location</th>
              {hours.map((hr) => {
                return(<th>{hr}</th>);
              })}
              <th>Totals</th>
            </thead>
            <tbody >
              { 
                stand.map((store) => {
                  let tota_per_store = store.sales.reduce(reducer) 
                  totals+= tota_per_store
                 
                return (
                  <tr className="bg-amber-300 odd:bg-amber-400"  >
                    <td className="p-3">{store.location}</td>
                    {store.sales.map((value) => {
                      return <td className="p-3">{value}</td>;
                    })}
                    <td className="p-3">{tota_per_store}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-amber-500 ">
              <tr>
                <td>Totals</td>
                {calculateTotals().map((total) => {
                  return <td className="p-3">{total}</td>;
                })}
                <td className="p-3">
                    {totals}
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      )}
    </>
  );
}
