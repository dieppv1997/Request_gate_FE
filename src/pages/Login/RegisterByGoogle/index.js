import { Button } from "@material-ui/core";
import { useStyles, StyledSelect } from "./style";

function RegisterByGoogle({
  dataDepartment,
  departmentId,
  handleChangeForm,
  submitRegisterByGoogle,
}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h4> Hiện tại bạn thuộc phòng ban nào ? </h4>
      <StyledSelect
        native
        variant="outlined"
        name="departmentId"
        value={departmentId}
        onChange={handleChangeForm}
        inputProps={{
          name: "departmentId",
        }}
      >
        {dataDepartment?.allData?.map((e) => {
          return (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          );
        })}
      </StyledSelect>
      <Button
        onClick={submitRegisterByGoogle}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </div>
  );
}

export default RegisterByGoogle;
