import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import clsx from "clsx";
import { useSnackbar } from "notistack";
import { useStyles } from "./style";
import LayoutMain from "./../../layouts/LayoutMain";
import Filter from "./components/Filter";
import ListRequest from "./components/ListRequest";
import HistoryRequest from "./components/HistoryRequest";
import { getListHistoryRequest, getRequest } from "../../store/action/request";
import { openLoading, closeLoading } from "./../../store/action/loading";
import * as actionUser from "./../../store/action/user";
import { TYPE_GET_DATA_USER, ALL_LINK } from "./../../constant/index";
import { dataToParam } from "./../../helpers";
import { getMyProfile } from "./../../store/action/user";

const VALUE_FILTER_DEFAULT = {
  name: "",
  content: "",
  dateCreate: "",
  statusAdmin: "notClose",
  author: "",
  assign: "",
  category: "",
  department: "",
};

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [page, setPage] = useState(1);
  const data = useSelector((state) => state.dataRequest.allData);
  const dataUser = useSelector((state) => state.dataUser);
  const [pageHistoryRequest, setPageHistoryRequest] = useState(1);
  const dataListHistoryRequest = useSelector(
    (state) => state.dataRequest.historyRequest
  );
  const [valueForm, setValueForm] = useState(VALUE_FILTER_DEFAULT);
  const [inputValueAutocomplete, setInputValueAutocomplete] = useState("");
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      dispatch(getMyProfile());
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (valueForm === VALUE_FILTER_DEFAULT) submit();
    // eslint-disable-next-line
  }, [valueForm]);
  useEffect(() => {
    dispatch(
      getListHistoryRequest(pageHistoryRequest, null, () => {
        dispatch(closeLoading());
        enqueueSnackbar("Đã có lỗi sảy ra !!!", { variant: "error" });
      })
    );
    // eslint-disable-next-line
  }, [dispatch]);
  const handleChangeInputTextInAutocomplete = (event, newInputValue) => {
    setInputValueAutocomplete(newInputValue);
  };
  const handleChangePages = (event, value) => {
    setPage(value);
    submit(value);
  };
  const handleChangePageHistoryRequest = (event, value) => {
    setPageHistoryRequest(value);
    dispatch(
      getListHistoryRequest(value, null, () => {
        dispatch(closeLoading());
        enqueueSnackbar("Đã có lỗi sảy ra !!!", { variant: "error" });
      })
    );
  };
  const handleChangeForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setValueForm({
      ...valueForm,
      [name]: value,
    });
  };
  const submit = (pagePrams) => {
    const params = dataToParam(valueForm);
    dispatch(openLoading());
    dispatch(
      getRequest(
        {
          ...params,
          page: pagePrams ? pagePrams : 1,
        },
        () => {
          dispatch(closeLoading());
        },
        () => {
          dispatch(closeLoading());
          enqueueSnackbar("Đã có lỗi sảy ra !!!", { variant: "error" });
        }
      )
    );
  };
  const toPageRequestDetail = (id) => {
    history.push(ALL_LINK.DETAIL_REQUEST + `/${id}`, { id });
  };

  const deleteDataFilter = async () => {
    setInputValueAutocomplete("");
    setValueForm(VALUE_FILTER_DEFAULT);
  };

  const handleChangeValueInputAutocomplete = (id) => {
    setValueForm({
      ...valueForm,
      author: id,
    });
  };

  return (
    <LayoutMain>
      <div
        className={clsx(
          classes.container,
          history.location.pathname === ALL_LINK.HOME
            ? classes.inPageHome
            : classes.inPageHistory
        )}
      >
        <div className={classes.listRequest}>
          <h1> ListRequest </h1>
          <Filter
            setValueForm={setValueForm}
            handleChangeForm={handleChangeForm}
            submit={submit}
            valueForm={valueForm}
            deleteDataFilter={deleteDataFilter}
            handleChangeValueInputAutocomplete={
              handleChangeValueInputAutocomplete
            }
            handleChangeInputTextInAutocomplete={
              handleChangeInputTextInAutocomplete
            }
            inputValueAutocomplete={inputValueAutocomplete}
            handleScrollBottom={(callbackSuccess, callbackFail, data) => {
              dispatch(
                actionUser.filterUser(
                  data,
                  () => {
                    callbackSuccess();
                  },
                  (e) => {
                    callbackFail();
                  },
                  TYPE_GET_DATA_USER.GET_MORE
                )
              );
            }}
            handleFillterUser={(callbackSuccess, callbackFail, data) => {
              dispatch(
                actionUser.filterUser(
                  data,
                  () => {
                    callbackSuccess();
                  },
                  (e) => {
                    callbackFail();
                  }
                )
              );
            }}
            dataUser={dataUser}
          />
          <ListRequest
            toPageRequestDetail={toPageRequestDetail}
            page={page}
            handleChangePages={handleChangePages}
            data={data.data}
            countPages={data.last_page ? data.last_page : 0}
          />
        </div>
        <div className={classes.historyRequest}>
          <HistoryRequest
            dataListHistoryRequest={dataListHistoryRequest}
            page={pageHistoryRequest}
            handleChange={handleChangePageHistoryRequest}
          />
        </div>
      </div>
    </LayoutMain>
  );
}
