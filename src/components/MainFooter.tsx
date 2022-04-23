import React from 'react'
import { Container } from 'react-bootstrap';

import './Footer.css';
function MainFooter() {
    return (
        <footer className="main-footer">
            <Container className="footer-container">
                <div>
                    <h2>NAVIGATION</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Books</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
                <div>
                    <h2>CATEGORIES</h2>
                    <div className="footer-categories">
                        <ul>
                            <li><a href="#">Art</a></li>
                            <li><a href="#">Biography</a></li>
                            <li><a href="#">Buesiness</a></li>
                            <li><a href="#">Check Lit</a></li>
                            <li><a href="#">Children's</a></li>
                            <li><a href="#">Muslim</a></li>
                            <li><a href="#">Classics</a></li>
                            <li><a href="#">Comics</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Contemporary</a></li>
                            <li><a href="#">Cookbooks</a></li>
                            <li><a href="#">Crime</a></li>
                            <li><a href="#">Ebooks</a></li>
                            <li><a href="#">Fantasy</a></li>
                            <li><a href="#">Fiction</a></li>
                            <li><a href="#">Gaymer</a></li>
                            <li><a href="#">Graphics Novles</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Historical Fiction</a></li>
                            <li><a href="#">History</a></li>
                            <li><a href="#">Horror</a></li>
                            <li><a href="#">Humor And Comedy</a></li>
                            <li><a href="#">Manga</a></li>
                            <li><a href="#">Memoir</a></li>
                            <li><a href="#">Music</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>FOLLOW US</h2>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">RSS</a></li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default MainFooter