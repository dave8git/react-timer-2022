import styles from './Button.module.scss';

const Button = props => {
    return (<button className={styles.button} type="submit">{props.children}</button>);
};

export default Button;