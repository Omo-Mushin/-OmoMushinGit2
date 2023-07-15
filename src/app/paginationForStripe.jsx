import React, { Component } from 'react';
import _ from 'lodash';
class StripePagination extends Component {
    state = {  } 
    render() { 
        const {itemCount, pageSize,onSwitch, currentPage } = this.props
        // console.log('currentPage', currentPage)
        const pagesCount = Math.ceil(itemCount / pageSize )
       
        if (pagesCount === 1) return null
        const pages = _.range(1, pagesCount + 1)

        return (
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        
                        {pages.map(page=> <li key={page} className={ page === currentPage ? 
                        "page-item active" : 'page-item'}
                            onClick={() => onSwitch(page)}>
                            <a className="page-link" > {page} </a></li>)}
                        {/* <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li> */}
                        
                    </ul>
                </nav>
            </div>
        );
    }
}
 
export default StripePagination;