import * as H from 'history';
import {RouteComponentProps} from 'react-router-dom';

interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

export interface IHistory extends RouteComponentProps {
  location: H.Location;
  history: H.History;
  staticContext?: any;
  state?: any;
  match: match<any>;
}

export interface IComment {
  _id: string | number;
  name: string;
  message: string;
  date: string;
}

export type Token = string | null;
