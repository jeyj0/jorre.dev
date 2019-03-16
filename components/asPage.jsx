const asPage = WrappedComponent => () => (
  <div>
    <WrappedComponent />
    <style jsx global>{`
      html,
      body {
        margin: none;
        background-color: #272727;
        color: #ffffff;
        font-family: "Lucida Console", Monaco, monospace;
      }
    `}</style>
  </div>
);

export default asPage;
