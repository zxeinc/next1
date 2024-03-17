import {Button, List, Modal, Typography, Image, Text, Space} from "antd";
import {useEffect, useState} from "react";
import CreateAnimalCard from "./createAnimalCard";
import styles from '../styles/Home.module.css' 

const AnimalCardPage = () => {

    const [animalCardModal, setAnimalCardModal] = useState(false)
    const [animals, setAnimals] = useState([]);

    const { Text} = Typography;

    const onClick = () => {
        console.log('hello')
        setAnimalCardModal(true)
    }

    useEffect(() => {
        fetch('https://next1-cyan.vercel.app/api/getAnimalsCards', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети или сервера: ' + response.status);
            }
            return response.json(); // Преобразуем ответ в JSON
        })
        .then(data => {
            //console.log('Успешный ответ от сервера:', data);
            // Устанавливаем полученные данные в состояние
            setAnimals(data);
        })
        .catch(error => {
            console.error('Ошибка:', error);
            // Обработка ошибок
        });

    }, [animals]);

    return (
        <>
            <Button onClick={onClick}>Create</Button>
            <CreateAnimalCard animalCard={animalCardModal} setAnimalCard={setAnimalCardModal} setAnimals={setAnimals}/>

            {/* <List
                bordered
                style={"color: 'white'"}
                dataSource={animals} // Устанавливаем данные из состояния в качестве dataSource
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark>[ID]</Typography.Text> {item.id}<br/>
                        <Typography.Text mark>[Name]</Typography.Text> {item.name}<br/>
                        <Typography.Text mark>[Loss Place]</Typography.Text> {item.lossPlace}<br/>
                        <Image width={200} height={200} src={item.photo} />
                    </List.Item>
                )}
            /> */}

            <List
            className={styles.container}
            bordered
                style={{color: 'white'}}
                grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
                }}
                dataSource={animals}
                renderItem={(item) => (
                    <List.Item>
                    <Typography.Text mark>[ID]</Typography.Text> <Text id="cardText">{item.id}</Text><br/>
                    <Typography.Text mark>[Name]</Typography.Text> {item.name}<br/>
                    <Typography.Text mark>[Loss Place]</Typography.Text> {item.lossPlace}<br/>
                    <Image width={200} height={200} src={item.photo} />
                </List.Item>
                )}
            />
        </>
    )
}

export default AnimalCardPage