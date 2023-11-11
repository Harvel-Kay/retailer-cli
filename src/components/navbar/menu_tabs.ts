interface MenuTab {
  path: string;
  label: string;
}

const menu_tabs: MenuTab[] = [
  { label: "Stock", path: "stock" },
  { label: "Sales", path: "sales" },
  { label: "Products", path: "products" },
];

export default menu_tabs;
