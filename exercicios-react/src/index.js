import ReactDOM from 'react-dom'
import React from 'react'
import FirstComponent from './components/FirstComponent'
import {CompA, CompB} from './components/MultipleComponents'
import Family from './components/Family'
import Member from './components/Member'
import FunctionComponent from './components/FunctionComponent'
import Parent from './components/Parent'
import ClassComponent from './components/ClassComponent'
import Hook from './components/Hook'

const element = document.getElementById('root');
ReactDOM.render(
    
    <div>
        <Hook number={10} />
    <ClassComponent value='test'/>
    <Parent/>
        <FunctionComponent/>
        <Family surname="Filipis">
            <Member name='Julius'/>
            <Member name='Christopher'/>
        </Family>
        <FirstComponent value='Tailess Gorilla' uau={123}/>
        <CompA value="ooga"></CompA>
        <CompB value="booga"></CompB>
    </div>
    
, element);