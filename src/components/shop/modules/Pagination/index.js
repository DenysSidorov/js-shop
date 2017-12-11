import React, { PropTypes } from 'react';
import styles from './index.scss'
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate';


class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    this.onPageChange = this.onPageChange.bind(this)
    this.hrefBuilder = this.hrefBuilder.bind(this)
    }

    onPageChange(args){
        console.log(args, 'args');
    }
    hrefBuilder(args){
        // console.log(args, 'args - hrefBuilder');
    }


    render() {
        return (
            <ReactPaginate
                initialPage={2}
                pageCount={30}
                pageRangeDisplayed={8}
                marginPagesDisplayed={1}
                hrefBuilder={this.hrefBuilder}
                onPageChange={this.onPageChange}
                previousLabel={"previous"}
                containerClassName="paginationContainerUL"
                disabledClassName="disableLI"
                activeClassName="activeLI"
            />
        );
    }
}


export default Pagination;