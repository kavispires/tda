import { Layout } from 'antd';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Home } from 'pages/Home';
import { RuleBook } from 'pages/RuleBook';
import { Rules } from 'pages/Rules';
import { Scorer } from 'pages/Scorer';
import { Timer } from 'pages/Timer';
import { Timers } from 'pages/Timers';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
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
  );
}

export default App;
