import { useEffect, useState } from "react";
import { MenuItem, Button, AccordionDetails } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import {
  Accordion,
  AccordionSummary,
  useStyles,
  TextFieldStyled,
} from "./style";
import axiosClient from "../../../../services/axiosClient";
import InputAutocomplete from "../../../../components/InputAutocomplete";
import { ICON_FILTER } from "../../../../assets";
import { useSelector } from "react-redux";

export default function Filter(props) {
  const classes = useStyles();
  const {
    deleteDataFilter,
    handleChangeForm,
    submit,
    valueForm,
    handleChangeValueInputAutocomplete,
    handleChangeInputTextInAutocomplete,
    inputValueAutocomplete,
    handleScrollBottom,
    dataUser,
    handleFillterUser,
  } = props;
  const [expanded, setExpanded] = useState(false);
  const [optionFilter, setOptionFilter] = useState(false);
  const dataDepartment = useSelector((state) => state.dataDepartment.allData);
  useEffect(() => {
    axiosClient
      .get("/request/search")
      .then((d) => {
        setOptionFilter(d.data);
      })
      .catch((e) => {});
  }, []);
  return (
    <Accordion onChange={() => setExpanded(!expanded)}>
      <AccordionSummary>
        <div className={classes.summary}>
          <div> {ICON_FILTER} Filter options </div>
          <span>
            {expanded ? <ExpandLessIcon /> : <KeyboardArrowDownIcon />}
          </span>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.container}>
          <div className={classes.content}>
            <TextFieldStyled
              value={valueForm.name}
              onChange={handleChangeForm}
              name="name"
              label="Name"
              variant="outlined"
            />

            <TextFieldStyled
              value={valueForm.content}
              onChange={handleChangeForm}
              name="content"
              label="Content"
              variant="outlined"
            />

            <TextFieldStyled
              label="Date create"
              type="date"
              name="dateCreate"
              value={valueForm.dateCreate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChangeForm}
              variant="outlined"
            />

            <TextFieldStyled
              label="Status"
              value={valueForm.statusAdmin}
              name="statusAdmin"
              onChange={handleChangeForm}
              variant="outlined"
              select
            >
              <MenuItem value=""> All </MenuItem>
              <MenuItem value="notClose"> Not close </MenuItem>
              <MenuItem value="Open"> Open </MenuItem>
              <MenuItem value="In progress"> In progress </MenuItem>
              <MenuItem value="Close"> Close </MenuItem>
            </TextFieldStyled>

            <InputAutocomplete
              className={classes.autoInput}
              handleChange={handleChangeValueInputAutocomplete}
              handleChangeParamsFilterName={handleChangeInputTextInAutocomplete}
              paramsNameFilter={inputValueAutocomplete}
              TextFieldStyled={TextFieldStyled}
              handleScrollBottom={handleScrollBottom}
              data={dataUser.allData}
              infoPage={dataUser.infoPage}
              handleFillter={handleFillterUser}
            />
            <TextFieldStyled
              value={valueForm.department}
              onChange={handleChangeForm}
              name="department"
              label="department"
              variant="outlined"
              select
            >
              <MenuItem value=""> All </MenuItem>
              {optionFilter &&
                dataDepartment.map((e) => {
                  return (
                    <MenuItem key={e.id} value={e.id}>
                      {e.name}
                    </MenuItem>
                  );
                })}
            </TextFieldStyled>
            <TextFieldStyled
              value={valueForm.assign}
              onChange={handleChangeForm}
              name="assign"
              label="Assign"
              variant="outlined"
              select
            >
              <MenuItem value=""> All </MenuItem>
              {optionFilter &&
                optionFilter.admin.map((e) => {
                  return (
                    <MenuItem key={e.id} value={e.id}>
                      {e.name}
                    </MenuItem>
                  );
                })}
            </TextFieldStyled>

            <TextFieldStyled
              value={valueForm.category}
              onChange={handleChangeForm}
              name="category"
              label="category"
              variant="outlined"
              select
            >
              <MenuItem value=""> All </MenuItem>
              {optionFilter &&
                optionFilter.category.map((e) => {
                  return (
                    <MenuItem key={e.id} value={e.id}>
                      {e.name}
                    </MenuItem>
                  );
                })}
            </TextFieldStyled>
          </div>

          <div className={classes.config}>
            <Button variant="contained" onClick={deleteDataFilter}>
              Clear
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                submit(1);
              }}
            >
              Filter
            </Button>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
