import { locations } from "@/constants";
import { WindowControls } from "@/components";
import WindowWrapper from "@/hoc/WindowWrapper";
import { Search } from "lucide-react";
import useLocationStore from "@/store/location";
import clsx from "clsx";
import useWindowStore from "@/store/window";
import type { WindowKey } from "@/constants/types.ts";

const ITEM_TO_WINDOW_KEY: Record<string, WindowKey> = {
  txt: "txtfile",
  img: "imgfile",
};

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const openItem = (item: any) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["url"].includes(item.fileType) && item.href) {
      return window.open(item.href, "_blank");
    }

    openWindow(ITEM_TO_WINDOW_KEY[item.fileType], item);
  };

  const renderList = (items: any) =>
    items.map((item: any) => (
      <li
        key={item.id}
        className={clsx(
          item.id === activeLocation.id ? "active" : "not-active",
        )}
        onClick={() => setActiveLocation(item)}
      >
        <img className="w-4" src={item.icon} alt={item.name} />
        <p className="text-sm font-medium truncate">{item.name}</p>
      </li>
    ));

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <h2>Portfolio</h2>
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>Favourite</h3>
            <ul>{renderList(Object.values(locations))}</ul>
          </div>

          <div>
            <h3>Work</h3>
            <ul>{renderList(locations.work.children)}</ul>
          </div>
        </div>

        <ul className="content">
          {activeLocation.children.map((item: any) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
