export default function Home() {
  return (
    <main className="download-site">
      <header className="topbar"><a className="wordmark" href="#top">nearfield<span>.</span></a><a className="top-link" href="#how">HOW IT WORKS</a></header>
      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow">THE WIFI STAND SETUP APP</p><h1>Make your Wi-Fi<br />a <span>one-tap</span> thing.</h1><p className="lead">Set up your NFC stand once. Your customers tap their phone and join your Wi-Fi.</p><a className="download-button" href="#download">Get the Android app <span>↓</span></a><p className="requirements">For Android phones with NFC</p></div>
        <div className="product-card" aria-label="Nearfield Wi-Fi NFC stand illustration"><div className="tag"><div className="waves"><i/><i/><i/></div><span>NFC</span></div><div className="stand-base"/><div className="tag-shadow"/></div>
      </section>
      <section className="steps" id="how"><p className="eyebrow">SET IT UP IN THREE STEPS</p><div className="step-grid"><article><small>01</small><h2>Enter your Wi-Fi</h2><p>Open the app and enter your network name and password.</p></article><article><small>02</small><h2>Tap your stand</h2><p>Hold your Android phone against the writable NFC tag to save the network.</p></article><article><small>03</small><h2>Guests tap to join</h2><p>Your customers tap the stand with a compatible phone and follow its join prompt.</p></article></div></section>
      <section className="download-section" id="download"><p className="eyebrow">ANDROID APP</p><h2>Ready to set up your stand?</h2><p>The app source is available now. An installable APK will be added after it is built and tested.</p><a className="source-link" href="https://github.com/nirc645-arch/nfc-product">View project on GitHub ↗</a></section>
      <footer className="footer"><a className="wordmark" href="#top">nearfield<span>.</span></a><span>Wi-Fi sharing, made simple.</span></footer>
    </main>
  );
}
