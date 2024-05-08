import styled from "styled-components";

export const CardComponent = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    max-width: 1200px;
    width: 90%;
    padding-top: 1rem;
    margin: auto;
    .mobile {
        display: none;
    
    }

    @media screen and (max-width: 768px) {
        .mobile {
            display: flex;
            justify-content: center;
            gap: 1rem;
            button {
                background: transparent;
                width: 90%;
                align-items: stretch;
                justify-content: center;
                align-items: center;
                text-transform: uppercase;
                letter-spacing: 0.3rem;
                color: #fff;
                border: none;
                border-bottom: 1px solid #838391;
                padding: 1rem;
                cursor: pointer;
            }
            
        }
    }
`;

export const CardMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
        .card-image {
            width: 30%;
            img {
                width: 100%;
                object-fit: cover;
            }
        }
        .card-holder {
            width: 50%;
            padding: 1rem 0rem;
                .card-text {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  
                    h1 {
                        font-size: 5rem;
                        margin-bottom: 2rem;
                        color: #fff;
                    }
                    p {
                        font-family: "League Spartan", sans-serif;
                        font-size: 1.2rem;
                        margin-bottom: 1rem;
                        color:#838391;
                        text-align: justify;
                        width: 90%;
                    }
                    span {
                        color: #777;
                        font-size: 1rem;
                        padding-bottom: 1rem;
                        a {
                            color: #777;
                            text-decoration: none;
                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }
                .card-btn {
                    display: flex;
                    justify-content: center;
                    flex-direction: column; 
                    align-items: center;
                    padding-top: 1rem;
                    gap: 1rem;
                    button {
                        background: transparent;
                        width: 90%;
                        align-items: stretch;
                        justify-content: center;
                        align-items: center;
                        text-transform: uppercase;
                        letter-spacing: 0.3rem;
                        color: #fff;
                        border: 1px solid #838391;
                        padding: 1rem;
                        cursor: pointer;
                        span{
                            font-size: 1rem;
                            float: left;
                            margin-right: 0.5rem;
                        }
                    }
                    button:hover {
                        background-color: #838391;
                    
                    }
                }
        }

        @media screen and (max-width: 1100px) {
            flex-direction: column;
            gap: 1rem;
            .mobile {
                display: none;
            }
            .card-image {
                padding-top: 2rem;
                width: 30%;
            }
            .card-holder {
                width: 100%;
                display: flex;
                flex-direction: row;
                gap: 2rem;
                .card-text {
                    width: 50%;
                    h1 {
                        font-size: 3rem;
                    }
                    p {
                        font-size: 1rem;
                    }
                }
                .card-btn {
                    display: flex;
                    flex-wrap: wrap;
                    width: 50%;
                    gap: 1rem;
                    button {
                        font-size: 0.6rem;
                        padding: 0.8rem;
                        span {
                            font-size: 0.2rem;
                        } 
                    }
                    
                }
            }
        }
        @media screen and (max-width: 768px) {
            padding: 0 2rem;
            .card-image {
                width: 30%;
            }
            .card-holder {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                .card-text {
                    h1 {
                        font-size: 2rem;
                    }
                    p {
                        font-size: 0.8rem;
                        width: 100%;
                    }
                }
                .card-btn {
                    display: none;
                }
            }
        }
`;

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3rem 5rem;
    max-width: 98%;
    .footer {
        width: 200px; 
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        border: 1px solid #838391;
        padding: 1rem;
        gap: 0.2rem;
        text-align: flex-start;
        p {
            font-family: "League Spartan", sans-serif;
            font-size: 1rem;
            color: #838391;
      
        }
        span {
            font-size: 1.5rem;
            color: #fff;
        }
    }

    @media screen and (max-width: 1100px) {
        gap: 1rem;
        padding: 1rem 5rem;
        .footer {
            width: 100%;
            padding: 0.5rem;
            p {
                font-size: 0.8rem;
            }
            span {
                font-size: 1rem;
            }
        }
    }

    @media screen and (max-width: 768px) {
        padding: 1rem 2rem;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        .footer {
            width: 40%;
            padding: 0.5rem;
            p {
                font-size: 0.8rem;
            }
            span {
                font-size: 1rem;
            }
        }
    }
`;
