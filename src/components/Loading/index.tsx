import React from 'react';
import { FaSpinner } from "react-icons/fa";
import {Base} from './styles';

const Loading:React.FunctionComponent = () => (
    <Base className="fa-3x">
      <FaSpinner className="fa-spin"/>
    </Base>
)
export default Loading;