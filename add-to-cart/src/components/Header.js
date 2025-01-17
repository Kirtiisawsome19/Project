import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import { DLT } from "../redux/actions/Action";
import { useEffect } from "react";

const Header = () => {
  const [price,setPrice] = useState(0);
  //console.log(price)
 
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id)=>{
    dispatch(DLT(id))
  }
  
  const total = ()=>{
    let price = 0;
    getdata.map((ele,k)=>{
        price = ele.price + price
    });
    setPrice(price);
};
useEffect(()=>{
  total();
},[total])

  return (
    <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
      <Container>
        <NavLink to="/" className="text-decoration-none text-light mx-3">
          Add to cart
        </NavLink>
        <Nav className="me-auto">
          <NavLink to="/" className="text-decoration-none text-light">
            Home
          </NavLink>
        </Nav>
        <Badge
          badgeContent={getdata.length}
          color="primary"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <i
            className="fa-solid fa-cart-shopping text-light"
            style={{ fontSize: 25, cursor: "pointer" }}
          ></i>
        </Badge>
      </Container>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {getdata.length ? (
          <div className="card_details" style={{ width: "24rem", padding: 10 }}>
            <Table>
              <thead>
                <tr>
                  <th>photo</th>
                  <th>Restaurent Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  getdata.map((e)=>{
                    return(

                      <>
                      <tr>
                        <td>
                          <NavLink to={`/cart/${e.id}`}  onClickgzsa={handleClose}>
                          <img src={e.imgdata} style={{width:"10rem",height:"8rem"}} alt=""/>
                          </NavLink>
                         
                        </td>
                        <td>
                          <p>{e.rname}</p>
                          <p> Price:₹{e.price}</p>
                          <p> quantity:{e.qnty}</p>
                         
                          <p style={{color:"red",fontSize:20,cursor:"pointer"}} >
                            <i className="fas fa-trash smalltrash" onClick={()=>dlt(e.id)}></i>
                          </p>
                        </td>
                        <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  >
                                                        <i className='fas fa-trash largetrash' onClick={()=>dlt(e.id)}></i>
                                                        </td>
                      </tr>
                      </>
                    )


                  })
                }
                 <p className='text-center'>Total :₹{price}</p>
              </tbody>
            </Table>
          </div>
        ) : (
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: "24rem", padding: 10, position: "relative" }}
          >
            <i
              className="fas fa-close smallclose"
              onClick={handleClose}
              style={{
                position: "absolute",
                top: 2,
                right: 20,
                fontSize: 23,
                cursor: "pointer",
              }}
            ></i>
            <p style={{ fontSize: "20px" }}>Your cart is empty</p>
            <img
              src="./images/cart.gif"
              alt=""
              className="emptycart_img"
              style={{ width: "5rem", padding: 10 }}
            />
          </div>
        )}
      </Menu>
    </Navbar>
  );
};

export default Header;
