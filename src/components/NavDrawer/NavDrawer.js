import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import CarIcon from '@material-ui/icons/LocalCarWash';
import DollarIcon from '@material-ui/icons/LocalAtm';
import EnvelopeIcon from '@material-ui/icons/MailOutline';
import ParagraphIcon from '@material-ui/icons/Subject';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Services', 'Pricing', 'Contact', 'Account'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>{
                    index === 0 ? <CarIcon /> 
                    : index === 1 ? <DollarIcon/>
                    : index === 2 ? <EnvelopeIcon/>
                    : index === 3 ? <ParagraphIcon/>
                    : <InboxIcon />
            
                }</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Login'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><PersonIcon/></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('right', true)}><MenuIcon/></Button>
        <SwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
          onOpen={this.toggleDrawer('right', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);