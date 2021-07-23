import React from 'react'
import {Table} from "react-bootstrap";

export function SmallTable() {
    return (
        <>
             <div className="hihi">
               <Table responsive>
  <thead>
    <tr>
      <th>Value</th>
      {Array.from({ length: 3 }).map((_, index) => (
        <th key={index}>Table heading</th>
      ))}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ph</td>
      {Array.from({ length: 3 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>Hardness</td>
      {Array.from({ length: 3 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
  </tbody>
</Table>
             </div>
        </>
    )
}