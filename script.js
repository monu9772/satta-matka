document.addEventListener("DOMContentLoaded", function () {

  const joinButton = document.querySelector(".join-btn");

  if (joinButton) {
    joinButton.addEventListener("click", function () {
      console.log("Telegram Join button clicked");
    });
  }

});
