import Container from '@mui/material/Container';
import axios from 'axios'
import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import MiniDrawer from './Home'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";  
import Checkbox from "@mui/material/Checkbox";
import './style.css'
import { Link } from 'react-router-dom';
import { Accordion, AccordionDetails, AccordionSummary, Tooltip, Typography } from '@mui/material';
import Edit from "../images/edit.png"
import Delete from "../images/delete.png"
import { makeStyles } from '@mui/styles';
import { refresh } from '../refresh';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProductCreate from './ProductCreate';

const useStyles = makeStyles({
  button: {
    background: "transparent",
    border: "none",
    cursor: "pointer"
  },
  createButton: {
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

const getData = () => {
    return axios.get("http://localhost:3000/product")
}

const deleteProduct = async (id) => {
  return await fetch(`http://localhost:3000/product/${id}`, { method: "DELETE" })
}

const Product = () => {
    const { data, isLoading, isError } = useQuery("category", getData, {
      refetchInterval: 0
    })
    console.log(data)
    const {mutateAsync} = useMutation(deleteProduct)
    const queryClient = useQueryClient()
    const classes = useStyles()

    if(isLoading){
        return (
          <>
            <MiniDrawer />
            <Container style={{ marginTop: "100px" }}>
              <h1>Loading...</h1>
            </Container>
          </>
        )
    }

    if(isError){
        return <h3>Error</h3>
    }

    const handleDelete = async (id) => {
      await mutateAsync(id)
      .then((res) => {
        if(res.status === 200){
          refresh()
        }else {
          console.log("ERROR")
        }
      })
    }

  return (
    <>
        <MiniDrawer />
        <Container style={{ marginTop: "100px" }} maxWidth="xl">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h1>Product</h1>
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>+ Qo'shish</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ProductCreate />
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    inputProps={{
                      "aria-label": "select all desserts",
                    }}
                  />
                </TableCell>
                <TableCell style={{ color: "red !important" }} align="left">
                  ID
                </TableCell>
                <TableCell align="left">
                  Short name
                </TableCell>
                <TableCell align="left">
                  Brand name
                </TableCell>
                <TableCell align="left">
                  Category name
                </TableCell>
                <TableCell align="left">
                  Price
                </TableCell>
                <TableCell align="left">
                  Amallar
                </TableCell>
              </TableRow>
            </TableHead>
            {data?.data?.map(product => {
                return (
                <TableBody>
                  <TableRow style={{ alignItems: "center" }}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        inputProps={{
                          "aria-label": "select all desserts",
                        }}
                      />
                    </TableCell>
                    <TableCell style={{ borderBottom: "1px solidrgba(224, 224, 224, 1)" }}>
                        {product?.id}
                    </TableCell>
                     <TableCell>
                        {product?.name}
                    </TableCell>
                    <TableCell>
                        {product?.brand}
                    </TableCell> 
                    <TableCell>
                        {product?.category}
                    </TableCell> 
                    <TableCell>
                        {product?.price} s'om
                    </TableCell> 
                    <TableCell>
                        <Link to={`${product.id}`}>
                            <Tooltip title="Details">
                                <button
                                  className={classes.button}
                                >
                                  <img src={Edit} alt="" />
                                </button>
                            </Tooltip>
                        </Link>
                        <button onClick={() => handleDelete(product.id)} className={classes.button}>
                          <img src={Delete} alt="" />
                        </button>
                    </TableCell> 
                  </TableRow>
                </TableBody>
                )
            })}
            </Table>
        </Container>
    </>
  )
}

export default Product