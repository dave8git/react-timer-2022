import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
    function msToTime(time) {
        const milliseconds = Math.floor((time % 1000)/100),
        seconds = Math.floor((time / 1000) % 60), 
        minutes = Math.floor((time / (1000 * 60)) % 60), 
        hours = Math.floor((time / (1000 * 60 * 60)) % 24);

        const hoursTime = (hours < 10) ? "0" + hours : hours;
        const minutesTime = (minutes < 10) ? "0" + minutes : minutes;
        const secondsTime = (seconds < 10) ? "0" + seconds : seconds; 

        return hoursTime + ":" + minutesTime + ":" + secondsTime + "." + milliseconds
    }
   
    return (
        <div className={styles.component}>
            {msToTime(time)};
        </div>
        );
    };

export default FormattedTime;