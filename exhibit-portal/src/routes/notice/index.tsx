import * as React from 'react';
import { connect } from 'react-redux';
import { Layout, Pagination, Modal, Icon, message } from 'antd';
import ResultItem from './result_item';
import Nav from '../../components/nav';
import HeaderBar from '../../components/header_bar';
import Footer from '../../components/footer';
import styles from './style.module.less';
import store from 'store';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';
import { notice_msg } from '../../messages/notice';
import { common_msg } from '../../messages/common';
const { confirm } = Modal;
export interface NoticeProps {
  history;
  location;
  match;
  list;
  intl;
  resetQuerys;
  getNoticeList;
  deleteNotice;
  notice;
  query;
  resetNoticeRead;
  resetNoticeLists;
}

class Notice extends React.Component<NoticeProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1
    }
  }
  componentDidMount() {
    const { query, resetQuerys } = this.props;
    this.onChange(query.pageNumber || this.state.pageNumber);
    resetQuerys();
  }
  componentWillUnmount() {
    const { resetNoticeLists, } = this.props;
    resetNoticeLists();
  }
  getData = () => {
    let { getNoticeList } = this.props;
    let { pageNumber } = this.state;
    let lan = store.get('local_language');
    getNoticeList({
      query: {
        language: lan === 'zh' ? 'chinese' : 'english',
        pageNumber,
        pageSize: 5
      },
      cb: (err, res) => { 

      }
    });
  };
  // 分页
  onChange = (pageNumber) => {
    this.setState({
      pageNumber
    }, () => {
      this.getData();
    });
  }
  resetNoticeRead = () => {
    const { resetNoticeRead } = this.props;
    resetNoticeRead({
      cb: () => {
        this.getData()
      }
    })
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps) {
      const list = nextProps.notice.noticeEntities || [];
      const count = nextProps.notice.count;
      if(!list.length && count) {
        this.onChange(this.state.pageNumber-1)
      }
    }
  }
  clearList = () => {
    const { deleteNotice, notice, intl } = this.props;
    const { formatMessage } = intl;
    if(notice.count) {
      confirm({
        title: `${formatMessage(common_msg.confirm_reset_notice)}?`,
        okText: formatMessage(common_msg.btn_sure),
        cancelText: formatMessage(common_msg.btn_cancel),
        onOk() {
          deleteNotice({ 
            cb: null
          }) 
        },
        onCancel() { }
      })
    }else {
      message.warn(formatMessage(notice_msg.notice_null))
    }
    
  };
  public render() {
    let { notice, history, intl, } = this.props;
    const { formatMessage } = intl;
    return (
      <Layout className="layout">
        <HeaderBar history={history} intl={intl} show={true} /> 
        <div className={styles.noticeContent}>
          <Nav name={notice_msg.message} title={notice_msg.msg_list} intl={intl}></Nav>
          <div className={styles.result}>
            <div className={styles.content}>
              <div className={styles.readed_delete}>
                <span onClick={this.resetNoticeRead}>
                  <Icon type="check" className={styles.font} />
                  {formatMessage(common_msg.readed)}
                </span>
                <span onClick={this.clearList.bind(this)}>
                  <span className={classNames('iconfont icon-lajitong', styles.font)} />
                  {formatMessage(common_msg.clear)}
                </span>
              </div>
              {(notice.noticeEntities || []).map((item, index) => {
                return <ResultItem
                  data={item}
                  key={index}
                  getData={this.getData}
                  history={history}
                  intl={intl}
                />;
              })}
            </div>
          </div>
          {
            notice.count ? (
              <div className={styles.page}>
                <Pagination
                  total={notice && notice.count}
                  showTotal={
                    total =>  `${formatMessage(common_msg.total)} ${total} ${formatMessage(common_msg.count)}` 
                  }
                  onChange={this.onChange}
                  current={this.state.pageNumber}
                  pageSize={5}
                />
              </div>
            ) : null
          }
        </div>
        <Footer intl={intl} bg='#213571'/>
      </Layout>
    );
  }
}

const mapState2Props = ({ 
  notice: { 
    notice,
    query
  } 
}) => ({
  notice,
  query
})
const mapDispatch2Props = ({ 
  common: { 
    resetNoticeRead 
  },
  notice: { 
    getNoticeList, 
    deleteNotice, 
    resetNoticeLists,
    
  },
  search: {
    resetQuerys,
  }
}:any) => ({
  getNoticeList, 
  deleteNotice, 
  resetNoticeRead, 
  resetNoticeLists,
  resetQuerys
})
export default connect(
  mapState2Props,
  mapDispatch2Props
)(injectIntl(Notice))