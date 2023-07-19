import React, { Component } from 'react'
import { Avatar } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';




class Sidebar extends Component {
   
    render() { 
        const listItems = this.props.items;
        // const { collapseSidebar } = useProSidebar();
        
        return (

          <div className='side-bar'>
                <div className='side-bar-top'>
                   <div className= 'list-header'>
                   <Avatar  
                   className='avatar'
                   src='https://th.bing.com/th/id/R.226a4310e3391b5bda7cf9dcdcc1e9fc?rik=fsyXNseACKRhqQ&pid=ImgRaw&r=0'/>
                    <div className='details'>
                        <h3>Elon Musk</h3>
                        <h6>{this.props.status}</h6>
                    </div>
                    </div> 
                    
                </div>
                <div className='Lists'>
                        <ul className="list-group">
                        {this.props.items.map(listItem => 
                            (<NavLink to={`/${listItem.to}`} className={ listItem === this.props.selectedItem ? "list-group-item active" : 'list-group-item'}
                            key={listItem._id} onClick={() => this.props.switchList(listItem)}
                            style={{cursor: 'pointer'}} >
                                {listItem.name}
                        </NavLink>))}
                        </ul> 
                 </div>
                 
            </div>
            )
                
    }
}
 
export default Sidebar;