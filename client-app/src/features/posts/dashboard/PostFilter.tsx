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
          content={"필터"}
          className="filter-header"
        />
        <Menu.Item
          name={"all"}
          content={"모든 포스트"}
          active={predicate.size === 0}
          onClick={() => setPredicate("all", "true")}
          className="filter-menu"
        />
        <Menu.Item
          name={"Javascript"}
          content={"Javascript"}
          active={predicate.get("category") === "javascript"}
          onClick={() => setPredicate("category", "javascript")}
          className="filter-menu"
        />
        <Menu.Item
          name={"CSS"}
          content={"CSS"}
          active={predicate.get("category") === "css"}
          onClick={() => setPredicate("category", "css")}
          className="filter-menu"
        />
        <Menu.Item
          name={"ASP.NET Core"}
          content={"ASP.NET Core"}
          active={predicate.get("category") === "aspdotnet-core"}
          onClick={() => setPredicate("category", "aspdotnet-core")}
          className="filter-menu"
        />
        <Menu.Item
          name={"Python"}
          content={"Python"}
          active={predicate.get("category") === "python"}
          onClick={() => setPredicate("category", "python")}
          className="filter-menu"
        />
        <Menu.Item
          name={"React"}
          content={"React"}
          active={predicate.get("category") === "react"}
          onClick={() => setPredicate("category", "react")}
          className="filter-menu"
        />
      </Menu>
    </>
  );
};

export default observer(PostFilter);
