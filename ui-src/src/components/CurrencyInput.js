import React, { useState } from 'react'

export default ({ value, onChange, ...props }) => {
  const [localeValue, setLocaleValue] = useState(value.toLocaleString())
  function handleOnChange(e) {
    let strValue = e.target.value

    if (strValue.length === 0 || strValue === '$' || strValue === '0') {
      onChange(0)
      setLocaleValue('')
      return
    }

    if (strValue[0] === '$') {
      strValue = strValue.substr(1)
    }
    const numValue = Number(strValue.replace(/,/g, ''))
    onChange(numValue)
    setLocaleValue(
      numValue.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'symbol',
        minimumFractionDigits: 0,
      })
    )
  }
  return (
    <input
      value={localeValue}
      onChange={handleOnChange}
      placeholder="$"
      {...props}
      pattern="^\$[0-9,]+"
    />
  )
}
