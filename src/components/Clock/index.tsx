import React from "react";

interface Props {
  locale: string;
}

class Clock extends React.Component<Props> {
  clockTimer: any;
  constructor(props: Props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount(): void {
    this.clockTimer = setInterval(() => {
      this.click();
    }, 1000);
  }

  click() {
    this.setState({
      date: new Date(),
    });
  }

  componentWillUnmount(): void {
    clearInterval(this.clockTimer);
  }
  render(): React.ReactNode {
    return (
      <div>
        <p>{new Date().toLocaleTimeString(this.props.locale)}</p>
      </div>
    );
  }
}

export default Clock;
