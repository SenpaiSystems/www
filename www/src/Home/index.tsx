import AssetCrossedArm from "../assets/crossedarms.png";
import "./index.scss";
import { LanguageContext } from "../Language/locale";
import { useContext } from "react";

export default function Home() {
    const locale = useContext(LanguageContext);

    return (
        <>
            <h1>{locale.translations("about_me")}</h1>
            <div className="desktop-60">{locale.translations("AboutMePresentation")}</div>
        </>
    );
}
