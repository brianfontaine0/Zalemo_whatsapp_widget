// Widget for WhatsApp
(function () {
  if (window.customWidgetConfig) {
    const { phoneNumber, title, description } = window.customWidgetConfig;

    // Utilisez ces variables pour configurer le widget
    console.log("Numéro de téléphone:", phoneNumber);
    console.log("Titre:", title);
    console.log("Description:", description);

    // Load FontAwesome
    var fontAwesomeScript = document.createElement("script");
    fontAwesomeScript.src = "https://kit.fontawesome.com/b3f34b62ee.js";
    fontAwesomeScript.crossOrigin = "anonymous";
    document.head.appendChild(fontAwesomeScript);

    var tailwindCSS = document.createElement("script");
    tailwindCSS.src = "https://cdn.tailwindcss.com";
    tailwindCSS.crossOrigin = "anonymous";
    document.head.appendChild(tailwindCSS);

    var style = document.createElement("link");
    style.rel = "stylesheet";
    style.href =
      "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
    document.head.appendChild(style);

    var tailwindCDN2 = document.createElement("script");
    tailwindCDN2.src =
      "https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries";
    tailwindCDN2.crossOrigin = "anonymous";
    document.head.appendChild(tailwindCDN2);

    // Create a new WhatsApp widget element
    var widget = document.createElement("div");
    widget.id = "whatsapp-widget";

    // Add some styling to the widget
    widget.style.position = "fixed";
    widget.style.bottom = "20px";
    widget.style.right = "20px";
    widget.style.width = "50px";
    widget.style.height = "50px";
    widget.style.background = "#25D366";
    widget.style.borderRadius = "50%";
    widget.style.display = "flex";
    widget.style.justifyContent = "center";
    widget.style.alignItems = "center";
    widget.style.color = "#fff";
    widget.style.fontSize = "24px";
    widget.style.cursor = "pointer";
    widget.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';

    // Append the widget to the body of the document
    document.body.appendChild(widget);

    // Create the contact info div
    var contactInfo = document.createElement("div");
    contactInfo.id = "contact-info";
    contactInfo.style.display = "none";
    contactInfo.style.position = "fixed";
    contactInfo.style.bottom = "90px";
    contactInfo.style.right = "20px";
    contactInfo.style.background = "#fff";
    contactInfo.style.border = "1px solid #ddd";
    contactInfo.style.padding = "15px";
    contactInfo.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    contactInfo.style.borderRadius = "8px";
    contactInfo.style.width = "450px";

    // Add content to the contact info div with variables
    contactInfo.innerHTML = `
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
      <div>
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">
            ${title}
          </div>
          <p class="text-gray-700 text-base mt-3">
            ${description}
          </p>
        </div>
        <div class="flex items-center mt-5">
          <a
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            href="https://wa.me/${phoneNumber}"
          >
            <i class="fa-brands fa-whatsapp"></i>
            <span class="text-sm font-medium transition-all group-hover:me-4">
              Nous contacter sur WhatsApp
            </span>
          </a>
        </div>
      </div>
    </div>
  `;

    // Append the contact info div to the body of the document
    document.body.appendChild(contactInfo);

    // Toggle contact info display and icon when the widget is clicked
    widget.addEventListener("click", function () {
      if (
        contactInfo.style.display === "none" ||
        contactInfo.style.display === ""
      ) {
        contactInfo.style.display = "block";
        widget.innerHTML = '<i class="fa fa-times"></i>';
      } else {
        contactInfo.style.display = "none";
        widget.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
      }
    });

    // Add event listener to close contact info when the close icon is clicked
    document.addEventListener("DOMContentLoaded", function () {
      document
        .getElementById("close-contact-info")
        .addEventListener("click", function () {
          contactInfo.style.display = "none";
          widget.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
        });
    });
  } else {
    console.error("Configuration du widget non trouvée.");
  }
})();
