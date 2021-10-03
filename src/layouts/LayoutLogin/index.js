import { useStyles } from "./style";
import logo from "./../../assets/img/logoHblab.png";

function LayoutLogin(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <img src={logo} alt="" />
      </div>

      <div className={classes.body}>
        <h1> Welcome to HBLab request gate </h1>
        <div className={classes.content}>
          <div className={classes.info}>
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <p>Only @hblab are accepted</p>
              <p>Our Facebook: https://www.facebook.com/hblab.vn/</p>
              <p>Contact us: info@hblab.vn</p>
            </div>
          </div>
          <div className={classes.form}>{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default LayoutLogin;
