import React, {Component} from 'react';
import fileUpload from './fileUpload.png';
// https://github.com/react-dropzone/react-dropzone for d&d and upload-file
import Dropzone from 'react-dropzone';
import './index.scss';

class UploadFileField extends Component {
  state = {
    isUserSelectImage: false,
    imageSrc: '',
    files: []
  }

  // componentDidMount() {
    // document.getElementById('fileEdit').addEventListener('change', this.handleFileSelect, false);
  // }

  // componentWillUnmount() {
    // document.getElementById('fileEdit').removeEventListener('change', this.handleFileSelect, false);
  // }

  // HTML 5 FileLoad functionality
  handleFileSelect = (files, isFromDrop = false) => {
    console.log('File From Drop_Component - ', isFromDrop);
    // Check, did user select image
    if (!this.state.isUserSelectImage) {
      this.setState({
        isUserSelectImage: true
      });
    }

    // let files = evt.target.files; // FileList object
    const f = files[0];
    console.log('File - ', f);
    if (f && f.type) {
      // Work only with images
      if (!f.type.match('image.*')) {
        const errorMessage = 'Please put only images';

        alert(errorMessage);
      }

      const reader = new FileReader();

      reader.onload = ((theFile) => {
        console.log(theFile, 'theFile');
        return (e) => {
          // render mini photo.
          this.setState({
            imageSrc: e.target.result,
            files: [f]
          }, () => {
            this.fireParentFunction();
          });
          console.log(e.target.result, 'e.target.result');
        };
      })(f);

      reader.onerror = function (event) {
        console.log(`Can't read file! Code: ${  event.target.error.code}`);
      };

      reader.onprogress = function (event) {
        console.log('-');
        if (event.lengthComputable) {
          console.log(event.total, 'Total size');

          console.log(event.loaded, 'Loaded');
        }
      };

      // Read file like DataURL
      reader.readAsDataURL(f);
    }


    this.setState({});
  }

  onDrop = (files) => {
    console.log(files, 'files');
    this.handleFileSelect(files, true);
  }

  fireParentFunction = () => {
    const imageSrc = this.state.imageSrc;
    const files = this.state.files;
    this.props.selectedFile(files, imageSrc);
  }

  render() {
    const {emptyComponent} = this.props;

    return (
      <div className="uploadFileRd">
        {/* {this.state.isUserSelectImage ? <div className="uploadFileRd_deleteFile">*/}
        {/* Delete File*/}
        {/* </div> : null}*/}
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}
          accept="image/*"
          maxSize={20000000}
          className="uploadFileRd_dropZone"
          activeClassName="uploadFileRd_dropZone_active"
          acceptStyle={{position:'absolute'}}
        >
          <div className="uploadFileRd_dropZone_body">
            <h1>Перетащите сюда файл</h1>
          </div>

          {/* <p>Try dropping some files here, or click to select files to upload.</p>*/}
        </Dropzone>
        <div className="uploadFileRd_uploadLogo">
          <img src={this.state.isUserSelectImage && emptyComponent
            ? this.state.imageSrc
            : fileUpload} alt=""
          />
        </div>
        <div className="uploadFileRd_button_cont">
          <label htmlFor="dadbtn" className="uploadFileRd_button">
            {this.state.isUserSelectImage && emptyComponent
              ? 'Файл выбран' : ' Выберите файл для загрузки'}
            <input type="file"
                   name="dadbtn"
                   ref="fileEdit"
                   id="fileEdit"
                   className="uploadFileRd_button_btn"
            />
          </label>
        </div>

        <div className="uploadFileRd_tip">
          или перетащите файл сюда
        </div>
      </div>
    );
  }
}

export default UploadFileField;
