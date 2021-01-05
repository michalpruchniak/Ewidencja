import React, { useEffect, useState } from 'react';

import Evidence from './Evidence'

function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    setIsLoaded(false)
  })
  return (
    <div>
      {isLoaded ? <span>Loading...</span> : <Evidence />}
    </div>
  )
}


export default App;
