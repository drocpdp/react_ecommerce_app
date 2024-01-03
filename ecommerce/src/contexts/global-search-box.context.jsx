
import { createContext, useState } from "react";

export const SearchBoxContext = createContext({
    currSearchTerm: "",
    setCurrentSearchTerm: () => null,
});

export const SearchBoxContentProvider = ({children}) => {
    const [currSearchTerm, setCurrentSearchTerm] = useState("");
    const value = { currSearchTerm, setCurrentSearchTerm };
    
    return <SearchBoxContext.Provider value={value}>
              {children}
          </SearchBoxContext.Provider>
}

/*
    in index.js

    ...
    import { SearchBoxContentProvider } from './contexts/global-search-box.context';
    ...
    ...
      <SearchBoxContentProvider>
        <App />
      </SearchBoxContentProvider>
    ...


*/
