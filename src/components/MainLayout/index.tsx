import React from 'react';
import dynamic from 'next/dynamic'
import SideMenu from '../SideMenu';
import {Base} from './styles';
import { MuserInfo } from '../../../__mocks__/userInfo';
import { defaultSelectedList } from '../../common/types';
import Loading from '../Loading';

const MainLayout:React.FunctionComponent = () => {

  const [selectedList, setSelectedList] = React.useState<string>(defaultSelectedList);
  const userInfo = MuserInfo;
  const PageComponent = dynamic((() => import(`../ActivityComponents/${selectedList}`)) as any, {
    loading: () => <Loading />
  })

  const onListChange = (listName:string) => {
    const newListPage = userInfo && userInfo.lists && userInfo.lists.find(list => list.component === listName);
    setSelectedList(newListPage ? newListPage.component : defaultSelectedList);
  }

  return (
    <Base>
      <SideMenu
        userInformation={userInfo}
        selectedList={selectedList}
        onChangeList={onListChange}
      >
      </SideMenu>
      <PageComponent />
    </Base>
  )
}

export default MainLayout;