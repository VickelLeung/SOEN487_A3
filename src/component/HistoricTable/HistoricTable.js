import React, { PureComponent } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

import { getHistoricData } from "../../WebServiceAPI/WebServiceAPI";
import DateFnsUtils from "@date-io/date-fns";
import format from "date-fns/format";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

class HistoricTable extends PureComponent {
  state = {
    rows: [],
    selectedDate: null,
    // displayDate: "",
  };

  handleDateChange = (date) => {
    // let getDate = format(date, "yyyy/MM/dd");
    this.setState({ selectedDate: date });
  };

  findDate = () => {
    this.setState({ rows: [] });
    let result = format(this.state.selectedDate, "yyyy-MM-dd");
    if (this.state.selectedDate != null) {
      getHistoricData(result).then((results) => {
        if (results != undefined) {
          this.setState({ rows: this.state.rows.concat(results.rates) });
        } else {
          alert("Sorry there was no results found, please try again");
        }
      });
    }
  };

  render() {
    return (
      <div>
        <h1>History of dates</h1>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            value={this.state.selectedDate}
            onChange={this.handleDateChange}
          />
        </MuiPickersUtilsProvider>
        <Button onClick={this.findDate}>Submit</Button>
        <Container>
          {/* {this.state.displayDate == "" ? null : (
            <p>The history from : {this.state.selectedDate}</p>
          )} */}
          <TableWrapper component={Paper}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Currency Name</TableCell>
                  <TableCell align="right">Before&nbsp;</TableCell>
                  <TableCell align="right">Now&nbsp;</TableCell>
                  <TableCell align="right">Total changes&nbsp;</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.rows.map((row) => (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {/* {row.name} */}
                    </TableCell>
                    <TableCell align="right">{row.currencyType}</TableCell>
                    <TableCell align="right">{row.currencyRate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>
        </Container>
      </div>
    );
  }
}

export { HistoricTable };

const TableWrapper = styled(TableContainer)`
  max-height: 50vh;
  margin: 10% 5%;
`;

const Container = styled.div``;
