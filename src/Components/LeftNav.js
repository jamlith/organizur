import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import ChevronRight from 'material-ui-icons/ChevronRight';
import { List, ListItem } from 'material-ui/List';
import './css/LeftNav.css';


class LeftNavComponent extends Component {
    render() {
        return (
            <div className='LeftNavComponent'>
                <List>
                    <Subheader style={{ color: '#FFF' }}>Projects</Subheader>
                    <Divider />
                    <ListItem
                        leftAvatar={<ChevronRight style={{ color: '#FFF', width: '50px', height: '50px' }} />}
                        primaryText="Project"
                        style={{ color: '#FFF' }}
                        secondaryText={
                            <p style={{ color: '#BDBDBD' }}>"A little bit about the project in question..."</p>
                        }
                        secondaryTextLines={2} >
                    </ListItem>
                    <ListItem
                        leftAvatar={<ChevronRight style={{ color: '#FFF', width: '50px', height: '50px' }} />}
                        primaryText="Project"
                        style={{ color: '#FFF' }}
                        secondaryText={
                            <p style={{ color: '#BDBDBD' }}>"A little bit about the project in question..."</p>
                        }
                        secondaryTextLines={2} >
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default LeftNavComponent;