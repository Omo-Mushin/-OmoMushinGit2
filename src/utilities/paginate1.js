// import { Pagination } from '@mui/material';
import _ from 'lodash';
// import { PropTypes } from 'prop-types'
export function paginate(items, pageNumber, pageSize) {
    // console.log(pageNumber, pageSize)
    const startIndex = (pageNumber-1) * pageSize
    // let sliced = _.slice(items,startIndex)
    // // console.log(startIndex,sliced)
    // const slicednTake = _.take(sliced,pageSize)
    // console.log(slicednTake)
    //  return slicednTake.value()
    // console.log(_(items).slice(startIndex).take(pageSize).value(),startIndex)
    return _(items).slice(startIndex).take(pageSize).value()
}

