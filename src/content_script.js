chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    let all_products = "";
    document.querySelectorAll(".shoppingform-row").forEach((row) => {
        if (
            !row.classList.contains("shoppingform-head") &&
            !row.classList.contains("shoppingform-total")
        ) {
            const productName = row.querySelector(".shoppingform-col-0").innerText;
            const price = row.querySelector(".shoppingform-col-1").innerText;
            all_products += `${productName} ${price}\n`;
            console.log(productName);
        }
    });

    sendResponse(all_products);
    return true
});