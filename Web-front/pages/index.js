import Head from 'next/head';
import Image from 'next/image';
import { Container } from '@mui/material';
import { fontSize, padding } from '@mui/system';

export default function Home() {
    return (
        <Container>
            <div data-aos="fade-up">
                <div>
                    <div data-aos="fade-up" data-aos-delay="200">
                        <div>
                            <h3>Who Need Our service?</h3>
                            <h2>내용이 필요합니다 </h2>
                            <p>내용이 필요합니다</p>
                            <div>
                                <a href="#" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                    <span>Need to find answer?</span>
                                    <i></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                        <img src="images/features.png" class="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </Container>
    );
}
