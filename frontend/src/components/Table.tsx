import React from 'react'
import {Table} from "react-bootstrap";

export function Tablee() {
    return (
        <>
             <div className="hihi">
               <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      {Array.from({ length: 13 }).map((_, index) => (
        <th key={index}>Table heading</th>
      ))}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 13 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>2</td>
      {Array.from({ length: 13 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>3</td>
      {Array.from({ length: 13 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
  </tbody>
</Table>
             </div>
        </>
    )
}