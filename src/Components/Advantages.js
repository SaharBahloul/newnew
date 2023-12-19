import React from 'react';
import { FaShippingFast, FaDollarSign, FaHandsHelping, FaMobileAlt } from 'react-icons/fa'; // Ensure react-icons is installed

function Advantages() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Why Choose Us?</h1>

      <div style={styles.advantagesGrid}>
        <div style={styles.advantageItem}>
          <FaShippingFast style={styles.icon} />
          <h3 style={styles.itemTitle}>Fast Shipping</h3>
          <p>Get your products delivered rapidly with our efficient logistics.</p>
        </div>

        <div style={styles.advantageItem}>
          <FaDollarSign style={styles.icon} />
          <h3 style={styles.itemTitle}>Affordable Prices</h3>
          <p>Experience the best quality at competitive prices.</p>
        </div>

        <div style={styles.advantageItem}>
          <FaHandsHelping style={styles.icon} />
          <h3 style={styles.itemTitle}>Customer Support</h3>
          <p>Our dedicated team is always here to help you with any queries.</p>
        </div>

        <div style={styles.advantageItem}>
          <FaMobileAlt style={styles.icon} />
          <h3 style={styles.itemTitle}>User-Friendly App</h3>
          <p>Enjoy a seamless shopping experience with our intuitive mobile app.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#F5F5F5',
    color: '#333',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '40px',
  },
  advantagesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '20px',
  },
  advantageItem: {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#FFF',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    minHeight: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: '3rem',
    color: '#34bd78',
    marginBottom: '15px',
  },
  itemTitle: {
    fontSize: '1.5rem',
    marginBottom: '15px',
  }
};

export default Advantages;
