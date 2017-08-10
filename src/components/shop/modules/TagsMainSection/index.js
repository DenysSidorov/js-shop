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
                                 pathname: '/',
                                 search: '?sort=main',
                                 hash: '',
                                 state: { fromDashboard: true }
                             }} className="themeItemsblock__oneItem">
                                 <span>Все</span>
                             </Link>


                        {this.props.uniqCategory.map(el =>
                            <Link key={el} to={{
                                pathname: '/',
                                search: `?sort=${el}`,
                                hash: '',
                                state: { fromDashboard: true }
                            }} className="themeItemsblock__oneItem">
                                <span>{el}</span>
                            </Link>
                        )}

                    </div>
                </div>
            </div>
        )
    }
}

export default TagsMainSection;

