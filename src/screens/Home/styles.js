import styled from "styled-components";

const Styles = styled.div`
.WrapperCarousel{
    background-color:rgba(0,0,0,0.8);
}
#head-section{
    color: rgba(0,0,0,0.8);    
}
i:hover{
    cursor: pointer;
}
.customContainer{
    width:90%;
    margin:0 auto;
}
.
@media(max-width : 600px){
    .customContainer{
        width:100%;
    }
}
@media(max-width: 760px){
    #head-section{
        margin-bottom:3rem
    }
    #head-box{
        padding: 0 30px !important;
    }
    #headOnlyDesktopDisplay{
        display:none !important;
    }
    #head-section .head-para{
        font-size: 25px;
        letter-spacing:0;
    }
    #head-section .head-title{
        font-size: 15px
    }
    #head-section .rgba{
        height: 60vh;
    }
    #head-section .slided-block{
        height: 60vh;
    }
    #head-section .carousel-item{
        height: 60vh;
    }
    .head-icons{
        display: none;
    }
    #chat-icon{
        display: none !important;
    }
    .head-mobile-display{
        opacity: 0.9 !important;
        display: inline !important;
    }
    #mobile-visible-small-head-box-img{
        display: inline !important;
    }
    #mobile-visible-small-head-box-title{
        display: inline !important;
    }
    #mobile-disable-small-head-box-title{
        display: none !important;
    }
    #mobile-visible-under-line-link{
        display: inline !important;
        font-size:20px;
    }
    .sub-footer{
        width:100% !important;
        padding: 2rem 2rem 0 2rem !important;
    }
}
#carousel-caption{
    position: absolute;
    top:25%;
    left:50%;
    padding-top:4rem;
    text-align: left;
    font-family: 'Comfortaa', cursive;
}
#head-box{
    transform:translateY(-5rem)
}
.rgba{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    background-color: rgba(0,0,0,0.7);
    height:90vh;
    width: 100%;
    position: absolute;
    z-index: 1;
}
.carousel-inner{
    position: relative !important;

}
@media(max-width: 990px){
    #carousel-caption2{
        display: none;
    }
}
.carousel-indicators{
    width:200px;
    height:30px;
    align-items: center;
    border-radius: 4px ;
    padding-left: 20px;
    margin-left:10%;
    margin-right:0
}
.carousel-indicators li{
    width:10px;
    height: 10px;
    border-radius: 50%;
    background-color:#d1d1d1;
}
.carousel-indicators .active{
    background-color:#28a745;
}
.carousel-control-prev{
    width:100px;
}
.carousel-control-next{
    width:100px;
}
.carousel-item{
    height:90vh;

}
.slided-block{
    height:90vh;
}

.head-para{
    font-size:55px;
    color:#d1d1d1;
    margin-bottom:5px;
    letter-spacing:5px !important;
    
}
.head-title{
    font-size:25px;
    color:#fff;
    font-family: 'Comfortaa', cursive;
}
.head-small-uLine{
    border-bottom:2px solid #a09c9c;
    color:#b8b5b5;
}
.carousel-inner .head-small-uLine:hover{
    border-bottom: 2px solid blue;
    color: rgb(52, 52, 116);
}
.fa-play-circle-o{
    transform:translateY(5px);
}
i:hover{
    cursor: pointer;
}
.fa-play-circle-o::before{
    font-size:30px;
    color:#28a745;
    padding-left:10px
}
.headContactTitle{
    color:#2b2a2a;
}
.headAddress{
    font-size:13px;
}
#small-head-box-section{
    opacity: 0.9;
}
img{
    object-fit: cover;
}
.small-head-box{
    height:200px;
    width:95%;
}

.small-head-box-title{
    font-weight: bold;
    color: #28a745;
    margin-bottom:10px;
}
a:hover{
    color: #28a745;
}
.small-head-box-para{
    font-size:16px important;
    color:black !important;
    display:none
}
#tracking{
    padding:50px 0;
    background-color:#f2f2f2;
    opacity: 0.9;
}
#tracking h6{
    margin-top:10px;
}
.title{
    font-size:30px;
    color: #28a745;
    font-weight:bold
}
.feature-decoration{
    width: 100px;
    border-bottom: 2px solid  #28a745;
}

.overlay{
    position: absolute;
    top: 0;
    width: 0%;
    background-color: rgba(0,0,0,0.7);
    height: 200px;
    overflow: hidden;
	opacity: 0.8;
    transition: 0.5s linear;
    text-align: center;
}
#small-head-box-section .col:hover .overlay{
    width: 95%;
    height: 200px;
	transition: 0.5s;
}
.onhover2 img:hover{
    box-shadow: 2px 2px 8px rgba(0,0,0,0.6);
    cursor:pointer;
}
#small-head-box-section .col{
    padding: 0;
    margin:0 5px;
}
.overlay .btn{
    transform: translateY(5rem);
    padding: 5px 60px;
    border: 1px solid #28a745;
    background-color: transparent;
}
.overlay .btn:hover{
    background-color: #28a745;
}
.expert-line-para{
    font-size:13px;
}
#expert-lines-section .col-md-3{
padding: 0;
margin: 0;
}
.expert-line-img{
    height:150px;
    width:90%;
    margin: 0 auto;
}

.overlay2{
    position: absolute;
    width: 80.5%;
    top: 0;
    height: 0px;
    background-color: rgba(255,255,255,0.5);
    overflow: hidden;
    transition: 0.5s linear;
    text-align: center;
    
}

.overlay2 img{
    margin-top: 2.5rem;
}
.overlay2 img:hover{
    cursor: pointer;
}
#tracking .onhover2:hover .overlay2{
    height: 150px;
	transition: 0.5s;
}
.preview{
    color: #2b2a2a;
}





@media(max-width: 990px){

    #partners-in-success .container{
        max-width: 95%;
    }
}
.joint-ventures{
    width:90%;
    margin:0 auto;
    background-color: #fff;
    transform: translateY(5rem);
    padding:3rem;    
    box-shadow: 0px 0px 5px 0px #d1d1d1;

}
.joint-ventures-img{
    height:200px;
    width:90%;
}

.under-line-link{
    color:rgb(54, 53, 53);
    outline: none;
}
.under-line-link:hover{
    text-decoration: none;
}
.company-news-happenings-title{
    font-weight: bold;

}
.company-news-happenings-para{
    font-size: 13px;
}

.company-news-happenings-description{
    font-size:15px;
}

.fslightbox-source{
    height:90% !important;
}

`;

export default Styles;