import { Button, TextField } from "@material-ui/core";
import { useStyles } from "./style";

function SearchPopup(props) {
  const classes = useStyles();
  const {
    handleOpenPopup,
    textFilter,
    handleChangeForm,
    submitFormFilter,
    placeHolder,
  } = props;

  return (
    <div className={classes.container}>
      <TextField
        placeholder={placeHolder}
        name="textFilter"
        value={textFilter}
        onChange={handleChangeForm}
        variant="outlined"
        color="primary"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            submitFormFilter();
          }
        }}
      />
      <Button variant="contained" color="primary" onClick={submitFormFilter}>
        Tìm kiếm
      </Button>
      <Button variant="contained" onClick={handleOpenPopup}>
        Add
      </Button>
    </div>
  );
}

export default SearchPopup;
