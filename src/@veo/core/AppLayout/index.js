import React, { useEffect } from 'react';
import { useUrlSearchParams } from 'use-url-search-params';
import AppContentView from '@veo/core/AppLayout/AppContentView';
import generateRoutes from '@veo/helpers/RouteGenerator';
// import { Layouts } from '@veo/components/AppLayout';
import { useAuthUser } from '@veo/hooks/AuthHooks';
// import {
//   useLayoutActionsContext,
//   useLayoutContext,
// } from '@crema/context/AppContextProvider/LayoutContextProvider';
// import { useSidebarActionsContext } from '@crema/context/AppContextProvider/SidebarContextProvider';

import {
  anonymousStructure,
  authorizedStructure,
  publicStructure,
} from '@veo/core/AppRoutes';
import { useRoutes } from 'react-router-dom';
// import routesConfig from '../AppRoutes/routeConfig';
import { initialUrl } from '@veo/constants/AppConst';
import AppHeader from '@veo/core/AppLayout/AppHeader';
import AppSidebar from './AppSidebar';

import { useSelector, useDispatch } from 'react-redux';
import {
  changeLayout,
  changeSidebarTheme,
  changeLayoutMode,
  changeLayoutWidth,
  changeLayoutPosition,
  changeLeftSidebarSizeType,
} from 'toolkit/actions';
const AppLayout = () => {
  // const { navStyle } = useLayoutContext();
  const dispatch = useDispatch();
  const {
    layoutType,
    leftSidebarType,
    layoutModeType,
    layoutWidthType,
    layoutPositionType,
    leftSidebarSizeType,
  } = useSelector(({ settings }) => settings);
  const { user, isAuthenticated } = useAuthUser();
  // const { updateNavStyle } = useLayoutActionsContext();
  // const { updateMenuStyle, setSidebarBgImage } = useSidebarActionsContext();
  // const AppLayout = Layouts[navStyle];
  const [params] = useUrlSearchParams();

  const initURL = params?.redirect ? params?.redirect : initialUrl;
  const loginUrl = `/signin?redirect=${window.location.pathname}`;
  const generatedRoutes = generateRoutes({
    isAuthenticated: isAuthenticated,
    userRole: user?.role,
    anonymousStructure: anonymousStructure(initURL),
    authorizedStructure: authorizedStructure(loginUrl),
    publicStructure: publicStructure(initURL),
  });

  const routes = useRoutes(generatedRoutes);
  // useEffect(() => {
  //   if (params.layout) updateNavStyle(params.layout);
  //   if (params.menuStyle) updateMenuStyle(params.menuStyle);
  //   if (params.sidebarImage) setSidebarBgImage(true);
  // }, [
  //   params.layout,
  //   params.menuStyle,
  //   params.sidebarImage,
  //   updateNavStyle,
  //   updateMenuStyle,
  //   setSidebarBgImage,
  // ]);

  useEffect(() => {
    if (
      leftSidebarType ||
      layoutModeType ||
      layoutModeType ||
      layoutPositionType ||
      leftSidebarSizeType
    ) {
      window.dispatchEvent(new Event('resize'));
      dispatch(changeLayout(layoutType));
      dispatch(changeLayoutMode(layoutModeType));
      dispatch(changeSidebarTheme(leftSidebarType));
      dispatch(changeLayoutWidth(layoutWidthType));
      dispatch(changeLayoutPosition(layoutPositionType));
      dispatch(changeLeftSidebarSizeType(leftSidebarSizeType));
    }
  }, [
    layoutType,
    leftSidebarType,
    layoutModeType,
    layoutWidthType,
    layoutPositionType,
    leftSidebarSizeType,
    dispatch,
  ]);
  return (
    <>
      {isAuthenticated ? (
        <>
          <AppHeader />
          <AppSidebar />
          <AppContentView
            className='main-content'
            layout='protected'
            routes={routes}
          />
        </>
      ) : (
        /* <AppLayout routes={routes} routesConfig={routesConfig} /> */

        <AppContentView className='auth-page-wrapper pt-5' routes={routes} />
      )}
    </>
  );
};

export default AppLayout;
