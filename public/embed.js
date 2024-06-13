(function () {
    // Function to create and append the iframe
    function createIframe() {
        var script = document.currentScript;
        var appUrl =
            script.getAttribute("data-url") ||
            "https://torch-react-kaif.netlify.app";
        var iframeWidth = script.getAttribute("data-width") || "375px";
        var iframeHeight = script.getAttribute("data-height") || "668px";

        var iframe = document.createElement("iframe");
        iframe.src = appUrl;
        iframe.width = iframeWidth;
        iframe.height = iframeHeight;
        iframe.style.border = "none";
        iframe.style.overflow = "hidden";

        // Append the iframe to a specific container or body
        var container =
            document.getElementById("react-app-container") || document.body;
        container.appendChild(iframe);
    }

    // Ensure the script runs after the DOM is fully loaded
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        createIframe();
    } else {
        document.addEventListener("DOMContentLoaded", createIframe);
    }
})();
