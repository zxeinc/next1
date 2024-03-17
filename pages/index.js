import React from 'react'
import styles from '../styles/Home.module.css' 

export default function Time() {
  const [time, setTime] = React.useState("Загрузка времени сервера...");
  React.useEffect(() => {
    const fetchTime = async () => {
      const response = await fetch('https://next1-cyan.vercel.app/api/getServerTime');
      const data = await response.text();
      setTime(data);
    };

    // Вызываем fetchTime сразу после монтирования компонента
    fetchTime();

    // Затем запускаем интервал, чтобы обновлять время каждую секунду
    const intervalId = setInterval(fetchTime, 1000);

    // Не забываем очистить интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);


  
  return (
    <div className={styles.container}>
      <p>{time}</p>
    </div>
  )
}
