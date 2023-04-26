import React from 'react';
import EmmetBridge from './EmmetBridge';


import LinkLogo from '../assets/img/link.svg';
import Telegram from '../assets/img/social/telegram.svg';
import Twiter from '../assets/img/social/twiter.svg';
import Discord from '../assets/img/social/discord.svg';
import Github from '../assets/img/social/github.svg';

import Tokens1 from '../assets/img/tokken/Tokens.svg';
import Tokens2 from '../assets/img/tokken/Tokens (1).svg';
import Tokens3 from '../assets/img/tokken/Tokens (2).svg';
import Tokens4 from '../assets/img/tokken/Tokens (3).svg';
import Tokens5 from '../assets/img/tokken/Tokens (4).svg';
import Tokens6 from '../assets/img/tokken/Tokens (5).svg';
import Tokens7 from '../assets/img/tokken/Tokens (6).svg';
import Tokens8 from '../assets/img/tokken/Tokens (7).svg';
import Tokens9 from '../assets/img/tokken/Tokens (8).svg';
import Tokens10 from '../assets/img/tokken/Tokens (9).svg';
import Tokens11 from '../assets/img/tokken/Tokens (10).svg';
import Tokens12 from '../assets/img/tokken/Tokens (11).svg';
import Tokens13 from '../assets/img/tokken/Tokens (12).svg';
import Tokens14 from '../assets/img/tokken/Tokens (13).svg';

import BoxLogo1 from '../assets/img/boxlogo-1.svg';
import BoxLogo2 from '../assets/img/boxlogo-2.svg';
import BoxLogo3 from '../assets/img/boxlogo-3.svg';
import BoxLogo4 from '../assets/img/boxlogo-4.svg';

import Security1 from '../assets/img/Security-1.png';
import Security2 from '../assets/img/Security-2.png';
import Security3 from '../assets/img/Security-3.png';
import Security4 from '../assets/img/Security-4.png';
import Security5 from '../assets/img/Security-5.png';
import Security6 from '../assets/img/Security-6.png';

import APISVG from '../assets/img/api.svg';
import Check from '../assets/img/check-bold.svg';

import TypeScriptAccordion from './TypeScriptAccordion';
import FAQAccordion from './FAQAccordion';



