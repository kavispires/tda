import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Home } from 'pages/Home';
import { RuleBook } from 'pages/RuleBook';
import { Rules } from 'pages/Rules';
import { Scorer } from 'pages/Scorer';
import { Timer } from 'pages/Timer';
import { Timers } from 'pages/Timers';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, Layout, App as AntApp } from 'antd';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "'Lato', sans-serif",
          },
        }}
      >
        <AntApp>
          <HashRouter>
            <Layout className="app">
              <Header />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="timers" element={<Timers />}>
                  <Route path=":timerId" element={<Timer />} />
                </Route>
                <Route path="Scorer" element={<Scorer />} />
                <Route path="Rules" element={<Rules />}>
                  <Route path=":ruleId" element={<RuleBook />} />
                </Route>
              </Routes>

              <Footer />
            </Layout>
          </HashRouter>
        </AntApp>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
