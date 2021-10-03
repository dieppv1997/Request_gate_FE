import { makeStyles } from "@material-ui/core/styles";
const DRAWER_WIDTH = 220;

export const useStyles = makeStyles(
  (theme) => ({
    "@global": {
      "*::-webkit-scrollbar": {
        width: 8,
        marginRight: 10,
      },
      "*::-webkit-scrollbar-track": {
        backgroundColor: "#ddd",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "#666",
      },
    },
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },

    menuButton: {
      marginRight: 5,
      color: theme.palette.white.main,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: DRAWER_WIDTH,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      color: theme.palette.white.main,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(8),
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    main: {
      width: "100%",
      visibility: "visible",
      opacity: 1,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      background: "#f3f3f3",
      overflowY: "auto",
      height: "calc(100vh - 64px)",
      "@media (max-width:900px)": {
        padding: 10,
      },
    },
    infor: {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      color: "white",
    },
    colorWhite: {
      color: "white",
    },
    logoBtn: {
      height: "40px",
      background: "white",
      borderRadius: 3,
      padding: 2,
    },
    navList: {
      padding: 0,
    },
    navLink: {
      textDecoration: "none",
      padding: "0",
      color: theme.palette.text.primary,
      "&:hover": {
        display: "block",
        background: "#dcdcdc",
      },
    },
    active: {
      display: "block",
      "& *": {
        color: theme.palette.white.main,
        background: theme.palette.primary.main,
      },
    },
    linkHistoryRequest: {
      display: "none",
    },
    "@media (max-width:1820px) and (min-width: 1370px) ": {
      inPageHome: {
        color: "green",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(8),
        },
        "& > div": {
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          overflowX: "hidden",
          width: theme.spacing(7),
          [theme.breakpoints.up("sm")]: {
            width: theme.spacing(8),
          },
        },
      },
      menuButton: {
        visibility: "hidden",
        opacity: 0,
      },
    },
    "@media (max-width:1370px) ": {
      linkHistoryRequest: {
        display: "block",
      },
    },
  }),
  { index: 1 }
);
