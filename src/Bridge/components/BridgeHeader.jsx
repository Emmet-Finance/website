import React from 'react';
import { useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  detectEthereumProvider,
  getEvmAccounts,
  getEvmBalance,
  getEvmChainId,
} from 'emmet.sdk';
// UI logos
import Down from '../../assets/img/new/down.svg';
import Logo from '../../assets/img/logo.svg';
import Earth from '../../assets/img/new/earth.svg';
import ListItem from './ListItem';

import {
  supportedLanguages,
  supportedWallets,
  WalletLogos
} from '../types';

import { setWallet, setAccounts, setBalance, setChainId } from '../state/wallets';
import { setFromTokenBalances, setFromTokenAllowances } from '../state/tokens'
import { useAppSelector } from '../state/store';
import {getEvmTokenBalances, getEvmTokenAllowances} from '../wallets/EVM'

import {shortenAddress} from '../utils'

function BridgeHeader() {

  const dispatch = useDispatch();
  const chains = useAppSelector((state) => state.chains);
  const wallets = useAppSelector((state) => state.wallets);

  const handleConnect = async () => {

    const provider = await detectEthereumProvider({ silent: true });

    if (provider && typeof window.ethereum !== 'undefined') {

      let accounts = [];
      accounts = await getEvmAccounts();
      dispatch(setAccounts(accounts));
      dispatch(setBalance(await getEvmBalance(accounts[0])));
      dispatch(setChainId(await getEvmChainId()));
      const fromBalances = await getEvmTokenBalances(accounts[0], "Goerly"); // chains.fromChain
      dispatch(setFromTokenBalances(fromBalances));
      const alowances = await getEvmTokenAllowances(accounts[0], chains.fromChain);
      dispatch(setFromTokenAllowances(alowances));
      console.log(alowances)
    }

  }

  const onWalletClickHandler = (wallet) => {
    dispatch(setWallet(wallet));
    handleConnect();
  }

  return (
    <Navbar className='BridgeHeader' expand="lg">
      <Container>

        <Navbar.Brand href="https://emmet.finance"><img src={Logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="emmetNav" />

        <Navbar.Collapse id="emmetNav">
          <Nav className="ms-auto me-auto">
            <Nav.Link href="/" title="Home Page">HOME</Nav.Link>
            <Nav.Link href="#" title="Coming Soon" onClick={event => event.preventDefault()} target="_blank">TRADE</Nav.Link>
            <Nav.Link href="#" title="Coming Soon" onClick={event => event.preventDefault()} target="_blank">STAKE</Nav.Link>
            <Nav.Link href="#" title="Coming Soon" onClick={event => event.preventDefault()} target="_blank">FARM</Nav.Link>
            <Nav.Link href="#" title="Coming Soon" onClick={event => event.preventDefault()} target="_blank">LEND</Nav.Link>
            <Nav.Link href="#" title="Coming Soon" onClick={event => event.preventDefault()} target="_blank">VALIDATE</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="mobileMenu">
          <Dropdown className='mobileDropdown languageDrop'>
            <Dropdown.Toggle id="languageDrop">
              <img src={Earth} alt="Earth" className="EarthIcon" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {supportedLanguages.map(language =>
                <ListItem
                  href="#"
                  key={language}
                  name={language}
                />)}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Dropdown className='enterAppDropdown'>
          <Dropdown.Toggle className='enterApp' id="dropdown-enterApp">
            <span>
              {wallets && wallets.account
                ? shortenAddress(wallets.account)
                : "CONNECT A WALLET"
              }
            </span>
            <img src={Down} alt="Down" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {supportedWallets.map(wallet =>
              <ListItem
                onClick={() => onWalletClickHandler(wallet)}
                href="#"
                key={wallet}
                logo={WalletLogos[wallet]}
                name={wallet}
                disabled={wallet !== 'Metamask'}
              />
            )}
          </Dropdown.Menu>
        </Dropdown>

      </Container>
    </Navbar>
  );
}

export default BridgeHeader;
