import React, {FC, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './index.less';
import './hoverBlock.less';

import {setMetaTag, setTitle} from '../../../helpers/libs/utils';
import BuyBtn from './buy-btn';
import Price from './Price';

interface ILanding {
  number1: string;
}

const Landing: FC<ILanding> = ({number1}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTitle('Картины на дереве в стиле лофт, Украина');
    setMetaTag('description', 'Интернет магазин картин на дереве ручной работы');
    setMetaTag(
      'keywords',
      'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины'
    );
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id='modal-root' style={{zIndex: 99999999}} />
      <div className='header fullWidth'>
        <img src='/img-static/land/logo.png' alt='' className='header_logo' />
        <div
          className='header_items'
          id='header_items'
          style={
            {
              // transform: window.innerWidth > 768 || this.state.isOpen ? 'translateX(0px)' : 'translateX(-5000px)'
            }
          }
        >
          <a href='/#howWeMake' className='header_item' onClick={handleMenu}>
            <span>Примеры</span>
          </a>
          <a href='/#prep' className='header_item' onClick={handleMenu}>
            <span>Изготовление</span>
          </a>
          <a href='/#quest' className='header_item' onClick={handleMenu}>
            <span>Вопросы</span>
          </a>
          <a href='/#price' className='header_item' onClick={handleMenu}>
            <span>Цены</span>
          </a>
          <a href='/#yorPhoto' className='header_item' onClick={handleMenu}>
            <span>Ваше фото</span>
          </a>
          <Link to='/shop' className='header_item header_item_shop'>
            <span>Магазин</span>
          </Link>
        </div>
        <div className='header_number'>{number1}</div>
        <div className='header_mobMenu'>
          <img
            src={isOpen ? '/img-static/land/close.png' : '/img-static/land/hum.png'}
            alt=''
            id='header_mobMenu'
            onClick={handleMenu}
          />
        </div>
      </div>
      <div
        className='hiBlock fullWidth backgroundImage'
        // style="background-image:url('/img-static/mainPage.jpg')"
        style={{backgroundImage: "url('/img-static/land/mainPage.jpg')"}}
      >
        <div className='hiBlock_content container'>
          <h1 className='hiBlock_content_h1'>Loft картины на досках</h1>
          <div className='hiBlock_content_advantages'>
            <div className='hiBlock_content_advantages_item rightShow1'>Уникальный подарок</div>
            <div className='hiBlock_content_advantages_item rightShow2'>Дизайнерское решение</div>
            <div className='hiBlock_content_advantages_item rightShow3'>Натуральные материалы</div>
          </div>
          <div className='callUsWrapper'>
            <div className='callUs'>
              <div className='buyNowContBodyTextContent2_cont' id='buyNow4'>
                <BuyBtn text='Заказать' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='whoWeAre'>
        <div className='container'>
          <p className='whoWeAre_title'>
            Ищешь оригинальный подарок и не хочешь быть похожим на остальных? Желаешь украсить интерьер и подчеркнуть
            стиль помещения, тогда ты попал по адресу. Выбери любую фотографию со своего смартфона или интернета и
            отправь ее нам - увидишь будущий результат, остальное мы сделаем сами!
          </p>
        </div>
      </div>
      <a id='howWeMake' />
      <div className='howWeMake fullWidth whoBuy'>
        <div className='container'>
          <h2 className='howWeMake_title'>Причины купить картины на дереве в Украине</h2>
          <div className='howWeMake_description'>
            Наши картины будут смотреться хорошо в любом интрьере или подарят эмоции в качестве подарка
          </div>
          <div className='howWeMake_blocks'>
            <div className='howWeMake_blocks_item'>
              <h3 className='howWeMake_blocks_item_title'>Подарок для близких</h3>
              <img className='howWeMake_blocks_item_img' src='img-static/land/2.jpg' alt='Подарок для близких' />
              <div className='howWeMake_blocks_item_desc'>
                Не знаете что подарить? Хотите выделится и не покупать один из сотни заезженных подарков, пылящихся на
                полках магазинов? Глядя на картины из дерева, близкие будут вспоминать вас и радоваться.
              </div>
            </div>
            <div className='howWeMake_blocks_item'>
              <h3 className='howWeMake_blocks_item_title'>Картины для интерьера</h3>
              <img className='howWeMake_blocks_item_img' src='img-static/land/1_1.jpg' alt='Картины для интерьера' />
              <div className='howWeMake_blocks_item_desc'>
                Деревянные картины из натурального материала всегда будут гармонично и стильно вписываться в любом
                помещении. Подчеркнут ваш вкус и любовь к природе.
              </div>
            </div>
            <div className='howWeMake_blocks_item'>
              <h3 className='howWeMake_blocks_item_title'>Для заведений и офисов</h3>
              <img
                className='howWeMake_blocks_item_img'
                src='img-static/land/3.jpg'
                alt='Картины на дереве для заведений и офисов'
              />
              <div className='howWeMake_blocks_item_desc'>
                Хотите удивить своих клиентов и сотрудников яркими и со вкусом подобранными изображениями, тогда мы вам
                поможем.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='examplesImages fullWidth'>
        {/* <div style="height:400px;"> */}
        {/* <img src="/img-static/land/81.jpg"/> */}
        {/* </div> */}
        <div className='examplesImages_item'>
          <img src='/img-static/land/pre1.jpg' alt='Картины на дереве в Украине' />
        </div>
        <div className='examplesImages_item'>
          <img src='/img-static/land/pre2.JPG' alt='Картины на дереве в Украине' />
        </div>
        <div className='examplesImages_item'>
          <img src='/img-static/land/pre3.JPG' alt='Картины на дереве в Украине' />
        </div>
        <div className='examplesImages_item'>
          <img src='/img-static/land/pre4.JPG' alt='Картины на дереве в Украине' />
        </div>
        <div className='examplesImages_item'>
          <img src='/img-static/land/pre5.jpg' alt='Картины на дереве в Украине' />
        </div>
        <div className='examplesImages_item'>
          <img src='/img-static/land/pre6.jpg' alt='Картины на досках в Украине' />
        </div>
        <div className='examplesImages_item'>
          <img src='/img-static/land/pre7.jpg' alt='Картины на досках в Украине' />
        </div>
        <div className='examplesImages_item'>
          <img src='/img-static/land/pre8.jpg' alt='Картины на досках в Украине' />
        </div>
        {/* <img src="/img-static/pre9.jpg"/>--> */}
        {/* <img src="/img-static/pre10.JPG"/>--> */}
        {/* <img src="/img-static/pre11.jpg"/>--> */}
        {/* <img src="/img-static/pre12.jpg"/>--> */}
      </div>
      <div className='toShopBlock'>
        {/* <div className="toShopBlock_text"></div> */}
        <Link to='/shop' className='toShopBlock_text'>
          БОЛЬШЕ ПРИМЕРОВ В НАШЕМ МАГАЗИНЕ
        </Link>
      </div>
      <a id='prep' />
      <div
        className='buyNow2 fullWidth backgroundImage'
        // style="background-image:url('/img-static/buy3.jpg')"
        style={{backgroundImage: "url('/img-static/land/buy3.jpg')"}}
      >
        <div className='buyNowContBodyText2'>
          <h2 className='buyNowContBodyTextTitle2'>ПОДАРОК К ПРАЗДНИКУ</h2>
          <div className='buyNowContBodyTextContent2_cont' id='buyNow1'>
            {/* <BuyBtn/> */}
          </div>
        </div>
        {/* <img src="/img-static/buy2.jpg"> */}
      </div>
      <div className='howWeMake fullWidth'>
        <div className='container'>
          <h2 className='howWeMake_title'>Как мы делаем картины на досках в Украине</h2>
          <div className='howWeMake_description'>
            Каждую картину на досках мы делаем в ручную, придавая ей уникальность.
          </div>
          <div className='howWeMake_blocks'>
            <div className='howWeMake_blocks_item'>
              <h3 className='howWeMake_blocks_item_title'>Ручная обработка</h3>
              <img className='howWeMake_blocks_item_img' src='img-static/land/DR1.jpg' />
              <div className='howWeMake_blocks_item_desc'>
                Отобранная сосна проходит ручной процесс распила и брошировки, что придает ей натуральность,
                уникальность и долговечность. Изделия обрабатываются лаком и маслами для защиты.
              </div>
            </div>
            <div className='howWeMake_blocks_item'>
              <h3 className='howWeMake_blocks_item_title'>Нанесение картинки</h3>
              <img className='howWeMake_blocks_item_img' src='img-static/land/DR22.jpg' />
              <div className='howWeMake_blocks_item_desc'>
                Отточенным многолетним опытом проб и ошибок способом мы наносим изображение на дерево, закрепляем его и
                подготавливаем к следующему этапу.
              </div>
            </div>
            <div className='howWeMake_blocks_item'>
              <h3 className='howWeMake_blocks_item_title'>Лак, крепления, упаковка</h3>
              <img className='howWeMake_blocks_item_img' src='img-static/land/DR3.jpg' />
              <div className='howWeMake_blocks_item_desc'>
                После всех работ, мы покрываем картину лаком, прокрашиваем и защищаем обратную сторону, делаем
                изображение состаренным и реалистичным. Затем упаковываем и отправляем вам.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='examplesContBody'>
        <img src='/img-static/land/111.jpg' alt='Укрианские картины на досках' />
        <div className='examplesContBodyText'>
          <h2 className='examplesContBodyTextTitle'>Рельеф дерева</h2>
          <div className='examplesContBodyTextContent'>
            Каждая доска проходит процесс обжига, броширования и пропитки маслами, что помогает древесине быть
            долговечней и естественней. Все эти манипуляции придают дереву уникальный рельеф.
          </div>
        </div>
      </div>
      <div className='examplesContBody'>
        <div className='examplesContBodyText'>
          <h2 className='examplesContBodyTextTitle'>Класная упаковка</h2>
          <div className='examplesContBodyTextContent'>
            Один из главнейших этапов - это упаковка, несколько слоев защиты и верхний презентабельный вид, делают нашу
            упаковку надежной и красивой.
          </div>
        </div>
        <img src='/img-static/land/2222.jpg' alt='Картрны на дереве' />
      </div>
      <div className='examplesContBody'>
        <img src='/img-static/land/333.jpg' />
        <div className='examplesContBodyText'>
          <h2 className='examplesContBodyTextTitle'>Сочность оттенков</h2>
          <div className='examplesContBodyTextContent'>
            {' '}
            Мы используем японские технологи для максимальной точности передачи оттенков и цветов.
          </div>
        </div>
      </div>
      <a id='yorPhoto' />
      <div className='yourPhoto'>
        <div className='container'>
          <h2 className='yourPhoto_title'>Картина из вашей фотографии</h2>
          <div className='yourPhoto_description'>
            Вы можете заказать картины со своим изображением, просто отправьте его нам, мы обработаем его и вы получите
            результат.
          </div>
          <div className='yourPhoto_examples'>
            {/* <div class="yourPhoto_item">--> */}
            {/* <img src="/img-static/ex1.jpg" alt="">--> */}
            {/* </div>--> */}
            <div className='grid yourPhoto_item'>
              <figure className='effect-bubba'>
                <img src='/img-static/land/m1.jpg' alt='Картины на досках Украина' />
                <figcaption>
                  <h2>
                    Ваше <span>Фото</span>
                  </h2>
                  <p>Загрузите изображение</p>
                </figcaption>
              </figure>
            </div>
            <div className='grid yourPhoto_item'>
              <figure className='effect-bubba'>
                <img src='/img-static/land/m2.jpg' alt='Картины на досках Украина' />
                <figcaption>
                  <h2>
                    Изготовление <span>картины</span>
                  </h2>
                  <p>В минимальные сроки</p>
                </figcaption>
              </figure>
            </div>

            <div className='grid yourPhoto_item'>
              <figure className='effect-bubba'>
                <img src='/img-static/land/m3.jpg' alt='Картины на досках Украина' />
                <figcaption>
                  <h2>
                    Супер <span>Результат</span>
                  </h2>
                  <p>Качество мы гарантируем</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div
        className='processGetting fullWidth backgroundImage'
        // style="background-image:url('/img-static/top-image-4.jpg')"
        style={{backgroundImage: "url('/img-static/land/top-image-4.jpg')"}}
      >
        {/* <img src="/img-static/tools3.png" alt=""--> */}
        {/* class="processGetting_block_right_tools">--> */}
        <div className='container'>
          <h2 className='processGetting_title'>Как получить картину</h2>
        </div>
        <div className='container fullWidth'>
          {/* <div class="processGetting_title">--> */}
          {/* Как получить картину--> */}
          {/* </div>--> */}
          <div className='processGetting_cont'>
            <div className='processGetting_block_left'>
              <div className='processGetting_block_left_item'>
                <div className='processGetting_block_left_item_title'>ЗАКАЗ</div>
                <div className='processGetting_block_left_item_text'>
                  <ul>
                    <li>- Звонок менеджера</li>
                    <li>- Уточнение размера</li>
                    <li>- Сроки и цена</li>
                    <li>- Дополнительное инфо</li>
                  </ul>
                </div>
              </div>
              <div className='processGetting_block_left_item'>
                <div className='processGetting_block_left_item_title'>ИЗГОТОВЛЕНИЕ</div>
                <div className='processGetting_block_left_item_text'>
                  <ul>
                    <li>- Подготовка материалов</li>
                    <li>- Брошировка, обжиг</li>
                    <li>- УФ печать, состаривание</li>
                    <li>- Покраска, лакирование</li>
                  </ul>
                </div>
              </div>
              <div className='processGetting_block_left_item'>
                <div className='processGetting_block_left_item_title'>ОТПРАВКА</div>
                <div className='processGetting_block_left_item_text'>
                  <ul>
                    <li>- Упаковка</li>
                    <li>- Подарок для каждого</li>
                    <li>- Отправка</li>
                    <li>- Трекинг</li>
                  </ul>
                </div>
              </div>

              <div className='processGetting_block_left_item'>
                <div className='processGetting_block_left_item_title'>РЕЗУЛЬТАТ</div>
                <div className='processGetting_block_left_item_text'>
                  <ul>
                    <li>- Отличный предмет интерьера</li>
                    <li>- Эмоции от приятного подарка</li>
                  </ul>
                </div>
                <img
                  src='/img-static/land/ex.png'
                  className='processGetting_block_left_item_img'
                  alt='Деревеные картины'
                />
              </div>
            </div>
            <div className='processGetting_block_center' />
            <div className='processGetting_block_right'>
              <div className='buyNowContBodyTextContent2_cont' id='buyNow5'>
                {/* <BuyBtn text='Бесплатная консультанция'/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <a id='quest' />
      <div className='questions'>
        <div className='container'>
          <h2 className='questions_title'>Часто задаваемые вопросы:</h2>
          <ul className='accordion'>
            <li className='accordion_item'>
              <input type='checkbox' className='accordion_toggle' id='toggle-05' checked readOnly hidden />
              <label className='accordion_trigger' htmlFor='toggle-05'>
                Гниют ли доски?
              </label>
              <div className='accordion_target'>
                <p>
                  Нет, мы применяем лучшие материалы, которые не вредны здоровью и сохраняют картину при воздействии
                  внешней среды.
                </p>
              </div>
            </li>
            <li className='accordion_item'>
              <input type='checkbox' className='accordion_toggle' id='toggle-06' checked readOnly hidden />
              <label className='accordion_trigger' htmlFor='toggle-06'>
                Как происходит перенос изображения?
              </label>
              <div className='accordion_target'>
                <p>
                  Путем многолетних экспериментов мы добились максимальной цветопередачи и насыщенности цветов при
                  переносе изображений с помощью УФ печати.
                </p>
              </div>
            </li>
            <li className='accordion_item'>
              <input type='checkbox' className='accordion_toggle' id='toggle-066' hidden />
              <label className='accordion_trigger' htmlFor='toggle-066'>
                Срок изготовления?
              </label>
              <div className='accordion_target'>
                <p>Мы изготавливаем картины за 3-4 рабочих дня.</p>
              </div>
            </li>
            <li className='accordion_item'>
              <input type='checkbox' className='accordion_toggle' id='toggle-07' hidden />
              <label className='accordion_trigger' htmlFor='toggle-07'>
                Изображение будет четким?
              </label>
              <div className='accordion_target'>
                <p>
                  Да. Мы переносим изображение японским, промышленным принтером, где точность и четкость цветов на
                  первом месте.
                </p>
              </div>
            </li>
            <li className='accordion_item'>
              <input type='checkbox' className='accordion_toggle' id='toggle-08' hidden />
              <label className='accordion_trigger' htmlFor='toggle-08'>
                Требования к фото?
              </label>
              <div className='accordion_target'>
                <p>
                  Если вы хотите получить на картине ваше изображение, тогда оно должно быть нормального качества.
                  Минимальный размер 2000на1500 пикселей, если вы не знаете как посмотреть размер, присылайте свою
                  картинку и мы поможем вам. Подойдет фото с вашего телефона! Либо Вы можете скачать изображение в
                  хорошем качестве на сайтах{' '}
                  <a href='https://unsplash.com/' rel='noreferrer' target='_blank' className='accordion_target_link'>
                    unsplash
                  </a>
                  ,{' '}
                  <a
                    href='https://ru.depositphotos.com/'
                    rel='noreferrer'
                    target='_blank'
                    className='accordion_target_link'
                  >
                    depositphotos
                  </a>{' '}
                  или{' '}
                  <a
                    href='https://www.shutterstock.com/'
                    rel='noreferrer'
                    target='_blank'
                    className='accordion_target_link'
                  >
                    shutterstock
                  </a>
                </p>
              </div>
            </li>
            <li className='accordion_item'>
              <input type='checkbox' className='accordion_toggle' id='toggle-09' hidden />
              <label className='accordion_trigger' htmlFor='toggle-09'>
                Как крепится?
              </label>
              <div className='accordion_target'>
                <p>
                  Все картины крепятся на толстую веревку, находящуюся сзади. В комплекте идут крепления для стены, за
                  которые можно зацепить веревку. Тяжелые картины крепятся на цепь или другой вид креплений.
                </p>
              </div>
            </li>
            <li className='accordion_item'>
              <input type='checkbox' className='accordion_toggle' id='toggle-10' hidden />
              <label className='accordion_trigger' htmlFor='toggle-10'>
                Оплата
              </label>
              <div className='accordion_target'>
                <p>Мы принимаем полную предоплату на карту или наложенный платеж.</p>
              </div>
            </li>
            <li className='accordion_item'>
              <input type='checkbox' className='accordion_toggle' id='toggle-11' hidden />
              <label className='accordion_trigger' htmlFor='toggle-11'>
                Доставка
              </label>
              <div className='accordion_target'>
                <p>Доставка осуществляется курьерской службой Новая Почта, по всей Украине.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className='buyNow2 fullWidth backgroundImage'
        // style="background-image:url('/img-static/buy1.jpg')"
        style={{backgroundImage: "url('/img-static/land/buy1.jpg')"}}
      >
        <div className='buyNowContBodyText2'>
          <h2 className='buyNowContBodyTextTitle2'>ПОДАРОК ВТОРОЙ ПОЛОВИНЕ</h2>
          <div className='buyNowContBodyTextContent2_cont' id='buyNow2'>
            {/* <BuyBtn/> */}
          </div>
        </div>
      </div>
      <img src='/img-static/land/tt.png' className='papeImages' alt='Украина, картины на досках и дереве' />
      <Price />
      <div
        className='buyNow2 fullWidth backgroundImage'
        // style="background-image:url('/img-static/buy2.jpg')"
        style={{backgroundImage: "url('/img-static/land/buy2.jpg')"}}
      >
        <div className='buyNowContBodyText2'>
          <h2 className='buyNowContBodyTextTitle2'>ПОДАРОК КОЛЛЕГЕ ИЛИ БОССУ</h2>
          <div className='buyNowContBodyTextContent2_cont' id='buyNow3'>
            {/* <BuyBtn/> */}
          </div>
          {/* <div class="buyNowContBodyTextContent2">--> */}
          {/* <div class="buyNow2_arrow">--> */}
          {/* <img src="/img-static/red-arrow.png" alt=""/>--> */}
          {/* </div>--> */}
          {/* <span>КУПИТЬ</span>--> */}
          {/* </div>--> */}
        </div>
        {/* <img src="/img-static/buy2.jpg">--> */}
      </div>
      <div className='socBlock'>
        <h2 className='socBlock_title'>Узнайте о нас больше в социальных сетях</h2>
        <div className='socBlock_cont'>
          {/* <div className="socBlock_facebook"> */}
          {/*  <img src="/img-static/land/facebook.png" alt="Картины на досках facebook"/> */}
          {/* </div> */}
          <a className='socBlock_inst' href='https://www.instagram.com/doshki.kom/' rel='noreferrer' target='_blank'>
            {/* <div className="buyNow2_arrow"> */}
            {/*  <img src="/img-static/land/red-arrow.png" alt=""/> */}
            {/* </div> */}
            <img src='/img-static/land/inst.png' alt='Картины на досках instagram' className='socBlock_inst_img' />
          </a>
          {/* <div className="socBlock_youtube"> */}
          {/*  <img src="/img-static/land/you.png" alt="Картины на досках youtube"/> */}
          {/* </div> */}
        </div>
      </div>
      <div
        className='buyNowBlock fullWidth backgroundImage'
        // style="background-image:url('/img-static/slide_sosd5.jpg')"
        style={{backgroundImage: "url('/img-static/land/slide_sosd5.jpg')"}}
      >
        <div className='buyNowBlock_container'>
          <a id='aboutUs' />
          Мы клиенто-ориентированная мастерская! Каждый второй человек приходит к нам повторно. Это говорит о многом.
          Уже несколько лет наша мастерская создает картины на досках в Украине. Сотни довольных клиентов. Сотни картин
          нашли своего ценителя. Каждый клиент нам очень важен, так как продукция создается именно для него, результат и
          качество превыше всего.
        </div>
      </div>
      <div className='orangeBlack'>
        <img className='orangeBlack_body' src='/img-static/land/orange.png' alt='Оранжевая полоса' />
      </div>
      <div className='advantagesBlock'>
        <img src='/img-static/land/tools2.png' alt='' className='advantagesBlock_tools' />
        <div className='advantagesBlock_container'>
          <div className='advantagesBlock_list'>
            <div className='advantagesBlock_list_item'>
              На рынке картин на досках уже <span className='blackColor'>4</span> года.
            </div>
            <div className='advantagesBlock_list_item'>
              Более <span className='blackColor'>700 </span>
              довольных клиентов.
            </div>
            <div className='advantagesBlock_list_item'>
              Только <span className='blackColor'>натуральные</span> материалы.
            </div>
            <div className='advantagesBlock_list_item'>
              <span className='blackColor'>Ручная</span> и аккуратная работа.
            </div>
            <div className='advantagesBlock_list_item'>
              Изготовлние за <span className='blackColor'>3</span> дня
            </div>
            <div className='advantagesBlock_list_item'>Индивидуальный подход.</div>
            <div className='advantagesBlock_list_item'>
              Гарантия <span className='blackColor'>1</span> год на все картины.
            </div>
          </div>
          <div className='advantagesBlock_tools_cont' />
        </div>
        <img className='advantagesBlock_girl' src='' />
      </div>
      <div className='toShopBlock'>
        {/* <div className="toShopBlock_text"></div> */}
        <Link to='/shop' className='toShopBlock_text'>
          БОЛЬШЕ ПРИМЕРОВ В НАШЕМ МАГАЗИНЕ
        </Link>
      </div>
      <div
        className='daBlock fullWidth'
        // style="background-image:url('/img-static/sd5.jpg')"
        style={{backgroundImage: "url('/img-static/land/sd5.jpg')"}}
      >
        <div className='daBlock_container'>
          <h2 className='daBlock_title'>
            Хотите Бесплатную обработку фото
            <br />и ее вид в интерьере!
          </h2>
          <div className='daBlock_desc'>Не знаете что из этого выйдет? Довертесь нашим дизайнерам!</div>
          <div className='daBlock_btn'>
            <div className='buyNowContBodyTextContent2_cont' id='buyNow6'>
              {/* <BuyBtn text='Бесплатная визуализация' /> */}
            </div>
          </div>
        </div>
      </div>
      <div className='socBlock'>
        <h2 className='socBlock_title'>Узнайте о нас больше в социальных сетях</h2>
        <div className='socBlock_cont'>
          {/* <div className="socBlock_facebook"> */}
          {/*  <img src="/img-static/land/facebook.png" alt="Картины на досках facebook"/> */}
          {/* </div> */}
          <a className='socBlock_inst' href='https://www.instagram.com/doshki.kom/' target='_blank' rel='noreferrer'>
            {/* <div className="buyNow2_arrow"> */}
            {/*  <img src="/img-static/land/red-arrow.png" alt=""/> */}
            {/* </div> */}
            <img src='/img-static/land/inst.png' alt='Картины на досках instagram' className='socBlock_inst_img' />
          </a>
          {/* <div className="socBlock_youtube"> */}
          {/*  <img src="/img-static/land/you.png" alt="Картины на досках youtube"/> */}
          {/* </div> */}
        </div>
      </div>
      <div className='bottomBlock'>
        <div className='container'>
          <div className='bottomBlock_title' />
          <div className='bottomBlock_items'>
            <div className='bottomBlock_item'>
              <div className='bottomBlock_item_title'>ИНФОРМАЦИЯ</div>
              <div className='bottomBlock_item_text'>
                <a href='/#prep'>Изготовление</a>
              </div>
              <div className='bottomBlock_item_text'>
                <a href='/#howWeMake'>Примеры</a>
              </div>
              <div className='bottomBlock_item_text'>
                <a href='/#quest'>Вопросы</a>
              </div>
              <div className='bottomBlock_item_text'>
                <a href='/#price'>Цены</a>
              </div>
              <div className='bottomBlock_item_text'>
                <a href='/#yorPhoto'>Ваше фото</a>
              </div>
            </div>
            <div className='bottomBlock_item'>
              <div className='bottomBlock_item_text'>
                <a href='' aria-label='Save' />
              </div>
              <div className='bottomBlock_itemIimg_wr'>
                <img src='/img-static/land/logo.png' alt='' className='bottomBlock_itemIimg' />
              </div>
            </div>
          </div>
          <div className='bottomBlock_copy'>
            © 2019 doshki.com | Все права защищены. Использование любых материалов только с разрешения администрации
            сайта.
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    number1: state.serviceReducer.number1
    // cart: state.cart.items,
  };
};

const f = connect(mapStateToProps)(Landing);

export default f;
