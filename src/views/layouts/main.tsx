import * as React from "react";

interface ILayoutProps {
  title: string;
  children?: React.ReactNode;
}


export default class MainLayout extends React.PureComponent<ILayoutProps> {
  render() {
    const { title, children } = this.props;
    return (
      <html>
        <head>
          <title>{title}</title>
          </head>
          <body>
            {children}
          </body>
      </html>
    );
  }
}
