import React, { Component } from 'react'
import _ from 'lodash';
import { PropTypes } from 'prop-types';

class Pagination extends Component {
     
    render() { 
        const {itemCount, pageSize,changePage, currentPage } = this.props
        // console.log('currentPage', currentPage)
        const pagesCount = Math.ceil(itemCount / pageSize )
       
        if (pagesCount === 1) return null
        const pages = _.range(1, pagesCount + 1)
        return (
            <nav >
                
                <ul className="pagination">
                <button className='btn btn-primary green'>Prev</button>
                {pages.map(page => (<li key={page} className={page === currentPage ? 'page-item active' : 'page-active'}>
                    <a className="page-link" onClick={() => changePage(page) } >{page}</a></li>) )} 
                <button className='btn btn-success green'>Next</button>    
                </ul>
                
            </nav>
        );
    }
}
Pagination.propTypes = {
    itemCount:PropTypes.number.isRequired, pageSize:PropTypes.number.isRequired,
    changePage:PropTypes.func.isRequired, currentPage:PropTypes.number.isRequired
}

export default Pagination;
 
