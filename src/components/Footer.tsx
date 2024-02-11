import { Layout } from 'antd';
import { RulesIcon, ScoreIcon, TimerIcon } from 'icons';
import { useLocation, useNavigate } from 'react-router-dom';

import { Icon } from './Icon';
import { TransparentButton } from './TransparentButton';

export function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log('pathname', pathname);

  const goToPage = (page: string) => navigate(page);

  return (
    <Layout.Footer className="app__footer">
      <TransparentButton
        className="footer-nav-button"
        activeClass="footer-nav-button--active"
        active={pathname.includes('timers')}
        onClick={() => goToPage('/timers')}
        hoverType="background"
      >
        <Icon icon={<TimerIcon />} size="large" />
      </TransparentButton>

      <TransparentButton
        className="footer-nav-button"
        activeClass="footer-nav-button--active"
        active={pathname.includes('scorer')}
        onClick={() => goToPage('/scorer')}
        hoverType="background"
      >
        <Icon icon={<ScoreIcon />} size="large" />
      </TransparentButton>

      <TransparentButton
        className="footer-nav-button"
        activeClass="footer-nav-button--active"
        active={pathname.includes('rules')}
        onClick={() => goToPage('/rules')}
        hoverType="background"
      >
        <Icon icon={<RulesIcon />} size="large" />
      </TransparentButton>
    </Layout.Footer>
  );
}
