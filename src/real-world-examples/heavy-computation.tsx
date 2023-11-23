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

const ListItem = memo(({ itemId, onSelect }: ListItemProps) => {
  console.log("ListItem render", itemId);
  return <li onClick={() => onSelect(itemId)}>Item {itemId}</li>;
});

export const List = ({ items }: ListProps) => {
  const [computationCache, setComputationCache] = useState<{
    [key: number]: string;
  }>({});

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

  // useMemo to memoize the list items
  const memoizedListItems = useMemo(() => {
    return items.map((itemId) => (
      <ListItem key={itemId} itemId={itemId} onSelect={onSelect} />
    ));
  }, [items, onSelect]);

  return (
    <>
      <ul>{memoizedListItems}</ul>
      <br />
      <div>
        <code>computationCache:</code>
        <pre>{JSON.stringify(computationCache, null, 2)}</pre>
      </div>
    </>
  );
};
