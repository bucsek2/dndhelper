import * as React from "react";
import * as ReactDOM from "react-dom";

import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { UnderdarkEncounter } from "./components/underdarkEncounter/underdarkEncounter";

ReactDOM.render(
    <UnderdarkEncounter />,
    document.getElementById("root")
);
