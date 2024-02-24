import { RoundScreen } from './RoundScreen';
import { StartScreen } from './StartScreen';
import { ResultScreen } from './ResultsScreen';
import { RecollectionScreen } from './RecollectionScreen';

export function SonhinhoBomGame() {
  return (
    <>
      <StartScreen />
      <RoundScreen />
      <RecollectionScreen />
      <ResultScreen />
    </>
  );
}
