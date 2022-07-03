import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ADD_NEW_PRODUCTS } from '../gqlOperation/queries';
import styles from "../styles/formStyle.module.css";
import { useForm } from "react-hook-form";
function ProductAddEdit() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    let [product, setproduct] = useState({ title: "", image: "", price: "", category: "" });
    //const [addNewProduct, { loading, error, data }] = useMutation(ADD_NEW_PRODUCTS);
    // if (loading) return <small style={{color:"red"}}>Submiting..</small>
    // if (error) return <small style={{color:"red"}}>{ error.message }</small>
    //const [userInfo, setUserInfo] = useState();

    const addProduct = (e) => {
        // e.preventDefault();
        // addNewProduct({
        //     variables: {
        //         ...product
        //     }
        // });
        // if (data)
        //     console.log("data:", data);
        // setUserInfo(e);
        console.log(e);
    }
    return (

        <section className={styles.container}>
            <div className={`${styles.formStyle}`}>
                {/* <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> */}
                <form onSubmit={handleSubmit(addProduct)}>
                    <h2 style={{ textAlign: "center" }}>Add New Product</h2>

                    <div className="form-group">
                        {/* <input type="text" name="title" ref={register({ required: "Title field is required!" })} className="form-control my-3" placeholder="Enter title" onChange={e => setproduct({ ...product, title: e.target.value })} /> */}
                        <input type="text" {...register('title', { min: 18, max: 99 }, { required: true })} className="form-control my-3" placeholder="Enter title" onChange={e => setproduct({ ...product, title: e.target.value })} />
                        <p>{errors.title && <small style={{color:"red"}}>Title field is required!</small>}</p>
                    </div>

                    <div className="form-group">
                        <input type="text" {...register('image', { required: true })} className="form-control my-3" placeholder="Enter image" onChange={e => setproduct({ ...product, image: e.target.value })} />
                        {/* <p>{error.image.message}</p> */}
                        <p>{errors.image && <small style={{color:"red"}}>Image field is required!</small>}</p>
                    </div>

                    <div className="form-group">
                        <input type="text" {...register('price', { required: true })} className="form-control my-3" placeholder="Enter price" onChange={e => setproduct({ ...product, price: e.target.value })} />
                        <p>{errors.price && <small style={{color:"red"}}>Price field is required!</small>}</p>
                    </div>

                    <div className="form-group">
                        <input type="text" {...register('category', { required: true })} className="form-control my-3" placeholder="Enter category" onChange={e => setproduct({ ...product, category: e.target.value })} />
                        <p>{errors.category && <small style={{color:"red"}}>Category field is required!</small>}</p>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Submit</button>
                </form>
            </div>
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
