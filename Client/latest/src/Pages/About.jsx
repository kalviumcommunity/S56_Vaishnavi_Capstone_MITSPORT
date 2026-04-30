import React from "react";
import Nav from "../Components/Nav";
import "./About.css"
import image from "../images/abc.jpeg"

function About(){
    return(
        <div className="about-page">
            <Nav/>
            
            <div className="about-header">
                <h1 className="text-gradient">About ALLMITSPORT</h1>
                <p style={{color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto'}}>
                    MIT Art Design and Technology University has been making concerted efforts for taking a leap towards world class education.
                </p>
            </div>

            <div className="about-content">
                <div className="about-section glass-panel">
                    <h2>Overview</h2>
                    <p>It is amongst the leading Government recognized Private University within the ambit of the renowned MIT Group of Institutions, Pune. MIT ADT University is a multi-disciplinary university which is famous for its sprawling lush green campus of 125 acres and picturesque location, spanning over the large area of 125 acres. University is the manifestation of the serenity of Mother Nature and aesthetically built on the banks of Mula-Mutha river.</p>
                    <p style={{marginTop: '15px'}}>The University is driven by the vision of delivering the world-class value-based education and Holistic development of the student's personality, enabling them to transform themselves into Future Global Leaders.</p>
                </div>

                <div className="about-section glass-panel">
                    <h2>Vision</h2>
                    <p>"Committed towards building a strong Nation through sports. Empowering athletes to transcend limits, achieve excellence, and inspire generations through the transformative power of sports."</p>
                </div>

                <div className="about-section glass-panel">
                    <h2>Mission</h2>
                    <p>"It is our mission to facilitate the young generation to develop as healthy and balanced human beings with a wisdom to create life full of peace, passion and purpose. Our mission at ALLMITSPORT is to foster a vibrant community of sports enthusiasts, where passion meets expertise. We strive to deliver top-notch content, expert advice, and unparalleled support to help athletes thrive in their athletic endeavors."</p>
                </div>

                <div className="about-section glass-panel">
                    <h2>Objectives</h2>
                    <ul>
                        <li>To develop and upgrade with the excellent, appropriate sports infrastructure facilities like playing fields, gymnasium, swimming pool supported with excellent quality of sports equipment.</li>
                        <li>To maintain the indoor and outdoor sports Infrastructure facilities in the University campus.</li>
                        <li>To search sports talent at the institutional level and to groom students to become better performers in national and international arena.</li>
                        <li>To promote student's participation in sports and create awareness about the benefits of physical education.</li>
                        <li>To spread the culture of sports among the students of MIT ADT University.</li>
                        <li>To provide systematic coaching programs by involving qualified & competent sports expertise to groom university teams & sports talent.</li>
                        <li>To project the potential talent of the university by organizing state, national, and international level tournaments.</li>
                        <li>To provide incentives and awards to sports persons to motivate students to participate in various sports events.</li>
                    </ul>
                </div>

                <div className="about-section glass-panel">
                    <h2>Infrastructure</h2>
                    <ul>
                        <li>The Sports Infrastructure includes a well-equipped gymnasium, Olympic size swimming pool, water polo, badminton courts, basketball courts, volleyball courts, tennis courts, football playground, cricket playground, kabaddi playground, kho-kho playground, table tennis, rowing, chess, boxing, archery and facilities available for all students.</li>
                        <li>Our Sports Infrastructure is well equipped to train the students and harness their latent potential in wide-ranging sports</li>
                        <li>Being the apex body for sports at MIT ADTU, we in addition to hosting sports tournaments, also actively involved in a number of social and informal events. We take pride in making a significant contribution to our students' personality, fitness and health development.</li>
                        <li>MIT-ADT University Sports Department has been conceptualizing and organizing yearly sports competitions in University campus at various levels viz. Inter collegiate, District and State Level.</li>
                    </ul>
                </div>

                <div className="about-section glass-panel">
                    <h2>Message</h2>
                    <p>MIT-ADTU Sports department is the nerve centre for all sports initiatives by the University. We are a unique multi-campus and multi-disciplinary organization, conducting university approved academic programmes in diverse fields and non-academic development programs. It has been our culture & tradition to nurture our student's persona to shape-up their all-round personality.</p>
                    <p style={{marginTop: '15px'}}>At MIT ADT University we believe that extracurricular activities are of paramount importance for comprehensive development of a student. By taking part in various extracurricular activities the student will be able to achieve overall personality development.</p>
                    <p style={{marginTop: '15px'}}>MIT-ADT University is known for nurturing and producing the best talents from wide-ranging fields. Our Students have displayed and proved their calibre and excellence in the field of academics & Sports on various occasions. MIT-ADT University has also built a World Class Sports Infrastructure which is beneficial to our students in building desired level of competency and gaining finesse in their craft. It enables them to qualify for the national & international level sports events and winning laurels for their institutions and the country.</p>
                    <p style={{marginTop: '15px'}}>'Vishwanath Sports meet' is rated amongst the most prestigious sporting event happening under the aegis of MIT-ADT University and has been credited with discovering great talents from the colleges and universities in Maharashtra.</p>
                </div>
                
                <img className="about-image" src={image} alt="MIT Campus" />
            </div>
        </div>
    )
}

export default About;