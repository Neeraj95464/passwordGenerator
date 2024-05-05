import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/createPost";
import PostList from "./components/postList";
import { useState } from "react";
import PostListStoreProvider from "./store/PostListStore";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListStoreProvider>
        <div className="app-container">
          <Sidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Sidebar>
          <div className="containt">
            <Header></Header>
            {selectedTab === "Home" ? (
              <PostList></PostList>
            ) : (
              <CreatePost></CreatePost>
            )}

            <Footer></Footer>
          </div>
        </div>
      </PostListStoreProvider>
    </>
  );
}

export default App;
