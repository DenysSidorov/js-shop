define([
    'react',
    'react-dom',
    // 'components/image-gallery/component/ImageGallery',
    'react-image-gallery',
    // 'react-click-outside',
    './img/noCar.jpg',
    './css/style.less'
], function (React, ReactDOM, ImageGallery, defaultImg) {

    const defaltImg = {
        original: defaultImg,
        thumbnail: defaultImg
    }
    class UseGalleryImage extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isFullScreen: this.props.isFullScreen ? this.props.isFullScreen : false
            }
        }

        componentDidMount() {
            var self = this;
            window.addEventListener("keydown", function (e) {
                // Выходим из полноэкранного режима
                if (e.keyCode === 27) { 
                    self.fullScreenClose(e);
                }
            })
        }


        componentWillMount(){
            if(this.state.isFullScreen){
                window.document.body.style.overflow = 'hidden';
                console.log('open Did');
            } else{
                window.document.body.style.overflow = 'auto';
                console.log('close Did');
            }
        }

        fullScreenM(e) {
            console.log('open');
            this.setState({
                isFullScreen: true
            })
            window.document.body.style.overflow = 'hidden';
        }

        fSClose(event){

            if(event.target.getAttribute('class') == 'fullScreen' ){
                console.log(event.target, ' target');
                console.log(event.this,' this2');
                event.stopPropagation();
                console.log('close fS');
                this.setState({
                    isFullScreen: false
                })
                window.document.body.style.overflow = 'auto';
            }
        }

        fullScreenClose(event) {
            event.stopPropagation();
            console.log('close');
            this.setState({
                isFullScreen: false
            })
            window.document.body.style.overflow = 'auto';
        }

        render() {
            console.log('test1');
            let arrForView = [defaltImg, defaltImg, defaltImg];
            if (this.props.items && this.props.items.length) {
                arrForView = this.props.items;
            }
            let d = ((Date.now().toString() * 1) + 4).toString();
            // console.log(this.props.isFullScreen, " isFullScreen in component");
            return (
                <div style={{
                    height: this.props.height ? this.props.height : '100%',
                    width: this.props.width ? this.props.width : '100%',
                    position: 'relative'
                }}><span className="nullBlock">{this.props.randomNumber ? this.props.randomNumber: null}</span>
                    <div className="imageGalleryContainer">
                        <div className="flScreenBtn" onClick={this.fullScreenM.bind(this)}>
                            <i className="fa fa-television" aria-hidden="true"></i>
                        </div>
                        {this.state.isFullScreen
                            ? <div className="fullScreen" onClick={this.fSClose.bind(this)} >
                            <i onClick={this.fullScreenClose.bind(this)}
                               className="fa fa-times fullCrossBtn" aria-hidden="true"></i>
                            <div className="fullScreenCenter">
                                <div className="fullScreenCenterContainer">
                                    <div className="fullScreenCenterContainerHZ"
                                         onClick={this.fullScreenClose.bind(this)}>
                                        <i className="fa fa-times flScreenBtn" aria-hidden="true"></i>
                                    </div>
                                    <ImageGallery.default
                                        showThumbnails={arrForView.length > 1}
                                        items={arrForView}
                                        slideInterval={2000}
                                        slideDuration={300}
                                        randomNumber={d}
                                        lazyLoad={true}
                                        showPlayButton={false}
                                        showNav={true}
                                        onImageLoad={this.handleImageLoad}
                                        showFullscreenButton={false}
                                        {...this.props}
                                    />
                                </div>
                            </div>
                        </div>
                            : null}
                        {this.state.isFullScreen
                            ? null
                            : <ImageGallery.default

                                randomNumber={Date.now().toString()}
                                items={arrForView}
                                slideInterval={2000}
                                slideDuration={300}
                                lazyLoad={true}
                                showPlayButton={false}
                                showNav={true}
                                onImageLoad={this.handleImageLoad}
                                {...this.props}
                                showFullscreenButton={false}
                            />
                        }
                    </div>
                </div>);
        }
    }

    UseGalleryImage.propTypes = {
        items: React.PropTypes.array, // [{ original: imgSrc, thumbnail: imgSrc}]
        height: React.PropTypes.string,
        width: React.PropTypes.string,
        isFullScreen: React.PropTypes.bool, // на весь экран, но учитывать контейнер в котором лежит компонента
        showNav: React.PropTypes.bool,
        autoPlay: React.PropTypes.bool,
        lazyLoad: React.PropTypes.bool,
        infinite: React.PropTypes.bool,
        showIndex: React.PropTypes.bool,
        showBullets: React.PropTypes.bool,
        showThumbnails: React.PropTypes.bool,
        showPlayButton: React.PropTypes.bool,
        showFullscreenButton: React.PropTypes.bool,
        slideOnThumbnailHover: React.PropTypes.bool,
        disableThumbnailScroll: React.PropTypes.bool,
        disableArrowKeys: React.PropTypes.bool,
        disableSwipe: React.PropTypes.bool,
        defaultImage: React.PropTypes.string,
        indexSeparator: React.PropTypes.string,
        thumbnailPosition: React.PropTypes.string,
        startIndex: React.PropTypes.number,
        slideDuration: React.PropTypes.number,
        slideInterval: React.PropTypes.number,
        onSlide: React.PropTypes.func,
        onScreenChange: React.PropTypes.func,
        onPause: React.PropTypes.func,
        onPlay: React.PropTypes.func,
        onClick: React.PropTypes.func,
        onImageLoad: React.PropTypes.func,
        onImageError: React.PropTypes.func,
        onThumbnailError: React.PropTypes.func,
        renderCustomControls: React.PropTypes.func,
        renderLeftNav: React.PropTypes.func,
        renderRightNav: React.PropTypes.func,
        renderPlayPauseButton: React.PropTypes.func,
        renderFullscreenButton: React.PropTypes.func,
        renderItem: React.PropTypes.func,
    };

    return UseGalleryImage;
});








