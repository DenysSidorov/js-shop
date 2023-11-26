import React, {Fragment, useState} from 'react';
import Preloader from '../../parts/preloader';
import {useMutation} from '@apollo/react-hooks';
import {EDIT_USER_BY_TOKEN} from '../../../apollo/queries/user';
import {Token} from '../../../interfaces';

interface IProfileEditRowPart {
  dataType: string;
  value: string | number;
  changeParent: Function;
  token: Token;
}

const ProfileEditRowPart = ({value, dataType, changeParent, token}: IProfileEditRowPart) => {
  const [isEdit, changeIsEdit] = useState<boolean>();
  const [defValue, changeDefValue] = useState<string | number>(value);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeDefValue(e.target.value);
  };

  const [editUser, {loading}] = useMutation(EDIT_USER_BY_TOKEN, {
    onCompleted: (d) => {
      changeParent(d.editUserByIdFromREST);
      changeIsEdit(false);
    },
  });

  const editValueWithAPI = () => {
    editUser({
      variables: {
        token,
        data: {
          [dataType]: defValue,
        },
      },
    });
  };

  return (
    <Fragment>
      {!isEdit && (
        <span
          className='profileContainer_editBtn_btn'
          onClick={() => {
            changeIsEdit(true);
          }}
        >
          Редактировать
        </span>
      )}
      {isEdit && (
        <Fragment>
        {loading && <div className="profileContainer_row_preloader">
              <Preloader height='24px' borderWidth='2px' />
        </div>}
          )}
          <input value={defValue} onChange={handleInput} type='text' className='shopInput profileContainer_input' />
          <span
            className='profileContainer_editBtn_btn'
          onClick={() => {
              changeIsEdit(false);
          }}>Отмена</span>
          </span>
          <span className='profileContainer_editBtn_btn' onClick={editValueWithAPI}>
            Сохранить
          </span>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProfileEditRowPart;
