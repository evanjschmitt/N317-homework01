"use client";
import homeStyles from "@/app/page.module.css";
import Image from 'next/image';

export default function Home() {
  const heading = {
    margin: "20px",
    fontFamily: "Arial",
    
  }
  return (
    <main>
      <nav className={homeStyles.homeNav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <h1 style={heading}>Albums</h1>
      <div className={homeStyles.showcase}>
      <div className={homeStyles.info}>
        <h2>Jimmy Buffett</h2>
        <h4>Living and Dying in 3/4 Time</h4>
        <p>$25.99</p>
        <button><a href="#">Buy Now!</a></button>

    </div>
    <div className={homeStyles.coverImg}>
    <Image
      src="/img/jimmy.png"
      alt="Jimmy Buffett Album Cover"
      width={250}
      height={250}
    />
    </div>
      </div>

      <div className={homeStyles.showcase}>
        <div className={homeStyles.info}>
         <h2>Noah Kahan</h2>
          <h4>Live From Fenway Park</h4>
          <p>$29.99</p>
          <button><a href="#">Buy Now!</a></button>
       </div>
    <div className={homeStyles.coverImg}>
    <Image
      src="/img/noah.png"
      alt="Noah Kahan Album Cover"
      width={250}
      height={250}
    />
    </div>
      </div>
    <footer className={homeStyles.siteFooter}>
      <p>Copyright 2024 Ev&rsquo;s Albums</p>
    </footer>
    </main>
  );
}
