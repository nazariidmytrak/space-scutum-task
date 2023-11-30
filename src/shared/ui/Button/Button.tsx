import styles from './Button.module.scss';

interface ButtonProps {
  disabled?: boolean;
  icon: string;
  onClick: () => void;
}

const Button = ({ icon, onClick, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type='button'
      className={styles.button}
      onClick={onClick}
    >
      <img src={icon} alt='button-icon' />
    </button>
  );
};

export default Button;
