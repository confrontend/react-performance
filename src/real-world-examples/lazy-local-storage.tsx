import { useState } from "react";

type StorageObjectType = {
  importantValue: number;
};

function getInitialStateFromLocalStorage<T>(key: string, defaultValue: T): T {
  console.log("Accessing local storage for initial state...");
  const storedData = localStorage.getItem(key);
  // some heavy computation based on storedData

  return storedData ? (JSON.parse(storedData) as T) : defaultValue;
}

const LocalStorageComponent = () => {
  // Lazy initialization of state from local storage
  const [calculated] = useState(() =>
    getInitialStateFromLocalStorage<StorageObjectType>("userSettings", {
      importantValue: 123,
    })
  );

  return (
    <div>
      <p>Current value: {calculated.importantValue}</p>
    </div>
  );
};

export default LocalStorageComponent;
