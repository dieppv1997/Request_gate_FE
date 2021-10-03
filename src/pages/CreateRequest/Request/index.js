import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import LayoutMain from "./../../../layouts/LayoutMain";

import styles from "./style";
import { LIST_PRIORITY } from "../../../constant";
function Request(props) {
  const classes = styles();
  const { formik, category, assignee, listCategory, listAssign } = props;
  const { errors, touched, values, handleChange, handleSubmit, setFieldValue } =
    formik;
  return (
    <LayoutMain>
      <Box className={classes.box}>
        <Box my={2}>
          <Grid container justify="space-between" alignItems="center">
            <Typography className={classes.heading} component="p">
              Create Request
            </Typography>
            <Button
              variant="contained"
              onClick={handleSubmit}
              color="primary"
              className={classes.button}
            >
              <AddIcon />
              Create
            </Button>
          </Grid>
        </Box>
        <Box className={classes.boxRelative}>
          <TextField
            variant="outlined"
            placeholder="Title"
            name="title"
            fullWidth
            error={Boolean(errors.title && touched.title)}
            value={values.title}
            className={classes.title}
            onChange={handleChange}
          />
          {errors.title && touched.title ? (
            <Typography component="p" className={classes.errorContent}>
              {errors.title}
            </Typography>
          ) : null}
        </Box>
        <Box className={classes.detail}>
          <Box className={classes.boxRelative}>
            <TextField
              multiline
              variant="outlined"
              fullWidth
              error={Boolean(errors.content && touched.content)}
              name="content"
              value={values.content}
              onChange={handleChange}
              placeholder="Add a description"
              rows={6}
            />
            {errors.content && touched.content ? (
              <Typography component="p" className={classes.errorContent}>
                {errors.content}
              </Typography>
            ) : null}
          </Box>
          <Box mt={4}>
            <Grid container spacing={2}>
              <Grid
                container
                item
                xs={12}
                className={classes.rowForm}
                justify="space-around"
              >
                <Grid
                  container
                  item
                  md={6}
                  alignItems="center"
                  justify="space-around"
                  className={classes.itemWrap}
                >
                  <Typography component="p" className={classes.item}>
                    Category :
                  </Typography>
                  <Box className={classes.boxRelative}>
                    <Autocomplete
                      className={classes.textField}
                      getOptionDisabled={(option) =>
                        option.status === "disable"
                      }
                      onChange={(e, value) => {
                        setFieldValue("category_id", (value && value.id) || "");
                      }}
                      value={category}
                      options={listCategory}
                      getOptionLabel={(option) => option.name}
                      renderInput={(params) => (
                        <TextField
                          placeholder="Category"
                          {...params}
                          error={Boolean(
                            errors.category_id && touched.category_id
                          )}
                          variant="outlined"
                        />
                      )}
                    />
                    {errors.category_id && touched.category_id ? (
                      <Typography
                        component="p"
                        className={classes.errorContent}
                      >
                        {errors.category_id}
                      </Typography>
                    ) : null}
                  </Box>
                </Grid>
                <Grid
                  container
                  item
                  md={6}
                  alignItems="center"
                  justify="space-around"
                  className={classes.itemWrap}
                >
                  <Typography component="p" className={classes.item}>
                    Assign :
                  </Typography>
                  <Box className={classes.boxRelative}>
                    <Autocomplete
                      className={classes.textField}
                      onChange={(e, value) => {
                        setFieldValue("admin_id", (value && value.id) || "");
                      }}
                      value={assignee}
                      options={listAssign}
                      getOptionLabel={(option) => option.name}
                      renderInput={(params) => (
                        <TextField
                          placeholder="Assign"
                          error={Boolean(errors.admin_id && touched.admin_id)}
                          {...params}
                          variant="outlined"
                        />
                      )}
                    />
                    {errors.admin_id && touched.admin_id ? (
                      <Typography
                        component="p"
                        className={classes.errorContent}
                      >
                        {errors.admin_id}
                      </Typography>
                    ) : null}
                  </Box>
                </Grid>
              </Grid>

              <Grid container item xs={12} className={classes.rowForm}>
                <Grid
                  container
                  item
                  md={6}
                  alignItems="center"
                  className={classes.itemWrap}
                  justify="space-around"
                >
                  <Typography component="p" className={classes.item}>
                    Priority :
                  </Typography>
                  <Box variant="outlined" className={classes.boxRelative}>
                    <Autocomplete
                      name="priority"
                      onChange={(_e, value) =>
                        setFieldValue("priority", (value && value) || "")
                      }
                      className={classes.textField}
                      value={values.priority}
                      options={LIST_PRIORITY}
                      getOptionLabel={(option) => option}
                      renderInput={(params) => (
                        <TextField
                          placeholder="Priority"
                          error={Boolean(errors.priority && touched.priority)}
                          {...params}
                          variant="outlined"
                        />
                      )}
                    />
                    {errors.priority && touched.priority ? (
                      <Typography
                        component="p"
                        className={classes.errorContent}
                      >
                        {errors.priority}
                      </Typography>
                    ) : null}
                  </Box>
                </Grid>
                <Grid
                  container
                  item
                  md={6}
                  alignItems="center"
                  justify="space-around"
                  className={classes.itemWrap}
                >
                  <Typography component="p" className={classes.item}>
                    Due date :
                  </Typography>
                  <Box className={classes.boxRelative}>
                    <TextField
                      onChange={handleChange}
                      id="date"
                      value={values.due_date}
                      variant="outlined"
                      type="date"
                      name="due_date"
                      error={Boolean(errors.due_date && touched.due_date)}
                      className={classes.textField}
                    />
                    {errors.due_date && touched.due_date ? (
                      <Typography
                        component="p"
                        className={classes.errorContent}
                      >
                        {errors.due_date}
                      </Typography>
                    ) : null}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </LayoutMain>
  );
}

export default Request;
