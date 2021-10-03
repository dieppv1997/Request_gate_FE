import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { CircularProgress, Typography, Grid } from "@material-ui/core";
import PropTypes from 'prop-types';
import { useStyles } from "./style";

export default function InputAutocomplete({
  handleChange,
  paramsNameFilter,
  handleChangeParamsFilterName,
  TextFieldStyled,
  className,
  data,
  infoPage,
  handleScrollBottom,
  handleFillter,
}) {
  const classes = useStyles();
  const [value, setValue] = useState(null);
  const [loadingAc, setLoadingAc] = useState(true);

  useEffect(() => {
    setLoadingAc(true);
    handleFillter(
      () => {
        setLoadingAc(false);
      },
      (e) => {
        setLoadingAc(false);
      },
      {
        name: paramsNameFilter,
        page: 1,
      }
    );
    // eslint-disable-next-line
  }, [paramsNameFilter]);

  const handleChangeOption = (event, newValue) => {
    setValue(newValue || "");
    handleChange(newValue.id || "");
  };
  const onScrollBottom = ({ target }) => {
    if (
      target.scrollHeight - target.scrollTop < target.clientHeight + 50 &&
      infoPage.current_page < infoPage.last_page
    ) {
      setLoadingAc(true);
      handleScrollBottom(
        () => {
          setLoadingAc(false);
        },
        (e) => {
          setLoadingAc(false);
        },
        {
          name: paramsNameFilter,
          page: infoPage.current_page + 1,
        }
      );
    }
  };

  return (
    <Autocomplete
      className={className}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option?.name
      }
      filterOptions={(x) => x}
      options={data}
      autoComplete
      value={value}
      onChange={handleChangeOption}
      inputValue={paramsNameFilter}
      onInputChange={handleChangeParamsFilterName}
      renderInput={(params) => (
        <TextFieldStyled
          {...params}
          label="Author"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loadingAc ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderOption={(option) => {
        return (
          <Grid container alignItems="center" className={classes.contentOption}>
            <Grid item> </Grid>
            <Grid item xs>
              <Typography variant="body2" color="textSecondary">
                {option.name}
              </Typography>
            </Grid>
          </Grid>
        );
      }}
      loading={loadingAc}
      ListboxProps={{
        style: { maxHeight: 200, overflow: "auto" },
        onScroll: onScrollBottom,
      }}
    />
  );
}


InputAutocomplete.propTypes = {
  handleChange: PropTypes.func,
  paramsNameFilter: PropTypes.string,
  handleChangeParamsFilterName: PropTypes.func,
  TextFieldStyled: PropTypes.object,
  className: PropTypes.string,
  handleScrollBottom: PropTypes.func,
  handleFillter: PropTypes.func,
  infoPage: PropTypes.object,
  data: PropTypes.array,
}