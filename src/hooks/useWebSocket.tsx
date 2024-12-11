import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("ws://localhost:8080");

export default function useWebSocket ()  {
  const sendEventToServer = () => {
    console.log("");
  };

  useEffect(() => {
    socket.connect();
  }, []);

  return sendEventToServer;
};
