import React from 'react';
import { FaTruck, FaTag, FaHeart, FaFunnelDollar } from 'react-icons/fa'; // Example icons

const HowItWorks = () => {
  return (
    <div style={styles.container}>
      <section style={styles.heroSection}>
        <h1 style={styles.title}>Explore the Beauty of Tunisia</h1>
        <p style={styles.subtitle}>A modern platform for buying and selling authentic Tunisian crafts.</p>
        <img src="https://th.bing.com/th/id/R.a73326584f66fddedca915a551bba780?rik=ERdVFRvGjMWG0Q&pid=ImgRaw&r=0" alt="Tunisian Landscape"  style={styles.heroImage} />
      </section>

      <section style={styles.infoSection}>
        <div style={styles.infoBox}>
          <FaTruck style={styles.icon} />
          <h2>Fast Worldwide Shipping</h2>
          <p>Get your favorite Tunisian products delivered to your doorstep, no matter where you are.</p>
        </div>

        <div style={styles.infoBox}>
          <FaTag style={styles.icon} />
          <h2>Exclusive Artisan Products</h2>
          <p>Discover unique, handcrafted items that you won't find anywhere else.</p>
        </div>

        <div style={styles.infoBox}>
          <FaHeart style={styles.icon} />
          <h2>Support Local Communities</h2>
          <p>Every purchase directly benefits the artisans and their families.</p>
        </div>
      </section>

      <section style={styles.funFactsSection}>
        <h2>Did You Know?</h2>
        <ul style={styles.funFactsList}>
          <li>Tunisia is home to some of the oldest crafts in the Mediterranean.</li>
          <li>The Tunisian market is known for its vibrant colors and rich history.</li>
          {/* Add more fun facts */}
        </ul>
      </section>

      <section style={styles.ctaSection}>
        <FaFunnelDollar style={{ ...styles.icon, fontSize: '4rem' }} />
        <h2>Start Your Tunisian Adventure Today</h2>
        <button onClick={() => console.log('Navigate to Sign Up')} style={styles.ctaButton}>Sign Up Now</button>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '2rem',
    color: '#333',
  },
  heroSection: {
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.2rem',
    margin: '1rem 0',
  },
  heroImage: {
    maxWidth: '25%',
    height: 'auto',
    borderRadius: '10px',
  },
  infoSection: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: '2rem',
  },
  infoBox: {
    maxWidth: '300px',
    margin: '1rem',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  funFactsSection: {
    backgroundColor: '#f9f9f9',
    padding: '2rem',
    borderRadius: '10px',
    marginBottom: '2rem',
  },
  funFactsList: {
    textAlign: 'left',
  },
  ctaSection: {
    padding: '2rem',
    backgroundColor: '#51b884',
    color: 'white',
    borderRadius: '10px',
  },
  ctaButton: {
    backgroundColor: 'white',
    color: '#51b884',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.2rem',
  },
};

export default HowItWorks;
