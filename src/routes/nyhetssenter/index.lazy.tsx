import { createLazyFileRoute } from '@tanstack/react-router'
import { Text } from "@politiet/pds";
import { useEffect } from 'react';
// import { getContent } from "./utils/cdaUtils";

export const Route = createLazyFileRoute('/nyhetssenter/')({
    component: NyhetssenterComponent,
})

function NyhetssenterComponent() {
    useEffect(() => {
        // Dynamically load the web component script
        const script = document.createElement("script");
        script.src = "https://politiloggen-vis-frontend.bks-prod.politiet.no/main.js";
        script.async = true;
        document.body.appendChild(script);

        // Dynamically load the web component stylesheet
        const link = document.createElement("link");
        link.href = "https://politiloggen-vis-frontend.bks-prod.politiet.no/main.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    return (
        <article className="nyhetssenter bg-slate-700">
            <Text isSectionTitle styleAs="h2" type="h2">
                Politiets nyhetssenter
            </Text>
            {/* <politiloggen-vis></politiloggen-vis> */}
        </article>
    );
    }