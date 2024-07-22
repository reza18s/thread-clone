import MessageContainer from "@/components/messages/MessagesContainer";
import Sidebar from "@/components/sidebar/SideBar";
const Home = () => {
  return (
    <div className="flex h-[80vh] w-full overflow-hidden rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding backdrop-blur-lg backdrop-filter md:h-[550px] md:max-w-screen-md">
      <Sidebar />
      {/* <MessageContainer /> */}
    </div>
  );
};
export default Home;
