class Ui {
    constructor(){
        this.assignEvents()
    }

    assignEvents(){
        document.getElementById('create-lobby-button').onclick = net.createLobby //Create a lobby
        document.getElementById('join-lobby-button').onclick = net.joinLobby //Join a lobby
    }
}