import {Button, Form, Input, message, Modal, Upload} from "antd";

const CreateAnimalCard = ({animalCard, setAnimalCard, setAnimals}) => {

    const [form] = Form.useForm()
    const [fileList, setFileList] = []



    const handleOk = () => {
        form.submit()
        setAnimalCard(false)
    }

    const handleCancel = () => {
        setAnimalCard(false)
    }

    const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

    const onFinish = async (values) => {
        const image = values.photo.file.originFileObj;

        //const base64Image = Buffer.from(JSON.stringify(image)).toString('base64');
        const base64Image = await getBase64(image);

        console.log("IMG", base64Image)
        values.photo.file = base64Image
        values.photo.fileList[0] = base64Image

        console.log(values)
        fetch('https://next1-cyan.vercel.app/api/saveAnimalCard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Successful response:', data);
                // Добавляем новую запись к текущему состоянию animals и обновляем состояние
                setAnimals([...animals, data]);
            })
            .catch((error) => console.error('Error: ', error))
        console.log(values)
    }

    return (
        <Modal open={animalCard} onOk={handleOk} onCancel={handleCancel} title={'Create Animal Card'}>
            <Form form={form} name={'createAnimalCard'} title={'Create Animal Card'} onFinish={onFinish}>
                <Form.Item id={'1'} name={'name'} label={'Кличка'}>
                    <Input/>
                </Form.Item>
                <Form.Item id={'2'} name={'lossPlace'} label={'Место пропажи'}>
                    <Input/>
                </Form.Item>
                <Form.Item id={'3'} name={'photo'} label={'Фотография'}>
                    <Upload fileList={fileList}>
                        <Button>Upload</Button>
                    </Upload>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default CreateAnimalCard