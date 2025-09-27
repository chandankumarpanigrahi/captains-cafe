// npm install @calcom/embed-react

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "theme": "light", "cssVarsPerTheme": { "dark": { "cal-brand": "#ffffff" } }, "hideEventTypeDetails": true, "layout": "month_view" });
        })();
    }, [])
    return <Cal namespace="30min"
        calLink="testingformeaswell/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ "layout": "month_view", "theme": "light" }}
        className="shadow-2xl rounded-2xl overflow-hidden my-6 bg-white"

    />;
};