function displayTab(tabId) {
  document.addEventListener('DOMContentLoaded', () => {
    const activeTab = localStorage.getItem('activeTab') || 'tastes';
    displayTab(activeTab);

});
  document.getElementById("bevezetes").classList.add("hidden");
  // remove active class from all tabs
  document.querySelectorAll("#tabs button").forEach((tab) => tab.classList.remove("active"));
  // add active class to clicked tab
  document.getElementById(tabId).classList.add("active");
  // hide all contents
  document.querySelectorAll("#content > div").forEach((content) => content.classList.add("hidden"));
  // show content corresponding to clicked tab
  document.getElementById(tabId + "-content").classList.remove("hidden");
  // save active tab in local storage
  localStorage.setItem('activeTab', tabId);
};


function exit() {
  document.getElementById("bef").classList.remove("hidden");
  document.getElementById("tabs").classList.add("hidden");
  document.getElementById("content").classList.add("hidden");
  document.getElementById("exit-btn").classList.add("hidden");
  document.getElementById("bef").classList.add("active");
}