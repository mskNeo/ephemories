import React from 'react';
import styles from 'styles/Toggle.module.scss';

export default function Toggle({ value, setValue }: { value: boolean, setValue: (value: boolean) => void }) {
  return (
    <div className={styles.toggleSwitch}>
      <input 
        type='checkbox'
        className={styles.toggleSwitchCheckbox}
        checked={value}
        onChange={() => setValue(!value)}
        name={`${value}ToggleSwitch`}
        id={`${value}ToggleSwitch`}
      />
      <label className={styles.toggleSwitchLabel} htmlFor={`${value}ToggleSwitch`}>
        <span className={styles.toggleSwitchInner} />
        <span className={styles.toggleSwitchSwitch} />
      </label>
    </div>
  )
}
