import { menu_links } from "../constant";

export default function Menu() {
  return (
    <div className="bg-white h-full w-full">
      {menu_links.map((item) => (
        <button>{item.name}</button>
      ))}
    </div>
  );
}
