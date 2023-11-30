import { ChangeEvent, useState } from 'react';

import styles from './Input.module.scss';

interface InputProps {
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  label?: string;
}

const Input = ({ value, onValueChange, label, placeholder }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const onValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
  };
  return (
    <div className={styles.inputWrapper}>
      <input
        type='text'
        value={value}
        className={styles.input}
        placeholder={placeholder}
        onChange={onValueChangeHandler}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {label && (
        <label
          className={`${styles.label} ${
            value || isFocused ? styles.floating : ''
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
