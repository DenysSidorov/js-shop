import React from "react";
import styles from './index.less'
import {Link} from "react-router-dom";
class TagsMainSection extends React.Component {
    render() {
        return (
            <div className="itemsSection left fullWidth ">
                <div className="container">
                    <div className="themeItemsblock">
                        <Link to={{
                            pathname: '/shop',
                            search: '?sort=main',
                            hash: '',
                            state: {fromDashboard: true}
                        }} className="themeItemsblock__oneItem">
                            <span className="themeItemsblock__oneItem_name">Все</span>
                        </Link>


                        {this.props.uniqCategory.map((el, index) =>
                            <Link key={index} to={{
                                pathname: '/shop',
                                search: `?sort=${el.name}`,
                                hash: '',
                                state: {fromDashboard: true}
                            }} className="themeItemsblock__oneItem">
                                <span className="themeItemsblock__oneItem_name">{el.name}{' '}</span>
                                <span className="themeItemsblock__oneItem_count">{el.count}</span>
                            </Link>
                        )}

                    </div>
                </div>
            </div>
        )
    }
}
export default TagsMainSection;
