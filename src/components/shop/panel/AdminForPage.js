import React from "react";
import st from './index.scss';
class AdminForPage extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
console.log(23);
    }
    render(){
        return(
           <div className="adminForPage">

               <div className="adminForPage_rowInfo">
                   <span className="adminForPage_rowInfo_item">MongoLab DB Hosting</span>
                   <span className="adminForPage_rowInfo_del"> : </span>
                   <a target="blank" href="https://mlab.com/databases/js-shop"
                      className="adminForPage_rowInfo_value">
                       https://mlab.com/databases/js-shop
                   </a>
               </div>

               <div className="adminForPage_rowInfo">
                   <span className="adminForPage_rowInfo_item">Heroku NodeJS Hosting</span>
                   <span className="adminForPage_rowInfo_del"> : </span>
                   <a target="blank" href="https://dashboard.heroku.com/apps/js-shop/deploy/github"
                      className="adminForPage_rowInfo_value">
                       https://dashboard.heroku.com/apps/js-shop/deploy/github
                   </a>
               </div>

               <div className="adminForPage_rowInfo">
                   <span className="adminForPage_rowInfo_item">API GoogleCloudStorage for Node</span>
                   <span className="adminForPage_rowInfo_del"> : </span>
                   <a target="blank" href="https://cloud.google.com/nodejs/docs/reference/storage/1.3.x/File?hl=ru#save" className="adminForPage_rowInfo_value"> https://cloud.google.com/nodejs/docs/reference/storage/1.3.x/File?hl=ru#save</a>
               </div>

               <div className="adminForPage_rowInfo">
                   <span className="adminForPage_rowInfo_item">API GoogleCloudStorage on GitHub</span>
                   <span className="adminForPage_rowInfo_del"> : </span>
                   <a target="blank" href="https://github.com/googleapis/nodejs-storage/tree/master/samples#buckets" className="adminForPage_rowInfo_value">
                       https://github.com/googleapis/nodejs-storage/tree/master/samples#buckets
                   </a>
               </div>

               <div className="adminForPage_rowInfo">
                   <span className="adminForPage_rowInfo_item">GoogleCloudStorage Panel</span>
                   <span className="adminForPage_rowInfo_del"> : </span>
                   <a target="blank" href="https://console.cloud.google.com/storage/browser/js-shop-images?project=js-shop"
                      className="adminForPage_rowInfo_value">
                       https://console.cloud.google.com/storage/browser/js-shop-images?project=js-shop
                   </a>
               </div>

           </div>
        )
    }
}
export default AdminForPage;
