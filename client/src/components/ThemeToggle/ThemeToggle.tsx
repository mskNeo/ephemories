import React, { useContext } from 'react'
import ThemeContext from 'context/ThemeContext'
import { Toggle } from 'components/Toggle';

export default function ThemeToggle() {
  const {isDarkMode, setDarkMode} = useContext(ThemeContext);

  return (
    <Toggle value={isDarkMode} setValue={setDarkMode} />
  )
}
