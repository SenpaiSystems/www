import React, { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "../Language/Switcher";
import { LanguageContext } from "../Language/locale";
import "./index.scss";
import MenuIcon from "../assets/menu.svg";

interface NavLink {
    title: string | ReactNode;
    href: string;
}

export default function Menu() {
    const locale = useContext(LanguageContext);
    const languages = { fr: "Français", en: "English" };
    const links: NavLink[] = [
        { title: "Home", href: "/" },
        { title: "Blog", href: "https://blog.senpaisilver.com" },
        { title: "GitHub", href: "https://github.com/SenpaiSilver" },
        { title: "Twitter", href: "https://twitter.com/SenpaiSilver" },
        { title: "Ko-Fi", href: "https://ko-fi.com/senpaisilver" },
    ];

    return (
        <section>
            <nav>
                <BurgerMenu>
                    {links.map((link) => (
                        <Link key={link.href} to={link.href}>
                            {link.title}
                        </Link>
                    ))}
                </BurgerMenu>
                <div className="utility">
                    <div id="language">
                        <LanguageSwitcher languages={languages} />
                    </div>
                </div>
            </nav>
        </section>
    );
}

interface BurgerMenuProps {
    children: ReactNode;
}

function BurgerMenu({ children }: BurgerMenuProps) {
    return (
        <div>
            <label htmlFor="burger-menu" className="burgermenu">
                <img alt="Menu" src={MenuIcon} />
            </label>
            <input type="checkbox" id="burger-menu" className="burgermenu" />
            <div id="links">{children}</div>
        </div>
    );
}
