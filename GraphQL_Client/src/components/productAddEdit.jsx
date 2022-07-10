import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ADD_NEW_PRODUCTS } from '../gqlOperation/queries';
import styles from "../styles/formStyle.module.css";
import { useForm } from "react-hook-form";
import { Stack, TextField } from '@mui/material';
import { useMemo } from 'react';

function ProductAddEdit() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let [counterOne, setCounterOne] = useState(0);
    let [counterTwo, setCounterTwo] = useState(0);
    // const onSubmit = data => console.log(data);

    let [product, setproduct] = useState({ title: "", image: "", price: "", category: "" });
    //const [addNewProduct, { loading, error, data }] = useMutation(ADD_NEW_PRODUCTS);
    // if (loading) return <small style={{color:"red"}}>Submiting..</small>
    // if (error) return <small style={{color:"red"}}>{ error.message }</small>
    //const [userInfo, setUserInfo] = useState();


    const addProduct = () => {
        // e.preventDefault();
        // addNewProduct({
        //     variables: {
        //         ...product
        //     }
        // });
        // if (data)
        //     console.log("data:", data);
        // setUserInfo(e);

        setCounterOne(++counterOne)
    }
    const add2 = () => {
        setCounterTwo(++counterTwo)
    }
    const isEven = useMemo(() => {
        console.log("..is even called");
        let i = 0;
        while (i < 2000000000) {
            i++;
        }
        return setCounterOne % 2 === 0;
    }, [counterOne])

    return (

        <section className={styles.container}>
            <Stack className={styles.formStyle}>
                {/* <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> */}
                <div>
                    <button onClick={addProduct}>counterOne {counterOne}</button>
                    <span> {isEven ? "Even" : "Odd"} </span>
                    <button onClick={add2}>counterTwo {counterTwo}</button>
                </div>

            </Stack>
            {/* <form className={`${styles.formStyle}`} style={{display:"flex", flexDirection:"column", padding:"15px"}} onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input type="number" {...register("age", { min: 18, max: 99 })} />
                <input type="submit" />
            </form> */}
        </section>
    );
}

export default ProductAddEdit;
