# react-bashme

## Getting Started

Install it:

```
npm install react-bashme
```

Use it:

```jsx
import React from 'react';
import Bashme from 'react-bashme';
import { Json } from 'react-bashme/dist/providers';

class App extends React.Component {
    render() {
        return (
            <div>
                <Bashme
                    providers={[
                        new Json({ name: 'Agustín', skills: [{ name: 'typescript', level: 'n00b' }] })
                    ]}
                />
            </div>
        );
    }
}
```