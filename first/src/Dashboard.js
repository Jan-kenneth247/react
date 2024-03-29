import React from 'react';
import Header from './Header';
import Option from './Option';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Skeleton from './Skeleton';


<<<<<<< HEAD
const drawerWidth = 200;


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawer1: {
    width: 350,
    flexShrink: 0,
  },
  drawerPaper1: {
    width: 350,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Stargaze
          </Typography>
        </Toolbar>
      </AppBar>
      <Header position="fixed" className={classes.appBar}/>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <Option/>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Skeleton/>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
      <Drawer
        className={classes.drawer1}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper1,
        }}
        anchor="right"
      >

      </Drawer>
    </div>
  );
=======
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: [],
      num: 0
    };
    this.addPic = this.addPic.bind(this);
  }
  addPic = e => {
    this.setState({ pic: URL.createObjectURL(e.target.files[this.state.num]) });
  };
  render() {
    const { pic } = this.state;
    return (
      <div>
        <h1>Welcome to Stargaze {this.state.username}</h1>
          <div id="profiles">
          <h2>Profile</h2>
          <h2>Timeline</h2>
          <h2>Gallery</h2>
          <h2>Setting</h2>
        </div>
        <div id="starfeed">
          <form action="/action_page.php">
            <input
              type="file"
              accept="file_extension|video/*|image/*"
              onChange={this.addPic}
            ></input>
            <br />
            <img src={pic}></img>
          </form>
        </div>
        <div id="notification">
          <h1>Notification</h1>
        </div>
      </div>
    );
  }
>>>>>>> edcd96d3ce74355723f9ca049af44ddd1218816a
}
