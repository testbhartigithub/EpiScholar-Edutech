import React from 'react';
import JobBoard from './components/JobBoard';
import { Providers } from './providers/Providers';

function App() {
    return (
        <Providers>
          <JobBoard />
        </Providers>
      )
};

export default App;
