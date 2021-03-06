import React, { Component } from 'react';
import { Input } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { history, connect } from 'umi';

class ListSearch extends Component {

  handleTabChange = (key) => {
    const { match } = this.props;
    const url = match.url === '/' ? '' : match.url;

    switch (key) {
      case 'articles':
        history.push(`${url}/articles`);
        break;

      case 'applications':
        history.push(`${url}/applications`);
        break;

      case 'projects':
        history.push(`${url}/projects`);
        break;

      default:
        break;
    }
  };
  handleFormSubmit = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
    const {dispatch} = this.props;
    dispatch({
      type: "test/test",
      payload: {
        value
      }
    })
  };
  getTabKey = () => {
    const { match, location } = this.props;
    const url = match.path === '/' ? '' : match.path;
    const tabKey = location.pathname.replace(`${url}/`, '');

    if (tabKey && tabKey !== '/') {
      return tabKey;
    }

    return 'articles';
  };

  render() {
    const tabList = [
      {
        key: 'articles',
        tab: '文章',
      },
      {
        key: 'projects',
        tab: '项目',
      },
      {
        key: 'applications',
        tab: '应用',
      },
    ];
    const mainSearch = (
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Input.Search
          placeholder="请输入"
          enterButton="搜索"
          size="large"
          onSearch={this.handleFormSubmit}
          style={{
            maxWidth: 522,
            width: '100%',
          }}
        />
      </div>
    );
    const { children, tableData } = this.props;
    return (
      <PageContainer
        content={mainSearch}
        tabList={tabList}
        tabActiveKey={this.getTabKey()}
        onTabChange={this.handleTabChange}
      >
        {children}
        <div>{JSON.stringify(tableData)}</div>
      </PageContainer>
    );
  }
}

export default connect(({test}) => ({
  tableData: test.tableData
}))(ListSearch);
