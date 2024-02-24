import { Item } from 'components/Sprites';
import { ItemCard } from 'utils/types';

type PreloadItemsProps = {
  sample: ItemCard[];
};

/**
 * Loads sample items in the background to improve performance
 */
export function PreloadItems({ sample }: PreloadItemsProps) {
  return (
    <div style={{ width: 1, height: 1, overflow: 'hidden', position: 'absolute' }}>
      {sample.map((item) => (
        <Item key={item.id} id={item.id} width={1} />
      ))}
    </div>
  );
}
