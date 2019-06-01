import * as React from 'react';

interface ICounterState {
    currentCount: number;
}

export class Counter extends React.Component<{}, ICounterState> {

    constructor(props: {}) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

    public render(): React.ReactElement<{}> {
        return (
            <div>
                <h1>Counter</h1>
                <p>This is a simple example of a React component.</p>
                <p>Current count: <strong>{this.state.currentCount}</strong></p>
                <button onClick={this.incrementCounter}>Increment</button>
            </div>
        );
  }
}
