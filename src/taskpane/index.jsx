import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { FluentProvider} from "@fluentui/react-components";
import "../styles/global.scss";

/* global document, Office, module, require */

const title = "STEP Email Protection";

const rootElement = document.getElementById("container");
const root = rootElement ? createRoot(rootElement) : undefined;

/* Render application after Office initializes */
Office.onReady(() => {
  root?.render(
    <FluentProvider style={{ height: "100%" }}>
      <div className="app-root">
        <App title={title} />
      </div>
    </FluentProvider>
  );
});

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    root?.render(NextApp);
  });
}
