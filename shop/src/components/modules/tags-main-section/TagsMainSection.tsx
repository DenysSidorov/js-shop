import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import './index.less';

interface ITag {
  name: string;
  count: number;
}

interface ITagsMainSection {
  uniqCategory: Array<ITag>;
}

const TagsMainSection: FC<ITagsMainSection> = ({uniqCategory}: ITagsMainSection) => {
  return (
    <div className='itemsSection left fullWidth '>
      <div className='container'>
        <div className='themeItemsblock'>
          <Link
            to={{
              pathname: '/shop',
              search: '?sort=main',
              hash: '',
              state: {fromDashboard: true},
            }}
            className='themeItemsblock__oneItem'
          >
            <span className='themeItemsblock__oneItem_name'>Все</span>
          </Link>

          {uniqCategory.map((el: any) => (
            <Link
              key={el.name}
              to={{
                pathname: '/shop',
                search: `?sort=${el.name}`,
                hash: '',
                state: {fromDashboard: true},
              }}
              className='themeItemsblock__oneItem'
            >
              <span className='themeItemsblock__oneItem_name'>
                {el.name.slice(0, 1).toUpperCase()}
                {el.name.slice(1, el.name.length)}{' '}
              </span>
              <span className='themeItemsblock__oneItem_count'>{el.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagsMainSection;
