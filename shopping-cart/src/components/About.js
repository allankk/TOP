import '@fortawesome/fontawesome-free/css/all.min.css';

function About() {

    return (
        <div className="about">
            <h1>about</h1>

            <p>Example shop page with a shopping cart. Checkout and payments not implemented.</p>
            <p className="stack">Made with React</p>

            <a href="https://www.github.com"><i className="fab fa-github"></i><span>Github</span></a>
        </div>
    )
}

export default About;