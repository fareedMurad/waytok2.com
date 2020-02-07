import styled from "styled-components";

const Styles = styled.div`

.contact-head h1{
    color: #28a745;
    font-weight:bolder;
}
.contact-head p{
    color: #d1d1d1;
}
.content-box{
    margin-bottom: 100px;
}



.recent-feedback{
    background-color: #F5F9FF; 
    color: #a1a1a1;
}
.recent-feedback h1, h4,h2{
    color: #1cd347;
}
.recent-feedback i{
    font-size: 4rem;
    padding-bottom: 1rem;
     color: #1edf4b;
}
.recent-feedback .col-4:hover i{
    color: #0d521d;
}
.recent-feedback .col-4:hover h4{
    color: #0d521d;
}
.recent-feedback h4{
    font-weight: lighter;
    font-size: 1.3rem;
}
.recent-feedback img{
    width:100%;
}
.feedbackperson{
    background-color:#fff;
    margin:20px 0;
    border-radius:8px;
}

@media(max-width:580px){
    .recent-feedback img{
        width:100px;
        height:100px;
}
.feedbackperson{
    text-align:center
}
}
`;

export default Styles;