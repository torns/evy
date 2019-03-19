import React, {Component, Fragment} from 'react';
import {connect} from 'dva';
import {SheetActions} from '../../models';
import {FormItem} from '../../components';
import {Button, Form} from 'antd';

@connect((sheet) => ({...sheet}), {...SheetActions})
class Search extends Component {

  componentWillMount() {
    const {getFieldDecorator} = this.props.form;
    this.props.drawer_set({getFieldDecorator}); // 传递 antd 的 form 给 model
  }


  render() {
    const {sheet} = this.props;
    const {drawerType} = sheet;
    return (
      <div>
        {
          drawerType === 'search' ? <Fragment>
            <FormItem label="姓名" title='real_name' required={false}/>
            <FormItem label="角色" title='role' required={false}/>
            <FormItem label="职称" title='job_name' required={false}/>
            <FormItem label="工号" title='employee_id' required={false}/>
            <FormItem label="手机号" title='phone' required={false}/>
            <FormItem label="性别" title='sex' type='select' select={{'男': 1, '女': 2}} required={false}/>
            <FormItem label="婚姻情况" title='marriage' type='select' select={{'未婚': 1, '已婚': 2, '离异': 3}}
                      required={false}/>
            <FormItem label="状态" title='status' type='select' select={{'可用': 1, '禁用': 2}} required={false}/>
            <FormItem label="选择时间" title='update_time' type='rangeDate' required={false}/>
            <Button block>清空</Button>
            <Button type='primary' block>搜索</Button>
          </Fragment> : null
        }
      </div>
    );
  }
}

const FormApp = Form.create()(Search);
export default FormApp;