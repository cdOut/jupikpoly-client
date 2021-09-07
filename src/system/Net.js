class Net {
  constructor() {
    this.socket = null;
    this.connection();
    this.createLobby = this.createLobby.bind(this);
    this.joinLobby = this.joinLobby.bind(this);
  }

  connection() {
    this.socket = io("http://localhost:3000/");
    this.socket.on("connection");
    console.log(this.socket);
  }

  createLobby() {
    this.socket.emit("createLobby");
  }

  joinLobby() {
    const lobbyId = document.getElementById("join-lobby-id-input").value;
    this.socket.emit("joinLobby", lobbyId);
  }
}
