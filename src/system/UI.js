class Ui {
  constructor() {
    this.playerLoginForm();
  }

  playerLoginForm() {
    const container = document.querySelector("#ui-container");
    container.innerHTML = "";

    //Jupikpoly header h1
    let h1 = document.createElement("h1");
    h1.innerHTML = "JUPIKPOLY&trade;";
    h1.classList.add("ui-header");
    container.appendChild(h1);
    //

    //div for choose nickname input and button
    let div = document.createElement("div");
    container.appendChild(div);
    //

    //nickname input
    let input = document.createElement("input");
    input.id = "nickname-input";
    input.classList.add("ui-input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Nickname");
    div.appendChild(input);
    //

    //choose nickname button
    let button = document.createElement("button");
    button.innerHTML = "Accept";
    button.id = "nickname-accept-button";
    button.classList.add("ui-button");
    button.onclick = () => {
      net.handleNickname = document.querySelector("#nickname-input").value;
      this.lobbyForm();
    };
    div.appendChild(button);
    //
  }

  lobbyForm() {
    const container = document.querySelector("#ui-container");
    container.innerHTML = "";

    //Jupikpoly header h1
    let h1 = document.createElement("h1");
    h1.innerHTML = "JUPIKPOLY&trade;";
    h1.classList.add("ui-header");
    container.appendChild(h1);
    //

    //Create a lobby button
    let button = document.createElement("button");
    button.innerHTML = "Create a lobby";
    button.id = "create-lobby-button";
    button.classList.add("ui-button");
    button.onclick = net.createLobby;
    container.appendChild(button);
    //

    //div for join a lobby input and button
    let div = document.createElement("div");
    container.appendChild(div);
    //

    //Join lobby input
    let input = document.createElement("input");
    input.id = "join-lobby-id-input";
    input.classList.add("ui-input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Lobby ID");
    div.appendChild(input);
    //

    //Join lobby button
    button = document.createElement("button");
    button.innerHTML = "Join a lobby";
    button.id = "join-lobby-button";
    button.classList.add("ui-button");
    button.onclick = net.joinLobby;
    div.appendChild(button);
    //
  }
}
