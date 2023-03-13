const aboutLink = document.querySelector('a[href="#about"]');
    const contactLink = document.querySelector('a[href="#contact"]');
    const content = document.querySelector('.content');

    aboutLink.addEventListener('click', (event) => {
      event.preventDefault();
      content.innerHTML = "<h1>About 👩‍🦰</h1> <h4> Myself Harshita Srivastava and currently I'm learning full stack development but I'm more inclined towards frontend part and thats why I'm seeking a job opprotunity in Frontend Development field.</h4>";
    });

    contactLink.addEventListener('click', (event) => {
      event.preventDefault();
      content.innerHTML = "<h1>Contact ☎️</h1><h5><a href='mailto:harshita.sri9990@gmail.com'>e-mail</a> or <a href='https://www.linkedin.com/in/harshita-srivastava-6a278021b/'>Visit my LinkedIn Profile</a></h5>";
    });