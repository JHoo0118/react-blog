import React, { useContext } from "react";
import { Header, Menu } from "semantic-ui-react";
import { RootStoreContext } from "../../../app/stores/rootStore";
import { observer } from "mobx-react-lite";

const PostFilter = () => {
  const rootStore = useContext(RootStoreContext);
  const { predicate, setPredicate } = rootStore.postStore;

  return (
    <>
      <Menu vertical size={"large"} style={{ marginTop: 30 }}>
        <Header
          icon={"filter"}
          attached
          style={{ color: "#434343", height: "auto" }}
          content={"필터"}
        />
        <Menu.Item
          style={{ color: "#434343" }}
          name={"all"}
          content={"모든 포스트"}
          active={predicate.size === 0}
          onClick={() => setPredicate("all", "true")}
        />
        <Menu.Item
          style={{ color: "#434343" }}
          name={"Javascript"}
          content={"Javascript"}
          active={predicate.get("category") === "javascript"}
          onClick={() => setPredicate("category", "javascript")}
        />
        <Menu.Item
          style={{ color: "#434343" }}
          name={"ASP.NET Core"}
          content={"ASP.NET Core"}
          active={predicate.get("category") === "aspdotnet-core"}
          onClick={() => setPredicate("category", "aspdotnet-core")}
        />
        <Menu.Item
          style={{ color: "#434343" }}
          name={"Python"}
          content={"Python"}
          active={predicate.get("category") === "python"}
          onClick={() => setPredicate("category", "python")}
        />
        <Menu.Item
          style={{ color: "#434343" }}
          name={"React"}
          content={"React"}
          active={predicate.get("category") === "react"}
          onClick={() => setPredicate("category", "react")}
        />
      </Menu>
    </>
  );
};

export default observer(PostFilter);
