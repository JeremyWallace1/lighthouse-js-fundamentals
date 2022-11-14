const facebookProfile = {
  name: "Jeremy Wallace",
  friends: 150,
  messages: ["hi", "I like you", "You're nice", "Thanks for that", "Some argument about politics and religion.", "Wtf mate?"],
  postMessage: function addMessage(message) {
    this.messages.push(message);
  },
  deleteMessage: function remMessage(index) {
    this.messages.splice(index, 1);
  },
  addFriend: function newFriend() {
    this.friends += 1;
  },
  removeFriend: function remFriend() {
    if (this.friends > 0) {
      this.friends -= 1;
    }
  }
}
console.log(facebookProfile);
console.log(facebookProfile.postMessage("I'm learning JavaScript with Lighthouse Labs!"))
console.log(facebookProfile.deleteMessage(3));
console.log(facebookProfile.addFriend());
console.log(facebookProfile.removeFriend());
console.log(facebookProfile);