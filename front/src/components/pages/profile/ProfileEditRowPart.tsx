import React, {Fragment, useState} from 'react';
import {Token} from '../../../interfaces';
import {editUserAPI} from '../../../api/endpoints';
import Preloader from '../../parts/preloader';

interface IProfileEditRowPart {
  dataType: string;
  value: string | number;
  changeParent: Function;
}

const ProfileEditRowPart = ({value, dataType, changeParent}: IProfileEditRowPart) => {
  const [isEdit, changeIsEdit] = useState<boolean>();
  const [defValue, changeDefValue] = useState<string | number>(value);
  const [isFetching, changeIsFetching] = useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeDefValue(e.target.value)
  };

  const editValueWithAPI = async () => {
    try {
      changeIsFetching(true);
      const token: Token = localStorage.getItem('info');
      const response = await editUserAPI(token, {[dataType]: defValue as string});
      changeIsFetching(false);
      if (response.status && response.data){
        changeParent(response.data);
        changeIsEdit(false);
      }
    } catch (error) {
      changeIsFetching(false);
      console.error(error);
    }
  };

  return (
    <Fragment>
      {!isEdit && <span
        className='profileContainer_editBtn_btn'
        onClick={() => {
          changeIsEdit(true);
        }}
      >Редактировать</span>}
      {isEdit && <Fragment>
        {isFetching && <div className="profileContainer_row_preloader">
          <Preloader height="24px" borderWidth="2px"/>
        </div>}
        <input
          value={defValue}
          onChange={handleInput}
          type='text'
          className='shopInput profileContainer_input'
        />
        <span className='profileContainer_editBtn_btn'
              onClick={() => {
                changeIsEdit(false);
              }}>Отмена</span>
        <span
          className='profileContainer_editBtn_btn'
          onClick={editValueWithAPI}
        >Сохранить</span>
      </Fragment>}
    </Fragment>
  );
};

export default ProfileEditRowPart;
