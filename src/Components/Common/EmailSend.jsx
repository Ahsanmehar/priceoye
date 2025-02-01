function EmailSend(clicks) {
  function handleClick() {
    const email = encodeURIComponent("Ahsanmeharj@gmail.com");
    const subject = encodeURIComponent("hello");
    const body = "Hy! How r u?";

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }
}

export default EmailSend;
