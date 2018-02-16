import React from 'react'

export default ({ isHeader, align, children }) =>
  isHeader
    ? <th className={align && `align-${align}`}>{children}</th>
    : <td className={align && `align-${align}`}>{children}</td>
