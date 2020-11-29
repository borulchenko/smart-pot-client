(function(window) {
    window.env = window.env || {};

    // Injecting OS variables
    window["env"]["apiUrl"] = "${CLOUD_API_URL}";
})(this);
