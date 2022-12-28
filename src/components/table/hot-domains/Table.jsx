import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { IconButton } from "@mui/material"

import addToCartLogo from "../../../assets/images/addToCartLogo.svg";

const List = () => {
  const rows = [
    {
      id: 1143155,
      country: "India",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      domain: "nexbloc.hind",
      date: "Dec 10, 2022",
      amount: 785,
    },
    {
      id: 2235235,
      country: "Nepal",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      domain: "nexbloc.hind",
      date: "Dec 22, 2022",
      amount: 900,
    },
    {
      id: 2342353,
      country: "Bhutan",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      domain: "nexbloc.hind",
      date: "Jan 11, 2023",
      amount: 35,
    },
    {
      id: 2357741,
      country: "China",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      domain: "nexbloc.hind",
      date: "Feb 05, 2023",
      amount: 920,
    },
    {
      id: 2342355,
      country: "Japan",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      domain: "nexbloc.hind",
      date: "Mar 25, 2023",
      amount: 2000,
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Country Location</TableCell>
            <TableCell className="tableCell">Domain Name</TableCell>
            <TableCell className="tableCell">Closing On</TableCell>
            <TableCell className="tableCell">Buy Now</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {/* <img src={row.img} alt="" className="image" /> */}
                  {row.country}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.domain}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">
                <Box className="amountWrapper">
                  <Box className="amount">$ {row.amount}</Box>
                  <Box className="cart-img">
                    <IconButton>
                      <img src={addToCartLogo} alt="" />
                    </IconButton>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
