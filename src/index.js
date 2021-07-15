import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
// eslint-disable-next-line
import Style from "./style.css"
// eslint-disable-next-line
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_no from "./translations/no/common.json";
import common_en from "./translations/en/common.json";

    i18next.init({
        interpolation: { escapeValue: false },  // React already does escaping
        lng: 'no',                              // language to use
        resources: {
            en: {
                common: common_en               // 'common' is our custom namespace
            },
            no: {
                common: common_no
            },
        },
    });

ReactDOM.render(
<I18nextProvider i18n={i18next}>
    <App />
</I18nextProvider>,
document.getElementById("root")
)