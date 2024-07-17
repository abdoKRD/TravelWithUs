import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import getWeb3 from './web3';
import PaymentContract from './contracts/PaymentContract.json';
import './app.css';
import { AuthProvider } from './AuthContext';

function Logout() {
  localStorage.clear();
  return <Navigate to="/" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [web3, setWeb3] = useState(null);
  const mainRef = useRef(null);
  const homeRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      const web3Instance = await getWeb3();
      setWeb3(web3Instance);

      const accounts = await web3Instance.eth.getAccounts();
      setAccount(accounts[0]);

      const networkId = await web3Instance.eth.net.getId();
      const deployedNetwork = PaymentContract.networks[networkId];
      const contractInstance = new web3Instance.eth.Contract(
        PaymentContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      setContract(contractInstance);
    };

    init();
  }, []);

  const handlePayment = async (amount, recipientAddress) => {
    if (contract) {
      try {
        await contract.methods.pay(recipientAddress).send({
          from: account,
          value: web3.utils.toWei(amount.toString(), 'ether')
        });
        alert('Payment Successful!');
      } catch (error) {
        console.error(error);
        alert('Payment Failed!');
      }
    }
  };

  const scrollToMain = () => {
    mainRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar scrollToMain={scrollToMain} scrollToHome={scrollToHome}/>
                <Home ref={homeRef}/>
                <Main ref={mainRef} handlePayment={handlePayment} />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
