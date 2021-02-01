import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Header, ClientHeader, AdminHeader } from "./index";

export default {
  title: "Header",
  component: Header,
  decorators: [withKnobs],
};

export const Default = () => (
  <Header>{text("Text", "Track Your Package")}</Header>
);

export const ClientLogo = () => (
  <ClientHeader onLogoClick={action("onLogoClick")}>
    {text("Text", "Client Logo")}
  </ClientHeader>
);

export const AdminLogo = () => (
  <AdminHeader onLogoClick={action("onLogoClick")}>
    {text("Text", "Admin Logo")}
  </AdminHeader>
);
