import React from "react";
import { FormControl, FormHelperText } from "@material-ui/core";
import { useStyles, StyledSelect, StyledTextField } from "./style";
import { ROLE } from "./../../../../constant";

export default function MyProfile(props) {
  const classes = useStyles();
  const { dataDepartment, formik } = props;
  return (
    <div className={classes.form}>
      <div>
        <span> Name </span>
        <div>
          <StyledTextField
            disabled
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            variant="outlined"
            color="primary"
            size="small"
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </div>
      </div>
      <div>
        <span> Email </span>
        <div>
          <StyledTextField
            disabled
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            variant="outlined"
            color="primary"
            size="small"
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
      </div>
      <div>
        <span> Department </span>
        <FormControl
          error={formik.touched.department && Boolean(formik.errors.department)}
        >
          <StyledSelect
            disabled
            native
            variant="outlined"
            name="department"
            value={formik.values.department}
            onChange={formik.handleChange}
            inputProps={{
              name: "department",
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
          <FormHelperText>
            {formik.touched.department && formik.errors.department}
          </FormHelperText>
        </FormControl>
      </div>

      <div>
        <span> Role </span>
        <FormControl error={formik.touched.role && Boolean(formik.errors.role)}>
          <StyledSelect
            disabled
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            native
            variant="outlined"
            inputProps={{
              name: "role",
            }}
          >
            <option value={ROLE.ADMIN}> admin </option>
            <option value={ROLE.PM}> PM </option>
            <option value={ROLE.USER}> user </option>
          </StyledSelect>
          <FormHelperText>
            {formik.touched.role && formik.errors.role}
          </FormHelperText>
        </FormControl>
      </div>

      <div>
        <span> Status </span>
        <StyledSelect
          disabled
          name="status"
          value={formik.values.status}
          onChange={formik.handleChange}
          native
          variant="outlined"
          inputProps={{
            name: "status",
          }}
        >
          <option value="active"> active </option>
          <option value="inactive"> inactive </option>
        </StyledSelect>
      </div>
    </div>
  );
}
