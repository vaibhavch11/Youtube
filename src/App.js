import { Provider } from 'react-redux';
import Body from './components/Body';
import Header from './components/Header';
import "./index.css"
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {
  return (
    <Provider store={store}> 
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

const appRouter = createBrowserRouter([{
  path : "/",
  element : <Body />,
  children : [{
    path: "/",
    element: <MainContainer />
  },
  {
    path: "watch",
    element : <WatchPage />
  }]
}])
export default App;
