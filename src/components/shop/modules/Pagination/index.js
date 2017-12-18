import React, { PropTypes } from 'react';
import styles from './index.scss'
    import ReactPaginate from 'react-paginate';


class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    this.onPageChange = this.onPageChange.bind(this)
    }

    onPageChange(args){
        this.props.onPageChange({...args})
        console.log(args, 'args');
        // TODO execute parent callback
    }


    render() {
        let pageCount = this.props.pageCount === 50 ? 1 : ((this.props.pageCount-(this.props.pageCount%this.props.inOnePage))/this.props.inOnePage)+1
console.log(pageCount, 'pageCount');
        if (pageCount === 1 ) return null
        return (
            <ReactPaginate
                disableInitialCallback={true}
                initialPage={Number(this.props.paginationPageActive)}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                onPageChange={this.onPageChange}
                containerClassName="paginationContainerUL"
                disabledClassName="disableLI"
                activeClassName="activeLI"
                previousLabel={"<<"}
                nextLabel={">>"}
            />
        );
    }
}


export default Pagination;
