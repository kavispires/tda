import { ProgressProps } from 'antd';

export type Language = 'en' | 'pt';

export type Game = {
  id: string;
  title: string;
  banner: string;
  audio: string;
  timer?: {
    lead: number;
    cutoff: number;
    icon: React.ComponentType;
    type: ProgressProps['type'];
  };
};

export type ItemCard = {
  id: string;
  name: string;
};
