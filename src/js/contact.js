async function sendContactForm(form) {
    const formData = new FormData(form);
    try {
        await fetch('https://formbold.com/s/9gJaD', {
            method: 'POST',
            body: formData,
        });
    } catch (e) {
        console.error(e);
    }
    ['email', 'subject', 'message'].forEach(id => {
        document.querySelector(`#${id}`).value = '';
    });
}

const form = document.querySelector('#contact');
const submit = document.querySelector('#submit');
if (form && submit) {
    form.addEventListener('submit', async (event) => {
        submit.disabled = true;
        event.preventDefault();
        await sendContactForm(form);
        submit.disabled = false;
    });
}