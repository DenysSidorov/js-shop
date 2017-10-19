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
                            <Link key={el.name} to={{
                                pathname: '/',
                                search: `?sort=${el.name}`,
                                hash: '',
                                state: { fromDashboard: true }
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

console.log(3213);
console.log(3213);
console.log(32112313);
console.log(321231233);
console.log(3132213);
console.log(3213);