function Homepage() {
    return (
        <div className="pageWrap">

            <section className="banar_area home_banar">
                <div className="container">
                    <div className="banag_content">
                        <div className="banarContent_top">
                            <h1 className='page_title'>
                                Secure ERC-20 Transfer <br />
                                Between <span className='text_art'>Ethereum</span> <br />
                                via a Decentralized Bridge.
                            </h1>
                            <p>A DAO-managed decentralized fungible token bridge for swift and secure cross-chain transactions from an intuitive user-friendly interface.</p>
                            <a href="#" className='enterApp'>EXPLORE <img src={LinkLogo} alt="LinkLogo" /></a>
                        </div>
                        <div className="banar_bottom">
                            <ul className="social">
                                <li><a href="#"><img src={Telegram} alt="Telegram" /></a></li>
                                <li><a href="#"><img src={Twiter} alt="Twiter" /></a></li>
                                <li><a href="#"><img src={Discord} alt="Discord" /></a></li>
                            </ul>
                            <a href="#" className='gitUrl'><img src={Github} alt="Github" /> SOURCE CODE</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tokken_area">
                <div className="tokken_list">
                    <div className="tokken_item">
                        <img src={Tokens1} alt="Tokken" />
                    </div>
                    <div className="tokken_item">
                        <img src={Tokens2} alt="Tokken" />
                    </div>
                    <div className="tokken_item">
                        <img src={Tokens3} alt="Tokken" />
                    </div>
                    <div className="tokken_item">
                        <img src={Tokens4} alt="Tokken" />
                    </div>
                    <div className="tokken_item">
                        <img src={Tokens5} alt="Tokken" />
                    </div>
                    <div className="tokken_item">
                        <img src={Tokens6} alt="Tokken" />
                    </div>
                    <div className="tokken_item">
                        <img src={Tokens7} alt="Tokken" />
                    </div>
                    <div className="tokken_item">
                        <img src={Tokens8} alt="Tokken" />
                    </div>
                    <div className="tokken_item">
                        <img src={Tokens9} alt="Tokken" />
                    </div>
                    <div className="tokken_item">
                        <img src={Tokens10} alt="Tokken" />
                    </div>
                    <div className="tokken_item">
                        <img src={Tokens11} alt="Tokken" />
                    </div>
                    <div className="tokken_item">
                        <img src={Tokens12} alt="Tokken" />
                    </div>
                    <div className="tokken_item">
                        <img src={Tokens13} alt="Tokken" />
                    </div>
                    <div className="tokken_item">
                        <img src={Tokens14} alt="Tokken" />
                    </div>
                </div>
            </section>

            <section className="feature_box_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="feature_box">
                                <img src={BoxLogo1} alt="BoxLogo1" className="feature_img" />
                                <h3>Unprecedented Security</h3>
                                <p>Empowered with tools mitigating the previous and anticipated attacks.</p>
                                <a href="#" className='readMore'>READ MORE <img src={LinkLogo} alt="Link" /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="feature_box">
                                <img src={BoxLogo2} alt="BoxLogo2" className="feature_img" />
                                <h3>Intuitive UI & User Friendly API</h3>
                                <p>Easy learning curve
                                    for non-coding users
                                    and seasoned developers.</p>
                                <a href="#" className='readMore'>READ MORE <img src={LinkLogo} alt="Link" /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="feature_box">
                                <img src={BoxLogo3} alt="BoxLogo3" className="feature_img" />
                                <h3>Efficient
                                    Architecture</h3>
                                <p>Optimized storage and computational algorithms ensure reasonable costs.</p>
                                <a href="#" className='readMore'>READ MORE <img src={LinkLogo} alt="Link" /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="feature_box">
                                <img src={BoxLogo4} alt="BoxLogo4" className="feature_img" />
                                <h3>Latest cryptography
                                    Implementation</h3>
                                <p>On-chain and off-chain signatures safely secure sensitive transactions.</p>
                                <a href="#" className='readMore'>READ MORE <img src={LinkLogo} alt="Link" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="emmetBridge_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <EmmetBridge />
                        </div>
                        <div className="col-lg-6">
                            <div className="emmetBridge_content_area">
                                <h2>Genuine <span className='text_art'>Cross-Chain</span> <br />
                                    & <span className="text_art">Cross-Protocol</span> <br />
                                    Interoperability</h2>
                                <p>There's no need to look further. All you were looking <br />
                                    for can be found here: security, cost-efficiency, speed, <br />
                                    and member rewards.</p>
                                <ul className="dotList">
                                    <li>Easy to use UI</li>
                                    <li>Transparent fees</li>
                                    <li>Combined WEB2 and WEB3 security</li>
                                    <li>Industry acknowledged wallets support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="oneStop_area">
                <div className="container">
                    <div className="title_center">
                        <h2>One-Stop <span className='text_art'>Decentralized</span> Solution</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="oneStopBox">
                                <h3>Trade (Swap)</h3>
                                <p>Swapping refers to the process
                                    of exchanging one cryptocurrency or token for another through a decentralized exchange (DEX). DEXs allow users to trade their tokens in a peer-to-peer manner.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="oneStopBox">
                                <h3>Bridge</h3>
                                <p>If a user holds an ERC-20 token
                                    on the Ethereum blockchain
                                    and wants to use it on another blockchain network that supports the same token, they can use a bridge to transfer the token.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="oneStopBox">
                                <h3>Stake</h3>
                                <p>Staking a single asset in DeFi (Decentralized Finance) refers to the process of locking up a single cryptocurrency or token in a smart contract to earn rewards. This is often done to participate.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="oneStopBox">
                                <h3>Farm</h3>
                                <p>When a person adds liquidity
                                    to the pool, he/she will receive LP tokens. For example, if a person added liquidity to a $BNB / $BUSD pair, he/she received BNB-BUSD LP tokens.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="oneStopBox">
                                <h3>Lend</h3>
                                <p>Lending in DeFi refers to the
                                    act of depositing assets into a liquidity pool or a smart contract and earning interest on those assets. Lenders provide liquidity
                                    to the pool, and borrowers can.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="oneStopBox">
                                <h3>validate</h3>
                                <p>Delegating tokens to validator owners refers to the process of giving permission to a validator to stake tokens on behalf of a token holder. Validators are typically responsible for validating.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="typeScriot_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="typeScript_content">
                                <h2><span className="text_art">Typescript API</span></h2>
                                <TypeScriptAccordion/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={APISVG} alt="" className="apiImg" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="security_area">
                <div className="container">
                    <div className="title_center">
                        <h2><span className="text_art">Security</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="securityBox">
                                <img src={Security1} alt="" className="securityImg" />
                                <h3>Security Audits</h3>
                                <p>All the bridge components undergo security code reviews and audits. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="securityBox">
                                <img src={Security2} alt="" className="securityImg" />
                                <h3>Red team Pentesting</h3>
                                <p>WEB2 & WEB3 pentests are carries out by the leading whitehat hackers.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="securityBox">
                                <img src={Security3} alt="" className="securityImg" />
                                <h3>Blue Team Honeypots</h3>
                                <p>To spot and track our adversaries’ moves we arrange traps & honeypots.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="securityBox">
                                <img src={Security4} alt="" className="securityImg" />
                                <h3>Secure Infrastructure</h3>
                                <p>Role-based security settings on all involved endpoints. Minimal privileges required for the entity job.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="securityBox">
                                <img src={Security5} alt="" className="securityImg" />
                                <h3>Bug Bounty Program</h3>
                                <p>Responsible community members are rewarded for finding & reporting vulnerabilities.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="securityBox">
                                <img src={Security6} alt="" className="securityImg" />
                                <h3>AI/ML Security Alerts</h3>
                                <p>NN activates security tools upon detection of fraudulent activities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="roadMap_area">
                <div className="container">
                    <div className="title_center">
                        <h2><span className="text_art">Road Map</span></h2>
                    </div>
                    <div className="roadMap_box">
                        <div className="roadMap_item roadMap_item1">
                            <div className="roadMap_item_content">
                                <h3>Ideation</h3>
                                <ul className='dotList'>
                                    <li>Team Assembly</li>
                                    <li>Concept Formulation</li>
                                    <li>Website Design</li>
                                    <li>Website Development</li>
                                </ul>
                            </div>
                            <div className="roadmapPosition">
                                <img src={Check} alt="Check" />
                            </div>
                        </div>
                        <div className="roadMap_item roadMap_item2">
                            <div className="roadMap_item_content">
                                <h3>Research</h3>
                                <ul className='dotList'>
                                    <li>Field Research</li>
                                    <li>Product Architecture</li>
                                    <li>Theoretical Foundation</li>
                                    <li>White Paper v1.0</li>
                                </ul>
                            </div>
                            <div className="roadmapPosition">
                                <img src={Check} alt="Check" />
                            </div>
                        </div>
                        <div className="activemap roadMap_item roadMap_item3">
                            <div className="roadMap_item_content">
                                <h3>MVP & Pre-Sale</h3>
                                <ul className='dotList'>
                                    <li>On-Chain MVP</li>
                                    <li>Off-Chain MVP</li>
                                    <li>Fee Oracle MVP</li>
                                    <li>FT Bridge MVP</li>
                                </ul>
                            </div>
                            <div className="roadmapPosition">
                                3
                            </div>
                        </div>
                        <div className="roadMap_item roadMap_item4">
                            <div className="roadMap_item_content">
                                <h3>Security</h3>
                                <ul className='dotList'>
                                    <li>Security Audit</li>
                                    <li>Pentesting</li>
                                    <li>Mainnet Testing</li>
                                </ul>
                            </div>
                            <div className="roadmapPosition">
                                4
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq_area">
                <div className="container">
                    <div className="title_center">
                        <h2>Have a <span className="text_art">Question?</span></h2>
                    </div>
                    <FAQAccordion/>
                </div>
            </section>

        </div>
    );
}

export default Homepage;