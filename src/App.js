import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Home } from 'pages/Home';
import { RuleBook } from 'pages/RuleBook';
import { Rules } from 'pages/Rules';
import { Scorer } from 'pages/Scorer';
import { Game } from 'pages/Game';
import { Games } from 'pages/Games';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, Layout, App as AntApp } from 'antd';
import { PlayersProvider } from 'context/PlayersProvider';
import { SonhinhoBomProvider } from 'context/SonhinhoBomProvider';

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
        <HashRouter>
          <AntApp>
            <PlayersProvider>
              <SonhinhoBomProvider>
                <Layout className="app">
                  <Header />

                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="games" element={<Games />} />
                    <Route path="games/:gameId" element={<Game />} />
                    <Route path="Scorer" element={<Scorer />} />
                    <Route path="Rules" element={<Rules />}>
                      <Route path=":ruleId" element={<RuleBook />} />
                    </Route>
                  </Routes>

                  <Footer />
                </Layout>
              </SonhinhoBomProvider>
            </PlayersProvider>
          </AntApp>
        </HashRouter>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
