import React from 'react';

export const Html = props => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>React Streaming</title>
      </head>
      <body>
        {props.children}
      </body>
    </html>
  );
}
