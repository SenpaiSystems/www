import "./index.scss";
import { LanguageContext } from "../Language/locale";
import { useContext } from "react";

export default function Home() {
    const locale = useContext(LanguageContext);

    return (
        <>
            <section className="about">
                <div>
                    <h1>{locale.translations("aboutTitle")}</h1>
                    <div>{locale.translations("aboutBody")}</div>
                </div>
            </section>

            <section className="support">
                <div>
                    <h1>{locale.translations("supportTitle")}</h1>
                    <div>{locale.translations("supportBody")}</div>
                </div>
            </section>
            <section className="warranty">
                <div>
                    <h1>{locale.translations("warrantyTitle")}</h1>
                    <div>{locale.translations("warrantyBody")}</div>
                </div>
            </section>
        </>
    );
}
