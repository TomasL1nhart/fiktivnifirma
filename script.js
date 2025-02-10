document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    const submitButton = form.querySelector('button');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Zabraň odeslání formuláře

        // Získání hodnot formuláře
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        // Validace
        if (name === "" || email === "" || message === "" || !validateEmail(email)) {
            // Chybný formulář - zobrazení modálního okna
            new bootstrap.Modal(document.getElementById('errorModal')).show();
        } else {
            // Správně vyplněný formulář - animace odeslání
            submitButton.disabled = true;
            submitButton.innerHTML = "Odesílání...";
            submitButton.classList.add("btn-disabled");

            // Simulace odeslání
            setTimeout(function () {
                form.reset();
                submitButton.disabled = false;
                submitButton.innerHTML = "Odeslat";
                submitButton.classList.remove("btn-disabled");
            }, 2000); // Simulace odeslání po 2 vteřinách
        }
    });

    // Funkce pro validaci emailu
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }
});
