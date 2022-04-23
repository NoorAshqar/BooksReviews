import React from 'react'
import { Container } from 'react-bootstrap';

import '../styles/Footer.css';
function MainFooter() {
    return (
        <footer className="main-footer">
            <Container className="footer-container">
                <div>
                    <h2>NAVIGATION</h2>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Books">Books</a></li>
                        <li><a href="#Reviews">Reviews</a></li>
                        <li><a href="#News">News</a></li>
                        <li><a href="#Contacts">Contacts</a></li>
                    </ul>
                </div>
                <div>
                    <h2>CATEGORIES</h2>
                    <div className="footer-categories">
                        <ul>
                            <li><a href="#Art">Art</a></li>
                            <li><a href="#Biography">Biography</a></li>
                            <li><a href="#Buesiness">Buesiness</a></li>
                            <li><a href="#Check Lit">Check Lit</a></li>
                            <li><a href="#Children's">Children's</a></li>
                            <li><a href="#Muslim">Muslim</a></li>
                            <li><a href="#Classics">Classics</a></li>
                            <li><a href="#Comics">Comics</a></li>
                        </ul>
                        <ul>
                            <li><a href="#Contemporary">Contemporary</a></li>
                            <li><a href="#Cookbooks">Cookbooks</a></li>
                            <li><a href="#Crime">Crime</a></li>
                            <li><a href="#Ebooks">Ebooks</a></li>
                            <li><a href="#Fantasy">Fantasy</a></li>
                            <li><a href="#Fiction">Fiction</a></li>
                            <li><a href="#Gaymer">Gaymer</a></li>
                            <li><a href="#Graphics Novles">Graphics Novles</a></li>
                        </ul>
                        <ul>
                            <li><a href="#Historical">Historical Fiction</a></li>
                            <li><a href="#History">History</a></li>
                            <li><a href="#Horror">Horror</a></li>
                            <li><a href="#Humor">Humor And Comedy</a></li>
                            <li><a href="#Manga">Manga</a></li>
                            <li><a href="#Memoir">Memoir</a></li>
                            <li><a href="#Music">Music</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>FOLLOW US</h2>
                    <ul>
                        <li><a href="#Facebook">Facebook</a></li>
                        <li><a href="#Twitter">Twitter</a></li>
                        <li><a href="#RSS">RSS</a></li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default MainFooter