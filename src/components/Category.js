import Container from '@mui/material/Container';
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import MiniDrawer from './Home'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";  
import Checkbox from "@mui/material/Checkbox";
import './style.css'

const getData = () => {
    return axios.get("https://test.api.yengilcredit.uz/category/list?parent=false")
}

const Category = () => {
    const { data, isLoading, isError } = useQuery("category", getData)

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

  return (
    <>
        <MiniDrawer />
        <Container style={{ marginTop: "100px" }}>
            <h1>Category</h1>
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
                  Name
                </TableCell>
                <TableCell align="left">
                  Parent name
                </TableCell>
              </TableRow>
            </TableHead>
            {data?.data?.content?.map(category => {
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
                        {category?.id}
                    </TableCell>
                    <TableCell>
                        {category?.name}
                    </TableCell>
                    <TableCell>
                        {category?.parent_category?.name}
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

export default Category