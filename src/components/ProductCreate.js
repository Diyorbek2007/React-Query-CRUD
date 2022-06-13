import { Paper } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import { useState } from 'react'
import { useMutation } from "react-query"
import MiniDrawer from './Home'
import { makeStyles } from '@mui/styles';
import { Navigate, useNavigate } from 'react-router-dom'

const addProduct = async (data) => {
    return axios.post("http://localhost:3000/product", data)
}

const useStyles = makeStyles({
    input: {
        padding: "10px 200px 10px 20px",
        fontSize: "15px",
        fontWeight: 500,
        borderRadius: "5px",
        border: "2px solid gray",
        marginBottom: "20px",
        fontFamily: "Poppins"
    },
    button: {
        backgroundColor: "#065374",
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "9px 20px",
        fontSize: "17px",
        fontWeight: 400,
        fontFamily: "Poppins",
        width: "150px",
        height: "50px"
    }
})

const ProductCreate = () => {
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const classes = useStyles()
    const navigate = useNavigate()

    const useAddItem = () => {
        return useMutation(addProduct)
    }

    const {mutate} = useAddItem()

    const handleSubmit = () => {
        mutate({name, brand, category, price})
        setName("")
        setBrand("")
        setCategory("")
        setPrice("")
    }

  return (
    <>
        <Container>
            <Paper style={{ padding: "30px 50px" }}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input className={classes.input} value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="name" />
                    </div>
                    <div>
                        <input className={classes.input} value={brand} onChange={(e) => setBrand(e.target.value)} type="text" placeholder="brand name" />
                    </div>
                    <div>
                        <input className={classes.input} value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="category name" />
                    </div>
                    <div>
                        <input className={classes.input} value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="narxi" />
                    </div>
                    <button type="submit" className={classes.button}>Add Product</button>
                </form>
            </Paper>
        </Container>
    </>
  )
}

export default ProductCreate