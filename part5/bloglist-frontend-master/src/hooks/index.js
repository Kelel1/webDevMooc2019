import { useState } from 'react'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  const to_return = {
    reset
  }

  return {
    type,
    value,
    onChange,
    to_return
  }
}

