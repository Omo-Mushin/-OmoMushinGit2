import React from 'react';
import SideBar from '../Components/sidebar';

const Feed = ({ items, status, selectedItem, handleSwitchList }) => {
  return (
    <div className='editPage'>
      <SideBar
        items={items}
        status={status}
        switchList={handleSwitchList}
        selectedItem={selectedItem}
      />
      <section className='feed-items'>
        {items.map(item => (
          <article key={item._id}>
            <h2 className="number">{item.name}</h2>
            <p className='text'>{item.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Feed;












// import React, { Component } from 'react';
// import SideBar from '../Components/sidebar';


// class Feed extends Component {
//     state = {
//       onList : this.props.items, 
//       status : this.props.status,
//       selectedItem: this.props.selectedItem,

//     }
//     render() { 
//         return (
//             <div className='editPage'>
//               <SideBar items={this.state.onList} 
//                         status={this.state.status}
//                         switchList={this.props.handleSwitchList} 
//                         selectedItem={this.state.selectedItem} />
//               <section className='feed-items'>
      
//       {this.props.items.map(item => ( <article>
//         <h2 class="number" key={item._id}>{item.name}</h2>
//         <p className='text'>{item.text}</p>
//       </article>
        
//       ))}
//     </section>
//             </div>
//         );
//     }
// }
 
// export default Feed;