import React, {Component} from 'react';
import {connect} from 'dva';
import {RouterActions, SheetActions} from '../../models';
import {Body, Sheet, Drawer} from '../../components';
import columns from './columns';
import Detail from './detail';
import Search from './search';

@connect((sheet) => ({...sheet}), {...RouterActions, ...SheetActions})
export default class RolePage extends Component {

  componentWillMount() {
    this.props.sheet_set({columns: columns, rowKey: 'role_id'}); // 初始化 table 列表
    this.props.sheet_url({listUrl: '/api/role'})
  }

  componentDidMount() {
  }

  render() {
    return (
      <Body>
      <Sheet/>
      <Drawer>
        <Detail/>
        <Search/>
      </Drawer>
      </Body>
    );
  }
}