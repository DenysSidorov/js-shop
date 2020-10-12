import React, {FC} from 'react';
import './index.scss';

const Verify: FC = () => {
  return (
    <div className='exchangeContainer'>
      <div className='exchangeContainer__title'>Проверка товара</div>
      <div>
        <p className='exchangeContainer__desc'>
          Перед получением товара на наши склады от наших поставщиков - мы всегда проверяем товары на царапины,
          соответствие цвету и все заранее уговоренные параметры. Каждая еденица товара проходит осмотр!
        </p>

        <p className='exchangeContainer__titleSub'>Главные характеристики осмотра</p>

        <p className='exchangeContainer__item'>1. Параметры на упаковке и в документах</p>
        <p className='exchangeContainer__item'>2. Вес, цвет, модель, размер</p>
        <p className='exchangeContainer__item'>3. Качество изделия, хрупкость</p>
      </div>
    </div>
  );
};

export default Verify;
