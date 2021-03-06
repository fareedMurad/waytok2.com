import styled from "styled-components";

const Styles = styled.div`

.head-section{
    background:#F5F9FF;
}
.k2-head-box{
    margin:50px 0 30px 0;
}
.k2-head-box h2{
    font-weight:bold;
    color:#28a745;
}
.k2-intro h4{
    display:inline;
    margin:0 30px;
    color:#28a745;
}
.k2-intro span{
    font-weight:bolder;
}
.k2-img{
    width:100%;
    height:500px
}
.k2-img img{
    width:100%;
    height:100%;
}
img{
    object-fit:unset;
}
.common-styles{
    padding:80px 0;
    ${'' /* background-color:#F5F9FF */}
}
h1,h2,h3,h4,h5,h6{
    color: #28a745;
}
.common-styles h3{
    font-weight:bold;
    color:#28a745;
    margin-bottom:20px
}
.common-styles p{
    font-family: 'Century Gothic';
    font-size:17px;
    line-height: 33px;
}
.side-images img{
    width:100%;
    margin:20px 0;
    height:320px;
    object-fit:cover;

}
.bottom-image img{
    width:100%;
    margin:15px 0;
    height:300px;
}



@media(max-width: 760px){
    
}

`;

export default Styles;