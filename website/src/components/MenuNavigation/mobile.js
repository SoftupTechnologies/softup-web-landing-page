import React from "react";
import SoftupLogoSvg from "../../images/softup-logo.svg";
import "./mobile.scss";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import classNames from "classnames";
import Burger from "../../images/burger.svg";
import Close from "../../images/close.svg";

const SoftupLogo = () => {
  return (
    <Link to={"/"} className="mobileSoftupLogo">
      <SoftupLogoSvg />
    </Link>
  );
};

const NumberUnderlined = ({ number, isActive }) => {
  let classes = classNames({
    mobileMenuNumber: true,
    mobileMenuNumberActive: isActive,
  });
  return <span className={classes}>{number}</span>;
};

const MobileMenuLinks = ({ menuItems, activeMenuItem }) => {
  const { t } = useTranslation();
  return (
    <div className="centerLinks">
      <div className="mobileMenuLinksDiv">
        {menuItems?.map((item, index) => {
          let classes = classNames({
            link: true,
            enabledMenuItem: item.title === activeMenuItem,
          });
          return (
            <Link
              className={classes}
              key={index}
              to={item.link}
              getProps={({ isPartiallyCurrent }) =>
                isPartiallyCurrent
                  ? { className: "link enabledMenuItem" }
                  : { className: "link" }
              }
            >
              <NumberUnderlined
                number={item.number}
                isActive={item.title === activeMenuItem}
              />
              {t(item.title)}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const MobileNavigation = ({
  menuItems,
  activeMenuItem,
  setMenuType,
  menuType,
}) => {
  return (
    <div className="mobile">
      <div className={"mobileMenuDiv"}>
        <SoftupLogo className={"mobileSoftupLogo"} />

        {menuType.showMobileMenu ? (
          <Close
            className={"mobileBurgerIcon"}
            onClick={() =>
              setMenuType({ showMobileMenu: !menuType.showMobileMenu })
            }
          />
        ) : (
          <Burger
            className={"mobileBurgerIcon"}
            onClick={() =>
              setMenuType({ showMobileMenu: !menuType.showMobileMenu })
            }
          />
        )}
      </div>
      {menuType.showMobileMenu ? (
        <MobileMenuLinks
          menuItems={menuItems}
          activeMenuItem={activeMenuItem}
        />
      ) : null}
    </div>
  );
};

NumberUnderlined.propTypes = {
  number: PropTypes.string,
  isActive: PropTypes.bool,
};

MobileMenuLinks.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  activeMenuItem: PropTypes.string,
};

MobileNavigation.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  menuType: PropTypes.object,
  setMenuType: PropTypes.func,
  activeMenuItem: PropTypes.string,
};

export default MobileNavigation;
