import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type LinkType = {
  path: string;
  label: string;
};

const linkList: LinkType[] = [
  {
    path: "/progress-bar",
    label: "Progress bar",
  },
  {
    path: "/loader",
    label: "Loader",
  },
  {
    path: "/select",
    label: "Select",
  },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div className={`sidebar ${isOpen ? "isActive" : ""}`}>
      {linkList.map((link) => {
        return (
          <div key={link.path} className="sidebar__link__wrapper">
            <NavLink
              key={link.path}
              onClick={onClose}
              className="sidebar__link"
              to={link.path}
            >
              {link.label}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
