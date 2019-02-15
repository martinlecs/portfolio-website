import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const InfoTable = () => {
  return (
    <div>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row">
            Categories
          </TableCell>
          <TableCell align="left">App, UI Design</TableCell>
        </TableRow>

        <TableRow>
          <TableCell component="th" scope="row">
            Live
          </TableCell>
          <TableCell align="left">http://github.com</TableCell>
        </TableRow>

        <TableRow>
          <TableCell component="th" scope="row">
            Released
          </TableCell>
          <TableCell align="left">2019</TableCell>
        </TableRow>

        <TableRow>
          <TableCell component="th" scope="row">
            Platforms
          </TableCell>
          <TableCell align="left">Web</TableCell>
        </TableRow>

        <TableRow>
          <TableCell component="th" scope="row">
            Tools
          </TableCell>
          <TableCell align="left">React.js, Material UI</TableCell>
        </TableRow>
      </TableBody>
    </div>
  );
};

export default InfoTable;
