export function setupCounter(element: HTMLButtonElement) {
  document.designMode = "on";
  console.log(document.querySelectorAll(".shoppingform-row").length);
  const copy = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab.id) {
        chrome.tabs.sendMessage(
          tab.id,
          {},
          (msg) => {
            if (msg === undefined) {
              alert("解析失敗");
              return;
            }
            console.log("result message:", msg);
            navigator.clipboard.writeText(msg).then(function () {
              alert("コピー完了！");
            }, function () {
              alert("コピー失敗");
            });
          },
        );
      }
    });
  };
  element.addEventListener("click", () => copy());
}