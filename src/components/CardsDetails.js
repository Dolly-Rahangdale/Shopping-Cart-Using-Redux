import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { REMOVE, ADD, REMOVEONEITEM } from '../redux/actions/index';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


export default function CardsDetails() {

  const [data, setData] = useState([]);
  // console.log(data);

  const { id } = useParams();
  // console.log(id);

  const getData = useSelector((state) => state.productReducer.carts);
  // console.log(getData);

  const compare = () => {
    let compareProduct = getData.filter((e) => {
      return e.id == id
    });
    setData(compareProduct);
    // console.log(compareProduct);
  }

  useEffect(() => {
    compare();
  }, [id])

  const dispatch = useDispatch();

  // add Data
  const send = (element) => {
    // console.log(element);
    dispatch(ADD(element));
  }
  const remove_one_prod = (prod) => {
    dispatch(REMOVEONEITEM(prod));
  }

  // remove dispatch
  const removePro = (id) => {
    dispatch(REMOVE(id))
    history('/');
  }

  const history = useNavigate();

  return (
    <>
      <div><NavBar /></div>

      <div className=" mt-2">
        <h2 className="text-center">Cards  Details  </h2>

        <section className=" bg-light" style={{ margin: '0 auto', width: '70%' }}>
          <div className="itemsdetails d-flex">

            {
              data.map((ele) => {
                return (
                  <div className='container d-flex flex-wrap align-item-center'>
                    <div>
                      <CardMedia
                        component="img"
                        sx={{ height: 260, width: 200, m: '0 auto' }}
                        src={ele.image}
                        alt="Mobile"
                      // title="green iguana"
                      />
                    </div>
                    <div>
                      <TableContainer component={Paper}>
                        <Table>
                          <TableRow>
                            <TableCell>
                              <p><strong>Shopping : </strong>  Mobiles</p>
                              <p><strong>Name : </strong> {ele.name} </p>
                              <p><strong>Price : </strong>  {ele.price} </p>
                              <p><strong>Total : </strong> {ele.price} </p>
                              <div className='d-flex'>
                                <p className='m-1 text-danger'><strong> Quantity : </strong></p>
                                <div className="p-1 d-flex justify-content-between rounded" align="center" style={{ width: 90, backgroundColor: "pink", cursor: "pointer" }}>
                                  <span style={{ fontSize: 20, }} onClick={ele.quantity <= 1 ? () => removePro(ele.id) : () => remove_one_prod(ele)}> - </span>
                                  <span style={{ fontSize: 20, }}> {ele.quantity} </span>
                                  <span style={{ fontSize: 20, }} onClick={() => send(ele)} > + </span>
                                </div>

                              </div>
                            </TableCell>

                            <TableCell>
                              <p><strong>Rating : </strong><span style={{ backgroundColor: "green", color: "white", padding: "1px 2px", borderRadius: "5px" }}> 3.5 *</span> </p>
                              <p><strong>Order Review :</strong> Order Placed Here recently </p>
                              <Grid item xs={8}  >
                                <strong>Remove : </strong> <DeleteIcon sx={{ color: "red", cursor: "pointer" }} onClick={() => removePro(ele.id)} />
                              </Grid>
                            </TableCell>

                          </TableRow>
                        </Table>
                      </TableContainer>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </section>


      </div>

      <div><Footer /></div>

    </>
  )
}
