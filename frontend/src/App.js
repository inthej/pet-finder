import './styles/screen.css';

function App() {
  return (
    <>
      {/* menu */}
      <nav>
        <ul>
          <li>
            <a href="http://localhost:3000/">Search</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Map</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Community</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Support</a>
          </li>
        </ul>
      </nav>
      {/* main article */}
      <article>
        <h1>펫을 찾아요</h1>
        <picture>
          <source
            media="(min-width: 40em)"
            srcSet="http://placehold.it/720x405 1x, http://placehold.it/1440x810 2x"
          />
          <source srcSet="http://placehold.it/405x228 1x, http://placehold.it/810x456 2x" />
          <img src="http://placehold.it/705x405" alt="" />
        </picture>
        <p className="lead">
          Maecenas sed diam eget risus varius blandit sit amet non magna. Integer
          posuere erat a ante venenatis dapibus posuere velit aliquet.
        </p>
        <p>
          Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies
          vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et.Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit
          tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
          dolor auctor. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies
          vehicula ut id elit.
        </p>
      </article>
    </>
  );
}

export default App;
