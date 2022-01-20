import React, {useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/Auth.context'
import {useHttp} from '../hooks/http.hook'



export const MainPage = (props) => {


    const [email,setEmail] = useState("");
    const [FIO,setFIO] = useState("");
    const [position,setPosition] = useState("");
    const [phone,setPhone] = useState("");
    const [classroom,setClassroom] = useState("");
    const [building,setBulding] = useState("");
    const [explaining,setExplaining] = useState("");
    const [KTnumber,setKTnumber] = useState("");
    const { request} = useHttp()


    const auth = useContext(AuthContext)
    useEffect(()=> {
        var elems = document.getElementById("sel");
        var instances = window.M.FormSelect.init(elems, {inDuration: 300, outDuration: 225});
    }, []) 
    
    const SendExplaining = async () => {
        try{
           
            await request('/api/request/add', 'POST', {email,FIO,position,phone,classroom,
            explaining,KTnumber,building}, 
            {
                Authorization: `Bearer ${auth.token}`
            })
            
        } catch(e) {}
    }
 
    const onChangehand1 = (e) =>{
        setEmail(e.target.value);
        console.log(e.target.value);
    }
 
    const onChangehand2 = (e) =>{
        setFIO(e.target.value);
        console.log(e.target.value);
    }
 
    const onChangehand3 = (e) =>{
        setPosition(e.target.value);
        console.log(e.target.value);
    }
 
    const onChangehand4 = (e) =>{
        setPhone(e.target.value);
        console.log(e.target.value);
    }
 
    const onChangehand5 = (e) =>{
        setClassroom(e.target.value);
        console.log(e.target.value);
    }
 
    const onChangehand6 = (e) =>{
        setExplaining(e.target.value);
        console.log(e.target.value);
    }
 
    const onChangehand7 = (e) =>{
        setBulding(e.target.value);
        console.log(e.target.value);
    }
 
    const onChangehand8 = (e) =>{
        setKTnumber(e.target.value);
        console.log(e.target.value);
    }
 

    return (
        <div id="main">
            <form onSubmit={SendExplaining}>
                <label> Электронная почта:<span>*</span>
                    <input type='text' required="true" id='email' onChange={(event) => onChangehand1(event)} value={email} defaultValue='sasha@gmail.com'  ></input>
                </label> 
                <label> П.І.Б:<span>*</span>
                    <input type='text' required="true" name='FIO' onChange={(event) => onChangehand2(event)} defaultValue='dsagasf gasdfda gasdfa' ></input>
                </label>
                <label> Посада:<span>*</span>
                    <input type='text' required="true" name='position' onChange={(event) => onChangehand3(event)} defaultValue='god'></input>
                </label>
                <label> Номер телефону:<span>*</span>
                    <input type='text' required="true" name='phone' onChange={(event) => onChangehand4(event)} defaultValue='352134123'></input>
                </label>
                <label> Будівля:<span>*</span>
                <div className="input-field col s12">
                    <select  id="sel" onChange={(event) => onChangehand5(event)}>
                        <option value="" disabled selected>
                        Вибрати зі списку
                        </option>
                        <option value="Головний">"Головний"</option>
                        <option value="Гуманітарний">"Гуманітарний"</option>
                        <option value="ДТО">ДТО</option>
                        <option value="Худ.граф">Худ.граф</option>
                        <option value="Муз.пед">Муз.пед</option>
                        <option value="Гуртожиток 1">Гуртожиток 1</option>
                        <option value="Гуртожиток 2">Гуртожиток 2</option>
                        <option value="Гуртожиток 3">Гуртожиток 3</option>
                        <option value="Гуртожиток 4">Гуртожиток 4</option>
                        <option value="Віварий">Віварий</option>
                        <option value="Майстерня">Майстерня</option>
                    </select>
                </div>
                </label>

                <br></br>
                <label> Аудиторія:<span>*</span>
                    <input type='text' required="true" onChange={(event) => onChangehand6(event)} name='classroom' defaultValue='2123'></input>
                </label>
                <label> Ознаки несправності/завдання:<span>*</span>
                    <input type='text' required="true" name='explaining' onChange={(event) => onChangehand7(event)} defaultValue='sfaasgfasdf'></input>
                </label>
                <label> Інвентарний номер КТ:<span>*</span>
                    <input type='text' required="true" name='KTnumber' onChange={(event) => onChangehand8(event)} defaultValue='23'></input>
                </label>
                <input type="submit" value='Відправити'  classname="waves-effect waves-light btn" ></input>
            </form>
        </div> 
    )
}