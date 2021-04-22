function handleSubmit1 () {
    const name = document.getElementById('username').value;

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */

    sessionStorage.setItem("NAME", name);

    return;
}
