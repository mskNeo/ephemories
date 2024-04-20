import React, { useContext } from 'react'
import Toggle from './Toggle';
import ThemeContext from '@/context/ThemeContext';

export default function ThemeToggle() {
  const {isDarkMode, setDarkMode} = useContext(ThemeContext);

  return (
    <Toggle value={isDarkMode} setValue={setDarkMode} />
  )
}
