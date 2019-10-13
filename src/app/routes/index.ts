import * as Routes from '../../../config/routeNames';
import HomePage from '../scenes/home/components/HomePage';
import AboutPage from '../scenes/about/components/AboutPage';

export default [
  {
    path: Routes.HomePage,
    component: HomePage,
    exact: true,
  },
  {
    path: Routes.AboutPage,
    component: AboutPage,
    exact: true,
  },
];
