import React from 'react';
import type { TableProps } from 'antd';
import { Table } from 'antd';

const HeaderTable = (props: { style?: React.CSSProperties; children?: React.ReactNode }) => (
  <>
    <div style={{ left: 0, position: 'sticky' }}>
      <div
        style={{
          padding: 8,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>哈哈哈</div>
        <div>哈哈哈</div>
      </div>
    </div>
    <table {...props} />
  </>
);
const _tableProps: TableProps = {
  columns: [
    { title: 'Name1', width: 1600, dataIndex: 'name' },
    { title: 'Name2', dataIndex: 'name' },
    { title: 'Name3', dataIndex: 'name' },
    { title: 'Name4', dataIndex: 'name' },
    { title: 'Name5', dataIndex: 'name' },
  ],
  dataSource: [
    { key: '1', name: 'John Brown' },
    { key: '2', name: 'Jim Green' },
    { key: '3', name: 'Joe Black' },
  ],
  scroll: { x: 'max-content' },
  sticky: true,
  components: { header: { table: HeaderTable } },
};

const App = () => (
  <div style={{ padding: 20 }}>
    <Table {..._tableProps} />
    <Table
      {..._tableProps}
      columns={[
        ...(_tableProps.columns || []),
        { title: 'Name5', fixed: 'right', dataIndex: 'name' },
      ]}
    />
  </div>
);

export default App;
