/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
import { SensorsData } from "../types"

const CurrentStats = ({ date, humidity, temp, moisture, light, weight }: SensorsData) => {
  return (
    <>
      <table className="info-container">
        <thead>
          <tr>
            <th colSpan={2}>
              <h2>Current Environment</h2> <br /> <p id="temp-date">{date}</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="stat">Humidity</td>
            <td>
              {Math.round(humidity)}
              {"%"}
            </td>
          </tr>
          <tr>
            <td className="stat">Temp</td>
            <td>{Math.round(temp)}&deg;C</td>
          </tr>
          <tr>
            <td className="stat">Moisture</td>
            <td>
              {Math.round(moisture)}
              {"%"}
            </td>
          </tr>
          <tr>
            <td className="stat">Light</td>
            <td>{Math.round(light)} lux</td>
          </tr>
          <tr>
            <td className="stat">Weight</td>
            <td>{Math.round(weight)} lb</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default CurrentStats
