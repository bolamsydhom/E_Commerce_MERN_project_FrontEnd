import React, { Component } from 'react';
import _ from '../node_modules/lodash'


const Pagination = (props) => {
    const { count, currentPage, pageSize, handlePageChange } = props;
    // console.log(count)
    const noOfPages = count / pageSize;
    // console.log(noOfPages)
    const pages = _.range(1, noOfPages + 1);
    // console.log(pages)
    return (
        <div className="paging">
            {/* <!-- left arrow --> */}
            <div className="paging__arrow">
                <i className="fas fa-angle-left"></i>
            </div>
            {/* <!-- page number --> */}
            {pages.map(item => (
                <div key={item.id}
                    className={item === currentPage ? "paging__number active" : "paging__number"}
                    onClick={() => handlePageChange(item)}>{item}</div>
            ))}
            {/* <div className="paging__number active">1</div>
            <div className="paging__number">2</div>
            <div className="paging__number">3</div> */}
            {/* <!-- right arrow --> */}
            <div className="paging__arrow">
                <i className="fas fa-angle-right"></i>
            </div>
        </div>
    );
}

export default Pagination;