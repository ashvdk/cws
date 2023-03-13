import { makeStyles, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Inbox, Mail } from '@material-ui/icons';
import Bugcard from './Bugcard';

const drawerWidth = 340;

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

function Bugsidebar() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="right"
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem>
            <Bugcard />
        </ListItem>
        <ListItem>
            <Bugcard />
        </ListItem>
        <ListItem>
            <Bugcard />
        </ListItem>
      </List>
    </Drawer>
  );
}
export default Bugsidebar;