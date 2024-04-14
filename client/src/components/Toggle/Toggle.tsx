import React from 'react';
import styles from 'styles/Toggle.module.scss';

export default function Toggle({ value, setValue }: { value: unknown, setValue: (value: boolean) => void }) {
  return (
    <div className={styles.toggleSwitch}>
      <input 
        type='checkbox'
        className={styles.toggleSwitchCheckbox}
        checked={typeof value === 'boolean' ? value : undefined}
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
