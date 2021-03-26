import {PageContainer} from '@ant-design/pro-layout';
import React, {useEffect, useState} from 'react';
import {Spin} from 'antd';
import styles from './index.less';
import ButtonSize from './ButtonSize';
import TypographyBasic from './TypographyBasic';
import {getData} from "@/services/new/test";

export default () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    getData(1).then(res => {
      setData(res)
    })
  }, []);
  return (
    <PageContainer content="这是一个新页面，从这里进行开发！" className={styles.main}>
      <div
        style={{
          padding: 20,
          textAlign: 'center',
        }}
      >
        <Spin spinning={loading} size="large"/>
        {
          !loading && <div>{JSON.stringify(data)}</div>
        }
      </div>
      <ButtonSize/>
      <TypographyBasic/>
      <div></div>
      <div></div>
    </PageContainer>
  );
};
