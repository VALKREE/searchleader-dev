import React, {useEffect, useState} from 'react';
import classes from './Form.module.css';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";

const Form = (props) => {
    //TODO: move VALIDATION on HOOK
    const [name,setName] = useState('');
    const [nameDirty,setNameDirty] = useState(false);
    const [nameError,setNameError] = useState('Поле заполнено неверно');
    const [phone,setPhone] = useState('');
    const [phoneDirty,setPhoneDirty] = useState(false);
    const [phoneError,setPhoneError] = useState('Поле заполнено неверно');
    const [email,setEmail] = useState('');
    const [emailDirty,setEmailDirty] = useState(false);
    const [emailError,setEmailError] = useState('Поле заполнено неверно');
    const [valid,setValid] = useState(false);

    let classesError = classes.input_error;
    const validNameHandler = (e) => {
        setName(e.target.value);
        let regex = /^[A-Za-zА-Яа-я ,.'-]+$/;
        if(!regex.test(String(e.target.value).toLowerCase())){
            setNameError('Некорректное имя');
            e.target.classList.add(classesError);
        }else{
            setNameError('');
            e.target.classList.remove(classesError);
        }
    }
    const validPhoneHandler = (e) => {
        setPhone(e.target.value);
        let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        if(!regex.test(String(e.target.value).toLowerCase())){
            setPhoneError('Некорректный номер');
            e.target.classList.add(classesError);
        }else{
            setPhoneError('');
            e.target.classList.remove(classesError);
        }
    }
    const validEmailHandler = (e) => {
        setEmail(e.target.value);
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regex.test(String(e.target.value).toLowerCase())){
            setEmailError('Некорректный email');
            e.target.classList.add(classesError);
        }else{
            setEmailError('');
            e.target.classList.remove(classesError);
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'name':
                setNameDirty(true);
                break;
            case 'phone':
                setPhoneDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
        }
    }

    useEffect(() => {
        if(nameError || phoneError || emailError){
            setValid(false);
        }else{
            setValid(true);
        }
    },[nameError, phoneError, emailError])

    const [modal,setModal] = useState(false);
    let randomNumber = Math.trunc(Math.random() * (999999) + 0);

    function showModal(e){
        e.preventDefault();
        setModal(true);
        send(name,phone,email,randomNumber)
    }
    const sendData = async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            body: data,
        });

        if (!response.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
        }

        return await response.json();
    }
    function send(name,phone,email,randomNumber){
       let newData = {
           name: name,
           phone: phone,
           email: email,
           number: randomNumber
       };
        sendData('http://localhost:3000/index.php', newData)
            .then((res) => {
                console.log(res);
            });

    }
    return (
        <form className={classes.form}>
            <Modal visible={modal} setVisible={setModal}>
                <div className={classes.modal_wrapper}>
                    <h3 className={classes.modal_heading}>Спасибо <b>{name}</b>, ваш заказ <b>№{randomNumber}</b> оформлен.</h3>
                    <p className={classes.modal_text}>В ближайшее время мы свяжемся с вами по телефону <b>{phone}</b> для его подтверждения.</p>
                </div>
            </Modal>
            <h2 className={classes.heading}>{props.heading}</h2>
            <div className={classes.wrapper}>
                <Input
                    className={classes.input}
                    value={name}
                    onChange={e => validNameHandler(e)}
                    onBlur={e => blurHandler(e)}
                    name='name'
                    placeholder='Ваше имя'
                    type='text'
                    required
                />
                <div className={classes.errorMessage}>{(nameDirty && nameError) && nameError}</div>

                <Input
                    className={classes.input}
                    value={phone}
                    onChange={e => validPhoneHandler(e)}
                    onBlur={e => blurHandler(e)}
                    name='phone'
                    placeholder='Телефон'
                    type='tel'
                    required
                />
                <div className={classes.errorMessage}>{(phoneDirty && phoneError) && phoneError}</div>

                <Input
                    className={classes.input}
                    value={email}
                    onChange={e => validEmailHandler(e)}
                    onBlur={e => blurHandler(e)}
                    name='email'
                    placeholder='Email'
                    type='email'
                    required
                />
                <div className={classes.errorMessage}>{(emailDirty && emailError) && emailError}</div>
            </div>
            <Button
                disabled={!valid}
                type='submit'
                className={classes.button}
                onClick={(e) => showModal(e)}
            >ОФОРМИТЬ ЗАКАЗ</Button>
        </form>
    );
};

export default Form;