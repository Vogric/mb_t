import { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Home from './pages/Home/Home';
import DetailPage from './pages/Detail/DetailPage';
import { ROUTE } from './services/enums';
import ErrorBoundary from './comps/ErrorBoundary';

const SnapflickApp = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={(<Home />) as unknown as ReactNode} />
            <Route
              path={ROUTE.DETAIL}
              element={(<DetailPage />) as unknown as ReactNode}
            />
            <Route path="*" element={(<Home />) as unknown as ReactNode} />
          </Routes>
        </Provider>
      </Router>
    </ErrorBoundary>
  );
};

export default SnapflickApp;
