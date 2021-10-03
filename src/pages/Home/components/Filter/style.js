import { makeStyles, Select } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiTextField from "@material-ui/core/TextField";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";

export const useStyles = makeStyles({
  content: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    padding: "24px 0px",
    gap: "20px",
  },
  config: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: "0px 12px",
    },
  },
  summary: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& > div": {
      fontSize: "20px",
      display: "flex",
      alignItems: "center",
      flexWrap: "nowrap",
      gap: "12px",
      whiteSpace: "nowrap",
      fontWeight: 600,
      "& > svg": {
        width: "24px",
      },
    },
  },
  formControl: {
    minWidth: 220,
  },
  autoInput: {
    minWidth: "23%",
  },
});

export const TextFieldStyled = withStyles({
  root: {
    minWidth: "23%",
    "& > div": {
      minWidth: 220,
    },
  },
})(MuiTextField);

export const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
    borderRadius: "10px",
    overflow: "hidden",
    transition: "all ease 0.1s",
  },
  expanded: {},
})(MuiAccordion);

export const AccordionSummary = withStyles({
  root: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
    backgroundColor: "rgba(0,0,0,0.1)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.2)",
    },
    transition: "all ease 0.55s",
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
      display: "flex",
      justifyContent: "space-between",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

export const StyledSelect = withStyles((theme) => ({
  root: {
    width: "23%",
    minWidth: 220,
    "& > div": {
      minWidth: 220,
    },
  },
  outlined: {
    width: "23%",
    minWidth: 220,
    "& > div": {
      minWidth: 220,
    },
  },
}))(Select);
