import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Button, makeStyles, withStyles } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { loadCompanys, fetchCompanys } from "../../../redux/index";
import { useSelector, useDispatch } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Avatar from "@material-ui/core/Avatar";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import CompanySearch from "./CompanySearch";
import Hidden from "@material-ui/core/Hidden";
// import { useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + * .MuiTextField-root ": {
      margin: theme.spacing(1),
      marginBottom: 12,

      [theme.breakpoints.down("sm")]: {
        width: "100%",
        display: "Center",
      },
      [theme.breakpoints.up("md")]: {
        width: "100%",
        justify: "center",
      },
      [theme.breakpoints.up("lg")]: {
        width: 305,
        display: "Center",
      },
    },
    display: "flex",
  },
  title: {
    fontSize: 18,
  },
  table: {
    minWidth: 700,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1, 0),
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.default,
    color: theme.palette.common.black,
    size: "small",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function CompanyList() {
  const classes = useStyles();
  const companydata = useSelector((state) => state.company);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanys(companydata.sort, companydata.order, 10, 0));
  }, []);

  const [open, setOpen] = React.useState(false);
  //  const theme = useTheme();
  //  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = (e) => {
    setOpen(true);
    //  let id = (e.target.id)
  };

  //  const handleClose = () => {
  //    setOpen(false);
  //  };

  return companydata.loading ? (
    <div className={classes.root}>{/* <LinearProgress /> */}</div>
  ) : companydata.error ? (
    <h1>{companydata.error}</h1>
  ) : (
    <div>
      <CompanySearch />
      <Grid item sm={12} md={12} className={classes.root}>
        <ButtonGroup fullWidth aria-label="full width outlined button group">
          <Button className={classes.content} href="/addressbook/company/list">
            List Company
          </Button>
          <Button
            className={classes.content}
            href="/addressbook/company/create"
          >
            Create Company
          </Button>
        </ButtonGroup>
      </Grid>

      <Grid item sm={12} md={12} className={classes.content}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <Hidden only={["sm", "xs"]}>
                  <StyledTableCell key="id">
                    <TableSortLabel
                      direction={companydata.order === "desc" ? "asc" : "desc"}
                      onClick={() =>
                        dispatch(
                          fetchCompanys(
                            "id",
                            companydata.order === "desc" ? "asc" : "desc",
                            10,
                            0
                          )
                        )
                      }
                    >
                      Company ID
                    </TableSortLabel>
                  </StyledTableCell>
                </Hidden>

                <StyledTableCell key="logo">
                  <TableSortLabel
                    direction={companydata.order === "desc" ? "asc" : "desc"}
                    onClick={() =>
                      dispatch(
                        fetchCompanys(
                          "avatar",
                          companydata.order === "desc" ? "asc" : "desc",
                          10,
                          0
                        )
                      )
                    }
                  >
                    Logo
                  </TableSortLabel>
                </StyledTableCell>

                <StyledTableCell key="name">
                  <TableSortLabel
                    direction={companydata.order === "desc" ? "asc" : "desc"}
                    onClick={() =>
                      dispatch(
                        fetchCompanys(
                          "name",
                          companydata.order === "desc" ? "asc" : "desc",
                          10,
                          0
                        )
                      )
                    }
                  >
                    Name
                  </TableSortLabel>
                </StyledTableCell>

                <Hidden only={["sm", "xs"]}>
                  <StyledTableCell key="description">
                    <TableSortLabel
                      direction={companydata.order === "desc" ? "asc" : "desc"}
                      onClick={() =>
                        dispatch(
                          fetchCompanys(
                            "description",
                            companydata.order === "desc" ? "asc" : "desc",
                            10,
                            0
                          )
                        )
                      }
                    >
                      Description
                    </TableSortLabel>
                  </StyledTableCell>

                  <StyledTableCell key="email">
                    <TableSortLabel
                      direction={companydata.order === "desc" ? "asc" : "desc"}
                      onClick={() =>
                        dispatch(
                          fetchCompanys(
                            "email",
                            companydata.order === "desc" ? "asc" : "desc",
                            10,
                            0
                          )
                        )
                      }
                    >
                      E-mail
                    </TableSortLabel>
                  </StyledTableCell>
                  <StyledTableCell key="mobile">
                    <TableSortLabel
                      direction={companydata.order === "desc" ? "asc" : "desc"}
                      onClick={() =>
                        dispatch(
                          fetchCompanys(
                            "mobile",
                            companydata.order === "desc" ? "asc" : "desc",
                            10,
                            0
                          )
                        )
                      }
                    >
                      Mobile
                    </TableSortLabel>
                  </StyledTableCell>
                  <StyledTableCell key="website">
                    <TableSortLabel
                      direction={companydata.order === "desc" ? "asc" : "desc"}
                      onClick={() =>
                        dispatch(
                          fetchCompanys(
                            "website",
                            companydata.order === "desc" ? "asc" : "desc",
                            10,
                            0
                          )
                        )
                      }
                    >
                      Website
                    </TableSortLabel>
                  </StyledTableCell>

                  <StyledTableCell key="fax">
                    <TableSortLabel
                      direction={companydata.order === "desc" ? "asc" : "desc"}
                      onClick={() =>
                        dispatch(
                          fetchCompanys(
                            "fax",
                            companydata.order === "desc" ? "asc" : "desc",
                            10,
                            0
                          )
                        )
                      }
                    >
                      Fax
                    </TableSortLabel>
                  </StyledTableCell>

                  <StyledTableCell key="address">
                    <TableSortLabel
                      direction={companydata.order === "desc" ? "asc" : "desc"}
                      onClick={() =>
                        dispatch(
                          fetchCompanys(
                            "addresslineone",
                            companydata.order === "desc" ? "asc" : "desc",
                            10,
                            0
                          )
                        )
                      }
                    >
                      Address
                    </TableSortLabel>
                  </StyledTableCell>

                  <StyledTableCell key="createdBy">
                    <TableSortLabel
                      direction={companydata.order === "desc" ? "asc" : "desc"}
                      onClick={() =>
                        dispatch(
                          fetchCompanys(
                            "user",
                            companydata.order === "desc" ? "asc" : "desc",
                            10,
                            0
                          )
                        )
                      }
                    >
                      Created By
                    </TableSortLabel>
                  </StyledTableCell>

                  <StyledTableCell key="establishedDate">
                    <TableSortLabel
                      direction={companydata.order === "desc" ? "asc" : "desc"}
                      onClick={() =>
                        dispatch(
                          fetchCompanys(
                            "establishedDate",
                            companydata.order === "desc" ? "asc" : "desc",
                            10,
                            0
                          )
                        )
                      }
                    >
                      Established Date
                    </TableSortLabel>
                  </StyledTableCell>

                  <StyledTableCell key="lastUpdated">
                    <TableSortLabel
                      direction={companydata.order === "desc" ? "asc" : "desc"}
                      onClick={() =>
                        dispatch(
                          fetchCompanys(
                            "lastUpdated",
                            companydata.order === "desc" ? "asc" : "desc",
                            10,
                            0
                          )
                        )
                      }
                    >
                      Last Updated
                    </TableSortLabel>
                  </StyledTableCell>
                </Hidden>

                <StyledTableCell> Edit </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {companydata.companys.map((company) => (
                <StyledTableRow key={company.id}>
                  <Hidden only={["sm", "xs"]}>
                    <StyledTableCell component="th" scope="row">
                      {company.id}
                    </StyledTableCell>
                  </Hidden>
                  <StyledTableCell component="th" scope="row">
                    <IconButton color="secondary" aria-label="Profile Picture">
                      <Avatar
                        alt={company.name}
                        src={
                          company.avatar ? "/" + company.avatar : company.name
                        }
                      />
                    </IconButton>
                  </StyledTableCell>

                  <StyledTableCell component="th" scope="row">
                    <Link
                      to={
                        "/addressbook/company/showcompanydetail/" + company.id
                      }
                    >
                      {" "}
                      {company.name}{" "}
                    </Link>
                  </StyledTableCell>
                  <Hidden only={["sm", "xs"]}>
                    <StyledTableCell component="th" scope="row">
                      {company.description}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {company.email}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {company.mobile}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {company.website}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {company.fax}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {company.addresslineone} {company.addresslinetwo},{" "}
                      {company.state}-{company.zip}, {company.country}{" "}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {company.user}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {company.establishedDate}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {company.lastUpdated}
                    </StyledTableCell>
                  </Hidden>
                  <StyledTableCell component="th" scope="row">
                    <IconButton
                      color="secondary"
                      id={company.id}
                      onClick={handleClickOpen}
                      aria-label="Edit Company"
                    >
                      <EditIcon />
                    </IconButton>
                  </StyledTableCell>
                  {/* <ShowCompanyPage
              open = {open}
              fullScreen = {fullScreen}
              handleClose = {handleClose}
              companydata = {company.id}
            /> */}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            onClick={() =>
              dispatch(
                loadCompanys(
                  companydata.sort,
                  companydata.order,
                  companydata.max,
                  companydata.offset
                )
              )
            }
          >
            Load More
          </Button>
        </TableContainer>
      </Grid>
    </div>
  );
}
export default CompanyList;
