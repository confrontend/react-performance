import { useState, useCallback, useMemo, memo } from "react";

type ListItemProps = {
  itemId: number;
  onSelect: (itemId: number) => void;
};

type ListProps = {
  items: number[];
};

// A mock heavy computational function
const heavySelectComputation = (itemId: number): string => {
  console.log("Computing for item", itemId);
  return `Computed value for item ${itemId}`;
};

/**
 * The ListItem component is wrapped in React.memo, which prevents
 * the component from re-rendering unless its props change.
 */
const ListItem = memo(({ itemId, onSelect }: ListItemProps) => {
  console.log("render");

  return <li onClick={() => onSelect(itemId)}>Item {itemId}</li>;
});

export const List = ({ items }: ListProps) => {
  const [computationCache, setComputationCache] = useState<{
    [key: number]: string;
  }>({});

  /**
   * The onSelect callback is wrapped with useCallback to ensure that it has a
   * stable reference across renders. This is important because it's passed down
   * to ListItem, which is wrapped in React.memo for performance reasons. If
   * onSelect were recreated on each render, it would cause ListItem to
   * re-render unnecessarily.
   */
  const onSelect = useCallback((itemId: number) => {
    setComputationCache((prevCache) => {
      if (!prevCache[itemId]) {
        const computedValue = heavySelectComputation(itemId);
        return {
          ...prevCache,
          [itemId]: computedValue,
        };
      }
      return prevCache;
    });
  }, []);

  return (
    <>
      <ul>
        {items.map((itemId) => (
          <ListItem key={itemId} itemId={itemId} onSelect={onSelect} />
        ))}
      </ul>

      <br />
      <div>
        <code>computationCache:</code>
        <pre>{JSON.stringify(computationCache, null, 2)}</pre>
      </div>
    </>
  );
};
