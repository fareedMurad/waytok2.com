import styled from "styled-components";

const Styles = styled.div`
#head-section .container{
    width:80%;
}
.carousel-caption{
    position: absolute;
    top:10%;
    right:10%;
    left:10%;
    padding-top:4rem;
    text-align: left;
}
#carousel-caption2{
    background-color:#fff;
    width:45%;
    position: absolute;
    right: 0;
    color:#1b1a1a;
    bottom: 0;
    z-index: 100;
    left:auto;
}
.carousel-indicators{
    display: none;
}
.rgba{
    background-color: rgba(255,255,255,0.1);
    height:70vh;
    width: 100%;
    position: absolute;
    z-index: 1;
}
.slided-block{
    object-fit: cover;
}
.carousel-inner{
    position: relative !important;

}
.carousel.carousel-fade .carousel-item{
    opacity: 0;
    transition: opacity ease-out .5s;
}
.carousel.carousel-fade .carousel-item img{
    /* object-fit: cover; */
    height:70vh;
}
.carousel.carousel-fade .carousel-item.active {
    opacity: 1 !important;
}
.carousel-indicators li{
    width:10px;
    height: 10px;
    border-radius: 50%;
    background-color:#d1d1d1;
}
.carousel-indicators .active{
    background-color:#000;
}
.carousel-control-prev{
    width:100px;
}
.carousel-control-next{
    width:100px;
}
.head-para{
    font-size:20px;
    color:#000;
    margin-bottom:5px
}
.head-title{
    font-size:40px;
    color:#000
}
.head-small-uLine{
    border-bottom:2px solid #2b2a2a;
    color:#1b1a1a;
}
#operation-section{
    background-color:#f2f2f2;
}
#operation-section h2{
    color:#28a745;
}
.operation-para{
    font-size: 17px;
    line-height: 33px;
}
.oil-gas-section .title{
    color: #28a745;
}
.content-box h1{
    font-weight: 700;
}

/* Tours&JeepExcursions CSS */
#ToursJeepExcursions .ToursJeepExcursions-title{
    color:#28a745;
    font-weight: bold;
    font-size: 30px;
}
#ToursJeepExcursions .content-box img{
    height:300px;
    width:100%;
}
#ToursJeepExcursions .content-box .inner{
    padding:30px
}
#ToursJeepExcursions .content-box .inner h5{
    color:#28a745;
    padding: 0 0 10px 0;
}
#ToursJeepExcursions .content-box .inner .btn{
    padding:10px 40px;
    background-color: #28a745;
    color:#fff;
    margin-top:10px;
}
`;

export default Styles;