import { makeStyles, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Inbox, Mail } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

function Sidebar() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem button>
          <Link to="/">
            <ListItemIcon><Inbox /></ListItemIcon>
            <ListItemText primary="Doubt Tracker" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/item-production">
            <ListItemIcon><Mail /></ListItemIcon>
            <ListItemText primary="Production Form" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/item-Submission-form">
            <ListItemIcon><Mail /></ListItemIcon>
            <ListItemText primary="Submission Form" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/pod-details">
            <ListItemIcon><Mail /></ListItemIcon>
            <ListItemText primary="Pod Details" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/pkt">
            <ListItemIcon><Mail /></ListItemIcon>
            <ListItemText primary="P.K.T" />
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
export default Sidebar;