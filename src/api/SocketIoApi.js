const { io } = require("socket.io-client");
const Config = require("../../server");
const socket = io(Config.Url);
const IOController = {};
IOController.SocketIOInstance = undefined;

IOController.initSocket = () => {
    socket.on("connect", () => {
      console.log("socketIOClient");
      // console.log(LocalData);
    });
    socket.on("disconnect", () => {
      console.log("Disconnect Client");
    });
  };
  export default IOController;
  